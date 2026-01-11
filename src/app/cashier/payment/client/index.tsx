import { showMessage } from 'react-native-flash-message';
import { type CreateArticlesRequestBody, useCreateArticles } from 'src/lib';

import { PaymentValidation } from '@/components/payment/PaymentValidation';
import { showError } from '@/components/ui';
import { translate } from '@/lib/i18n';
import { useCashierStore } from '@/lib/state';

export default function CashierPaymentPage() {
  const clientArticlesByBarcode = useCashierStore.use.clientArticlesByBarcode();
  const createArticlesMutation = useCreateArticles();

  const onValidatePayment = () => {
    if (!clientArticlesByBarcode) return;

    createArticlesMutation.mutate(
      {
        client_id: useCashierStore.getState().clientId!,
        articles: Object.values(clientArticlesByBarcode).flatMap((article) =>
          new Array<CreateArticlesRequestBody['articles'][number]>(
            article.quantity
          ).fill({
            barcode: article.barcode,
            name: article.productLabel ?? '',
            img_url: article.productThumbUrl,
            thumb_url: article.productThumbUrl,
            brand_label: article.productBrand,
          })
        ),
      },
      {
        onSuccess: () => {
          useCashierStore.getState().clear();
          showMessage({
            message: translate('pages.payment.client.success-title'),
            description: translate('pages.payment.client.success-message'),
            type: 'success',
            duration: 4000,
          });
        },
        //@ts-expect-error. TODO: fix errors
        onError: showError,
      }
    );
  };

  return (
    <PaymentValidation
      articlesByBarcode={clientArticlesByBarcode}
      onValidatePayment={onValidatePayment}
      validateButtonLabel={translate('pages.payment.client.validate')}
    />
  );
}
