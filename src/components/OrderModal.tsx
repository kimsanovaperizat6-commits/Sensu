import React, { useState } from 'react';
import { PRODUCT_DATA } from '../data/productData';
import { X, MessageCircle, CheckCircle2, Truck, ShieldCheck } from 'lucide-react';
import { openSensuWhatsAppOrder, OrderFormData } from '../utils/orderHelper';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OrderModal: React.FC<OrderModalProps> = ({ isOpen, onClose }) => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [cityAddress, setCityAddress] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState('');
  const [submittedUrl, setSubmittedUrl] = useState<string | null>(null);
  const [errors, setErrors] = useState<{ fullName?: string; phoneNumber?: string; cityAddress?: string }>({});

  if (!isOpen) return null;

  const totalPrice = quantity * PRODUCT_DATA.price;

  const validate = (): boolean => {
    const errs: { fullName?: string; phoneNumber?: string; cityAddress?: string } = {};

    if (!fullName.trim() || fullName.trim().length < 2) {
      errs.fullName = 'Аты-жөнүңүздү толук жазыңыз';
    }

    const digitsOnly = phoneNumber.replace(/\D/g, '');
    if (!digitsOnly || digitsOnly.length < 8) {
      errs.phoneNumber = 'Туура телефон номерин жазыңыз';
    }

    if (!cityAddress.trim() || cityAddress.trim().length < 3) {
      errs.cityAddress = 'Шаарды жана даректи жазыңыз';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    const orderData: OrderFormData = {
      fullName,
      phoneNumber,
      cityAddress,
      quantity,
      comment,
    };

    const url = openSensuWhatsAppOrder(orderData);
    setSubmittedUrl(url);
  };

  const handleResetAndClose = () => {
    setSubmittedUrl(null);
    setErrors({});
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200"
      onClick={handleResetAndClose}
    >
      <div
        className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-[#EEDCE2] shadow-2xl relative my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#7A6068] hover:text-[#7B162C] hover:bg-[#FAF0F3] transition-colors"
          aria-label="Жабуу"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-6">
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider text-[#7B162C] bg-[#FAF0F3] border border-[#F3D7DF]">
            SENSU Collagen Tea
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#4B0F1C] mt-2">
            Заказ берүү формасы
          </h3>
        </div>

        {submittedUrl ? (
          /* Confirmation Screen */
          <div className="text-center py-6">
            <div className="w-16 h-16 bg-[#E8F8EE] text-[#1EBE5D] rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h4 className="text-xl font-serif font-bold text-[#4B0F1C] mb-2">
              Заказ даярдалды!
            </h4>
            <p className="text-xs text-[#6B5159] mb-6 max-w-xs mx-auto leading-relaxed">
              WhatsApp ачылып, бардык маалыматтар даярдалды. Болгону WhatsAppта <strong>«Жөнөтүү» (Send)</strong> баскычын басыңыз.
            </p>

            <a
              href={submittedUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-4 px-6 rounded-full text-xs font-semibold tracking-wider text-white bg-[#25D366] hover:bg-[#1EBE5D] transition-colors shadow-sm mb-3"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsAppты ачуу</span>
            </a>

            <button
              type="button"
              onClick={handleResetAndClose}
              className="text-xs text-[#7B162C] hover:underline block mx-auto py-2"
            >
              Терезени жабуу
            </button>
          </div>
        ) : (
          /* Order Form matching exact requested fields */
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Field: Канча даана заказ бересиз? */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-semibold text-[#52373F]">
                  Канча даана заказ бересиз? <span className="text-[#C84562]">*</span>
                </label>
                <span className="text-xs font-mono font-bold text-[#7B162C]">
                  {totalPrice.toLocaleString('ru-RU')} сом
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { count: 1, label: '1 даана (курс)', price: '1 800 с' },
                  { count: 2, label: '2 даана', price: '3 600 с' },
                  { count: 3, label: '3 даана', price: '5 400 с' },
                ].map((item) => (
                  <button
                    key={item.count}
                    type="button"
                    onClick={() => setQuantity(item.count)}
                    className={`py-2 px-2 rounded-xl text-center transition-all border ${
                      quantity === item.count
                        ? 'bg-[#7B162C] text-white border-[#7B162C] shadow-xs'
                        : 'bg-[#FAF7F6] text-[#4A3239] border-[#E8D4DA] hover:bg-[#FDF9FA]'
                    }`}
                  >
                    <div className="text-xs font-bold">{item.count} даана</div>
                    <div
                      className={`text-[10px] ${
                        quantity === item.count ? 'text-white/80' : 'text-[#7B162C]'
                      }`}
                    >
                      {item.price}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Field: Аты-жөнү */}
            <div>
              <label className="block text-xs font-semibold text-[#52373F] mb-1">
                Аты-жөнү <span className="text-[#C84562]">*</span>
              </label>
              <input
                type="text"
                placeholder="Мисалы: Айгүл Асанова"
                value={fullName}
                onChange={(e) => {
                  setFullName(e.target.value);
                  if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                }}
                className={`w-full px-3.5 py-2.5 rounded-xl border bg-[#FAF8F9] focus:bg-white focus:outline-none text-xs text-[#382329] transition-colors ${
                  errors.fullName
                    ? 'border-[#D94F4F] focus:ring-1 focus:ring-[#D94F4F]'
                    : 'border-[#ECD3DA] focus:ring-1 focus:ring-[#7B162C]'
                }`}
              />
              {errors.fullName && (
                <p className="text-[11px] text-[#D94F4F] mt-1">{errors.fullName}</p>
              )}
            </div>

            {/* Field: Телефон номери */}
            <div>
              <label className="block text-xs font-semibold text-[#52373F] mb-1">
                Телефон номери <span className="text-[#C84562]">*</span>
              </label>
              <input
                type="tel"
                placeholder="+996 (___) __-__-__"
                value={phoneNumber}
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                  if (errors.phoneNumber) setErrors({ ...errors, phoneNumber: undefined });
                }}
                className={`w-full px-3.5 py-2.5 rounded-xl border bg-[#FAF8F9] focus:bg-white focus:outline-none text-xs text-[#382329] transition-colors ${
                  errors.phoneNumber
                    ? 'border-[#D94F4F] focus:ring-1 focus:ring-[#D94F4F]'
                    : 'border-[#ECD3DA] focus:ring-1 focus:ring-[#7B162C]'
                }`}
              />
              {errors.phoneNumber && (
                <p className="text-[11px] text-[#D94F4F] mt-1">{errors.phoneNumber}</p>
              )}
            </div>

            {/* Field: Кайсы шаар / дарек */}
            <div>
              <label className="block text-xs font-semibold text-[#52373F] mb-1">
                Кайсы шаар / дарек <span className="text-[#C84562]">*</span>
              </label>
              <input
                type="text"
                placeholder="Мисалы: Бишкек, Чүй проспектиси 125, кв. 14"
                value={cityAddress}
                onChange={(e) => {
                  setCityAddress(e.target.value);
                  if (errors.cityAddress) setErrors({ ...errors, cityAddress: undefined });
                }}
                className={`w-full px-3.5 py-2.5 rounded-xl border bg-[#FAF8F9] focus:bg-white focus:outline-none text-xs text-[#382329] transition-colors ${
                  errors.cityAddress
                    ? 'border-[#D94F4F] focus:ring-1 focus:ring-[#D94F4F]'
                    : 'border-[#ECD3DA] focus:ring-1 focus:ring-[#7B162C]'
                }`}
              />
              {errors.cityAddress && (
                <p className="text-[11px] text-[#D94F4F] mt-1">{errors.cityAddress}</p>
              )}
            </div>

            {/* Field: Кошумча комментарий (optional) */}
            <div>
              <label className="block text-xs font-semibold text-[#52373F] mb-1">
                Кошумча комментарий <span className="text-[#8A6F77] font-normal">(милдеттүү эмес)</span>
              </label>
              <input
                type="text"
                placeholder="Мисалы: түштөн кийин чалыңыздар же кечинде жеткириңиздер"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#ECD3DA] bg-[#FAF8F9] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#7B162C] text-xs text-[#382329]"
              />
            </div>

            {/* Submit Button: 🛒 Заказ берүү */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 rounded-full text-xs font-semibold tracking-wider text-white bg-[#7B162C] hover:bg-[#5E0F20] transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 active:scale-[0.98]"
              >
                <span>🛒 Заказ берүү</span>
                <span className="opacity-90 font-mono">({totalPrice.toLocaleString('ru-RU')} сом)</span>
              </button>

              <div className="flex items-center justify-center gap-4 text-[11px] text-[#785E66] pt-3">
                <span className="flex items-center gap-1">
                  <Truck className="w-3 h-3 text-[#3E6B4B]" />
                  Акысыз жеткирүү
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-[#7B162C]" />
                  Төлөм товарды алганда
                </span>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
