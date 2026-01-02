import QRCode from 'react-native-qrcode-svg';

type CartQrCodeProps = {
  readonly qrCodeValue: string;
  readonly size?: number;
};

export default function CartQrCode({
  qrCodeValue,
  size = 300,
}: CartQrCodeProps) {
  let logoFromFile = require('../ui/icons/icon.png');
  return <QRCode size={size} value={qrCodeValue} logo={logoFromFile} />;
}
