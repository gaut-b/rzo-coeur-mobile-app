import { HTTPError } from 'ky';
import { Dimensions, Platform } from 'react-native';
import { showMessage } from 'react-native-flash-message';

import { translate } from '@/lib/i18n';

export const IS_IOS = Platform.OS === 'ios';
const { width, height } = Dimensions.get('screen');

export const WIDTH = width;
export const HEIGHT = height;

const ERROR_CODE_TO_TRANSLATION_KEY: Record<string, string> = {
  invalid_credentials: 'errors.auth.invalid-credentials',
  authentication_failed: 'errors.auth.invalid-credentials',
  token_not_valid: 'errors.auth.token-invalid',
  not_authenticated: 'errors.generic.unauthorized',
  permission_denied: 'errors.generic.forbidden',
  cart_not_found: 'errors.cart.not-found',
  cart_already_collected: 'errors.cart.already-collected',
  validation_error: 'errors.generic.validation',
};

const HTTP_STATUS_TO_TRANSLATION_KEY: Record<number, string> = {
  400: 'errors.generic.bad-request',
  401: 'errors.generic.unauthorized',
  403: 'errors.generic.forbidden',
  404: 'errors.generic.not-found',
  409: 'errors.generic.conflict',
  422: 'errors.generic.validation',
  429: 'errors.generic.too-many-requests',
  500: 'errors.generic.server',
  502: 'errors.generic.server',
  503: 'errors.generic.service-unavailable',
  504: 'errors.generic.gateway-timeout',
};

const BACKEND_MESSAGE_TO_TRANSLATION_KEY: Record<string, string> = {
  unable_to_log_in_with_provided_credentials: 'errors.auth.invalid-credentials',
};

const toNormalizedCode = (code: string): string => {
  return code
    .trim()
    .toLowerCase()
    .replaceAll(/[^a-z0-9]+/g, '_')
    .replaceAll(/(^_+)|(_+$)/g, '');
};

const isObjectRecord = (value: unknown): value is Record<string, unknown> => {
  return typeof value === 'object' && value !== null;
};

const mapCodeToTranslation = (code?: string): string | undefined => {
  if (!code) return undefined;

  return ERROR_CODE_TO_TRANSLATION_KEY[toNormalizedCode(code)];
};

const mapBackendMessageToTranslation = (
  message?: string
): string | undefined => {
  if (!message) return undefined;

  return BACKEND_MESSAGE_TO_TRANSLATION_KEY[toNormalizedCode(message)];
};

const getErrorCodeFromPayload = (payload: unknown): string | undefined => {
  if (!isObjectRecord(payload)) return undefined;

  const code = payload.code ?? payload.error_code ?? payload.type;
  if (typeof code === 'string') {
    return code;
  }

  return undefined;
};

const getHumanReadableMessage = (payload: unknown): string => {
  if (!isObjectRecord(payload)) {
    return extractError(payload).trim();
  }

  const candidateFields: unknown[] = [
    payload.detail,
    payload.message,
    payload.error,
    payload.non_field_errors,
    payload.errors,
  ];

  for (const candidate of candidateFields) {
    const text = extractError(candidate).trim();
    if (text.length > 0) {
      return text;
    }
  }

  return extractError(payload).trim();
};

const readResponseBody = async (error: HTTPError): Promise<unknown> => {
  const response = error.response;
  if (!response) {
    return undefined;
  }

  try {
    const contentType =
      response.headers.get('content-type')?.toLowerCase() ?? '';
    if (contentType.includes('application/json')) {
      return await response.clone().json();
    }

    const rawText = await response.clone().text();
    return rawText.length > 0 ? rawText : undefined;
  } catch {
    return undefined;
  }
};

const resolveHttpErrorDescription = async (
  error: HTTPError
): Promise<string> => {
  const payload = await readResponseBody(error);
  const errorCode = getErrorCodeFromPayload(payload);
  const mappedCodeTranslation = mapCodeToTranslation(errorCode);

  if (mappedCodeTranslation) {
    return translate(mappedCodeTranslation as never);
  }

  const readableMessage = getHumanReadableMessage(payload);
  const mappedMessageTranslation =
    mapBackendMessageToTranslation(readableMessage);
  if (mappedMessageTranslation) {
    return translate(mappedMessageTranslation as never);
  }

  const statusCode = error.response?.status;
  if (statusCode) {
    const mappedStatusTranslation = HTTP_STATUS_TO_TRANSLATION_KEY[statusCode];
    if (mappedStatusTranslation) {
      return translate(mappedStatusTranslation as never);
    }
  }

  if (readableMessage.length > 0) {
    return readableMessage;
  }

  if (__DEV__ && errorCode) {
    console.warn('Unknown backend error code received:', errorCode, payload);
  }

  return translate('errors.generic.unknown');
};

const resolveErrorDescription = async (error: unknown): Promise<string> => {
  if (error instanceof HTTPError) {
    return resolveHttpErrorDescription(error);
  }

  if (error instanceof Error && error.message.trim().length > 0) {
    return error.message;
  }

  const fallbackMessage = extractError(error).trim();
  if (fallbackMessage.length > 0) {
    return fallbackMessage;
  }

  return translate('errors.generic.unknown');
};

// for onError react queries and mutations
export const showError = (error: unknown) => {
  console.error('An error occurred:', error);
  void resolveErrorDescription(error).then((description) => {
    showMessage({
      message: translate('errors.title'),
      description,
      type: 'danger',
      duration: 4000,
      icon: 'danger',
      position: 'top',
      floating: true,
    });
  });
};

export const showErrorMessage = (
  message: string = translate('errors.generic.unknown')
) => {
  showMessage({
    message: translate('errors.title'),
    description: message,
    type: 'danger',
    duration: 4000,
    position: 'top',
    floating: true,
  });
};

export const extractError = (data: unknown): string => {
  if (data === null || data === undefined) {
    return '';
  }

  if (typeof data === 'string') {
    return data;
  }

  if (Array.isArray(data)) {
    const messages = data
      .map((item) => extractError(item).trim())
      .filter((item) => item.length > 0);

    return messages.join('\n');
  }

  if (isObjectRecord(data)) {
    const messages = Object.entries(data)
      .map((item) => {
        const [key, value] = item;
        const formattedValue = extractError(value).trim();
        if (formattedValue.length === 0) {
          return '';
        }

        const separator = Array.isArray(value) ? ':\n' : ': ';

        return `${key}${separator}${formattedValue}`;
      })
      .filter((item) => item.length > 0);

    return messages.join('\n');
  }

  return '';
};
