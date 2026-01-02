import * as z from 'zod';

export const QR_FORMAT_RECIPIENT_BASKET = 'RECIPIENT_CART';
export const QR_FORMAT_CLIENT_BASKET = 'CLIENT_BASKET';

export const BasketQRCodeBaseSchema = z.object({
  clientId: z.string(),
});

export const ClientBasketQRCodeSchema = BasketQRCodeBaseSchema.extend({
  type: z.literal(QR_FORMAT_CLIENT_BASKET),
  articles: z.record(z.string(), z.any()),
});

export const RecipientBasketQRCodeSchema = BasketQRCodeBaseSchema.extend({
  type: z.literal(QR_FORMAT_RECIPIENT_BASKET),
  cartId: z.string(),
});

export type ClientBasketQRCodeType = z.infer<typeof ClientBasketQRCodeSchema>;

export type RecipientBasketQRCodeType = z.infer<
  typeof RecipientBasketQRCodeSchema
>;

export type BasketQRCodeType =
  | ClientBasketQRCodeType
  | RecipientBasketQRCodeType;

export const BARCODE_TYPE = 'ean13';
export const QRCODE_TYPE = 'qr';
