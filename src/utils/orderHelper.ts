import { PRODUCT_DATA } from '../data/productData';

export interface OrderFormData {
  fullName: string;
  phoneNumber: string;
  cityAddress: string;
  quantity: number;
  comment?: string;
}

export function buildSensuWhatsAppMessage(data: OrderFormData): string {
  const totalPrice = data.quantity * PRODUCT_DATA.price;
  const commentText =
    data.comment && data.comment.trim() ? data.comment.trim() : 'Жок';

  return (
    `Жаңы заказ — SENSU Collagen Tea 🌿\n\n` +
    `Аты-жөнү: ${data.fullName.trim()}\n` +
    `Телефон номери: ${data.phoneNumber.trim()}\n` +
    `Шаар / дарек: ${data.cityAddress.trim()}\n` +
    `Заказдын саны: ${data.quantity} даана (${totalPrice.toLocaleString('ru-RU')} сом)\n` +
    `Комментарий: ${commentText}\n\n` +
    `Заказды кабыл алууну суранам.`
  );
}

export function getSensuWhatsAppUrl(data: OrderFormData): string {
  const message = buildSensuWhatsAppMessage(data);
  return `https://api.whatsapp.com/send/?phone=${PRODUCT_DATA.whatsappRaw}&text=${encodeURIComponent(
    message
  )}`;
}

export function openSensuWhatsAppOrder(data: OrderFormData): string {
  const whatsappUrl = getSensuWhatsAppUrl(data);

  try {
    const win = window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    if (!win || win.closed || typeof win.closed === 'undefined') {
      window.location.href = whatsappUrl;
    }
  } catch {
    window.location.href = whatsappUrl;
  }

  return whatsappUrl;
}
