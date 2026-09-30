import React, { useState } from 'react';
import { PRODUCT_DATA } from '../data/productData';
import { SensuFramedBox } from './SensuFramedBox';
import { Check, ShieldCheck, Truck, MessageCircle, CheckCircle2 } from 'lucide-react';
import { openSensuWhatsAppOrder, OrderFormData } from '../utils/orderHelper';

export const OrderSection: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [cityAddress, setCityAddress] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState('');
  const [submittedUrl, setSubmittedUrl] = useState<string | null>(null);
  const [errors, setErrors] = useState<{ fullName?: string; phoneNumber?: string; cityAddress?: string }>({});

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

  return (
    <section id="order" className="py-20 md:py-24 bg-[#FAF7F6] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block px-4 py-1 rounded-full text-xs font-semibold tracking-wider text-[#7B162C] bg-[#FCECEF] mb-3">
            Расмий буйрутма бөлүмү
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#4B0F1C] tracking-tight">
            SENSU COLLAGEN TEA
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#70565F] max-w-lg mx-auto">
            Күн сайын өзүңүзгө кам көрүү — бүгүн баштаңыз. Анкетаны толтуруп, заказ бериңиз.
          </p>
        </div>

        {/* Main 2-Column Order Card */}
        <div className="bg-white rounded-3xl border border-[#EEDCE2] p-6 sm:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Product & Highlights */}
          <div className="lg:col-span-5 flex flex-col items-center text-center">
            <SensuFramedBox size="md" showSubtitle={true} />

            <div className="mt-6 text-center">
              <div className="text-3xl sm:text-4xl font-bold font-mono text-[#7B162C] mb-1 tabular-nums">
                {PRODUCT_DATA.price.toLocaleString('ru-RU')} {PRODUCT_DATA.currency}
              </div>
              <div className="text-xs text-[#70565F]">1 курс үчүн (40 даана / 40 күнгө)</div>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-2.5 w-full mt-6 text-xs text-[#3C282F]">
              <div className="p-2.5 rounded-xl bg-[#FAF7F6] border border-[#EEDCE2] flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#7B162C] shrink-0" />
                <span className="font-medium">40 даана пакет</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#FAF7F6] border border-[#EEDCE2] flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#7B162C] shrink-0" />
                <span className="font-medium">40 күндүк курс</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#FAF7F6] border border-[#EEDCE2] flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#7B162C] shrink-0" />
                <span className="font-medium">100% Оригинал</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#EBF6EE] border border-[#CDE5D4] text-[#2C6E3B] flex items-center gap-2">
                <Truck className="w-3.5 h-3.5 shrink-0" />
                <span className="font-medium">Жеткирүү акысыз</span>
              </div>
            </div>

            <p className="text-[11px] text-[#8C6F77] mt-4">
              Кыргызстан боюнча акысыз жеткирүү • Төлөм товарды алганда
            </p>
          </div>

          {/* Right Column: Order Form */}
          <div className="lg:col-span-7 bg-[#FAF7F6] rounded-2xl p-6 sm:p-8 border border-[#ECD3DA]">
            <div className="mb-5 pb-4 border-b border-[#EAD0D7]">
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#4B0F1C]">
                Заказ берүү формасы
              </h3>
            </div>

            {submittedUrl ? (
              /* Success screen */
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-[#E8F8EE] text-[#1EBE5D] rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h4 className="text-xl font-serif font-bold text-[#4B0F1C] mb-2">
                  Заказ даярдалды!
                </h4>
                <p className="text-xs text-[#6B5159] mb-5 max-w-sm mx-auto leading-relaxed">
                  WhatsApp ачылып, маалыматтарыңыз даярдалды. WhatsApp аркылуу жөнөтүүнү аягына чыгарыңыз.
                </p>
                <a
                  href={submittedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-4 px-8 rounded-full text-xs font-semibold tracking-wider text-white bg-[#25D366] hover:bg-[#1EBE5D] transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>WhatsAppты ачуу</span>
                </a>
              </div>
            ) : (
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
                      { count: 1, label: '1 даана (40 күн)', price: '1 800 с' },
                      { count: 2, label: '2 даана (80 күн)', price: '3 600 с' },
                      { count: 3, label: '3 даана (120 күн)', price: '5 400 с' },
                    ].map((item) => (
                      <button
                        key={item.count}
                        type="button"
                        onClick={() => setQuantity(item.count)}
                        className={`p-2.5 rounded-xl text-center transition-all border ${
                          quantity === item.count
                            ? 'bg-[#7B162C] text-white border-[#7B162C] shadow-xs'
                            : 'bg-white text-[#4A3239] border-[#E8D4DA] hover:bg-white/90'
                        }`}
                      >
                        <div className="text-xs font-bold">{item.count} даана</div>
                        <div
                          className={`text-[10px] ${
                            quantity === item.count ? 'text-white/80' : 'text-[#7B162C] font-semibold'
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
                    className={`w-full px-3.5 py-2.5 rounded-xl border bg-white focus:outline-none text-xs text-[#382329] transition-colors ${
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
                    className={`w-full px-3.5 py-2.5 rounded-xl border bg-white focus:outline-none text-xs text-[#382329] transition-colors ${
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
                    className={`w-full px-3.5 py-2.5 rounded-xl border bg-white focus:outline-none text-xs text-[#382329] transition-colors ${
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
                    placeholder="Мисалы: кечки убакта жеткирип берсеңиздер болот"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#ECD3DA] bg-white focus:outline-none focus:ring-1 focus:ring-[#7B162C] text-xs text-[#382329]"
                  />
                </div>

                {/* Submit button: 🛒 Заказ берүү */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-full text-xs font-semibold tracking-wider text-white bg-[#7B162C] hover:bg-[#5E0F20] transition-all shadow-md hover:shadow-lg active:scale-[0.98] flex items-center justify-center gap-2"
                  >
                    <span>🛒 Заказ берүү</span>
                    <span className="opacity-90 font-mono">({totalPrice.toLocaleString('ru-RU')} сом)</span>
                  </button>

                  <div className="flex items-center justify-center gap-4 text-[11px] text-[#785E66] mt-3">
                    <span className="flex items-center gap-1">
                      <Truck className="w-3.5 h-3.5 text-[#3E6B4B]" />
                      Кыргызстан боюнча акысыз жеткирүү
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#7B162C]" />
                      Төлөм кабыл алууда
                    </span>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
