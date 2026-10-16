'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const offers = [
  { id: '2_bottles', bottles: '2 عبوات (250ml)', price: 99, popular: true },
  { id: '3_bottles', bottles: '3 عبوات من خل التفاح', price: 149 },
  { id: '4_bottles', bottles: '4 عبوات من خل التفاح', price: 199 },
];

export default function LandingPage() {
  const [selectedOffer, setSelectedOffer] = useState(offers[0]);
  const [fullName, setFullName] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [year, setYear] = useState('2026');

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const phoneNumber = "212753731209"; 

    // تجهيز نص الرسالة بشكل سليم ومتسق
    const message = `طلب جديد - timilchil:\n- الاسم: ${fullName}\n- المدينة: ${city}\n- الهاتف: ${phone}\n- العرض: ${selectedOffer.bottles}\n- الثمن: ${selectedOffer.price} درهم`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

    // التوجيه المباشر للواتساب بدون تأخير لتجنب حظر الهواتف
    window.location.href = whatsappUrl;
    setIsSubmitting(false);
  };

  const scrollToForm = () => {
    document.getElementById('order-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-[#f4f7f4] text-[#1e3b2b] pb-24 lg:pb-12">
      {/* Top Banner */}
      <div className="bg-[#1b4332] text-white text-center py-2.5 px-4 font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-sm">
        <span>🔥</span>
        <span>عرض خاص ومحدود: 2 قراعي (250ml) بـ 99 درهم فقط!</span>
      </div>

      {/* Main Container */}
      <div className="max-w-5xl mx-auto bg-white min-h-screen shadow-2xl rounded-none md:rounded-3xl md:my-6 border border-gray-100 overflow-hidden">
        
        {/* Header */}
        <header className="p-4 sm:p-6 text-center border-b border-green-50 bg-gradient-to-b from-green-50/30 to-white">
          <h1 className="text-3xl sm:text-4xl font-black text-[#1b4332] tracking-wider">timilchil</h1>
          <p className="text-xs sm:text-sm text-green-700 font-semibold mt-1">خل تفاح طبيعي 100% • منتوج مغربي أصيل</p>
        </header>

        {/* Hero Banner Badge */}
        <div className="text-center pt-6 px-4">
          <div className="bg-[#e8f5e9] text-[#1b4332] font-extrabold text-sm sm:text-base py-2 px-6 rounded-full inline-block border border-green-200 shadow-sm">
            ✨ العرض الأكثر طلباً: 2 عبوات بـ 99 درهم
          </div>
        </div>

        {/* Responsive Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-4 sm:p-8 items-start">
          
          {/* Right Column (Visuals & Info on Desktop) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Product Image */}
            <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden shadow-md border border-gray-100">
              <Image
                src="/khall.jpeg"
                alt="خل تفاح تيملشيل"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Price Display */}
            <div className="flex justify-center items-baseline gap-3 bg-green-50/50 py-3 rounded-xl border border-green-100">
              <span className="text-4xl sm:text-5xl font-black text-[#1b4332]">{selectedOffer.price}</span>
              <span className="text-xl font-bold text-[#1b4332]">درهم</span>
              <span className="text-base text-gray-400 line-through mr-2">199 درهم</span>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-gray-600 font-medium text-center leading-relaxed">
              خل التفاح املشيل الطبيعي - يساهم في تحسين الهضم، تخفيف الوزن، وترتيب مستويات السكر في الدم بطريقة طبيعية وآمنة.
            </p>

            {/* Features Icons */}
            <div className="grid grid-cols-3 gap-3 py-4 bg-[#f8faf8] rounded-2xl border border-green-100 text-center">
              <div className="p-2">
                <div className="text-3xl mb-1">🌿</div>
                <div className="text-xs sm:text-sm font-bold text-[#1b4332]">100% طبيعي</div>
                <div className="text-[11px] text-gray-500">بدون مواد حافظة</div>
              </div>
              <div className="p-2 border-x border-green-100">
                <div className="text-3xl mb-1">🚚</div>
                <div className="text-xs sm:text-sm font-bold text-[#1b4332]">توصيل سريع</div>
                <div className="text-[11px] text-gray-500">خلال 24-48 ساعة</div>
              </div>
              <div className="p-2">
                <div className="text-3xl mb-1">🛡️</div>
                <div className="text-xs sm:text-sm font-bold text-[#1b4332]">دفع عند الاستلام</div>
                <div className="text-[11px] text-gray-500">مع ضمان الجودة</div>
              </div>
            </div>

            {/* Video Section */}
            <div className="space-y-3 pt-2">
              <h3 className="text-center font-bold text-[#1b4332] text-base">
                شاهد طريقة الاستعمال والفوائد 🎥
              </h3>

              <div className="relative aspect-video rounded-2xl overflow-hidden border border-green-200 shadow-md bg-black">
                <video
                  controls
                  playsInline
                  preload="metadata"
                  poster="./minia.jpeg"
                  className="w-full h-full object-cover"
                >
                  <source src="./khall.mp4" type="video/mp4" />
                  متصفحك لا يدعم تشغيل الفيديو.
                </video>
              </div>
            </div>

            {/* Certificates Section */}
            <section className="p-4 sm:p-6 bg-white border-t border-green-50">
              <h3 className="text-center font-black text-lg sm:text-xl text-[#1b4332] mb-2">
                شهادات الجودة والتراخيص الرسمية 🏆
              </h3>
              <p className="text-center text-xs sm:text-sm text-gray-500 mb-6">
                منتجنا مرخص ومصنوع وفق معايير السلامة الصحية الصارمة
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="bg-[#f8faf8] p-3 rounded-2xl border border-green-100 text-center shadow-sm">
                  <div className="h-28 relative rounded-xl overflow-hidden mb-2 bg-gray-100 flex items-center justify-center">
                    <Image
                      src="/2.webp"
                      alt="شهادة السلامة الصحية ONSSA"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <span className="text-xs text-gray-500 font-bold">🛡️ ترخيص صحي رسمي من ONSSA</span>
                </div>

                <div className="bg-[#f8faf8] p-3 rounded-2xl border border-green-100 text-center shadow-sm">
                  <div className="h-28 relative rounded-xl overflow-hidden mb-2 bg-gray-100 flex items-center justify-center">
                   <Image
                      src="/1.webp"
                      alt="شهادة الميدالية الذهبية"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <span className="text-xs text-gray-500 font-bold">🥇 شهادة الميدالية الذهبية بالمغرب</span>
                </div>

                <div className="bg-[#f8faf8] p-3 rounded-2xl border border-green-100 text-center shadow-sm col-span-2 sm:col-span-1">
                  <div className="h-28 relative rounded-xl overflow-hidden mb-2 bg-gray-100 flex items-center justify-center">
                    <Image
                      src="/3.webp"
                      alt="شهادة السلامة الصحية ONSSA"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <span className="text-xs text-gray-500 font-bold">المكتب الوطني للسلامة الصحية (ONSSA)</span>
                </div>
              </div>
            </section>

            {/* Benefits Section */}
            <div className="space-y-3 pt-4">
              <h3 className="text-center font-extrabold text-lg text-[#1b4332]">لماذا تختار خل تفاح تيملشيل؟</h3>
              <div className="space-y-2.5">
                <div className="p-3.5 bg-green-50/60 rounded-xl border border-green-100 flex items-start gap-3">
                  <span className="text-lg">✅</span>
                  <div>
                    <strong className="block text-gray-800 text-sm">تحسين جودة الهضم:</strong>
                    <span className="text-xs sm:text-sm text-gray-600">يساعد في تخفيف الانتفاخ وعسر الهضم بعد الوجبات.</span>
                  </div>
                </div>
                <div className="p-3.5 bg-green-50/60 rounded-xl border border-green-100 flex items-start gap-3">
                  <span className="text-lg">✅</span>
                  <div>
                    <strong className="block text-gray-800 text-sm">ضبط الوزن والكوليسترول:</strong>
                    <span className="text-xs sm:text-sm text-gray-600">يعزز الإحساس بالشبع ويدعم إدارة الوزن بشكل طبيعي وصحي.</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Left Column (Order Form on Desktop) */}
          <div className="lg:col-span-5 lg:sticky lg:top-6">
            <div id="order-form" className="p-5 sm:p-6 bg-[#f8faf8] border-2 border-green-200 rounded-2xl shadow-md">
              
              <div className="text-center mb-5">
                <h2 className="text-xl sm:text-2xl font-black text-[#1b4332]">اختر العرض المناسب للطلب 👇</h2>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">التوصيل مجاني لجميع المدن المغربية</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Offer Selection */}
                <div className="space-y-3">
                  {offers.map((offer) => (
                    <label
                      key={offer.id}
                      onClick={() => setSelectedOffer(offer)}
                      className={`relative flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all ${
                        selectedOffer.id === offer.id
                          ? 'border-[#2d6a4f] bg-[#e8f5e9] shadow-sm'
                          : 'border-gray-200 bg-white hover:border-green-300'
                      }`}
                    >
                      {offer.popular && (
                        <span className="absolute -top-3 left-3 bg-[#e63946] text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full shadow-sm">
                          🔥 العرض الأكثر طلباً
                        </span>
                      )}
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="offer"
                          checked={selectedOffer.id === offer.id}
                          onChange={() => setSelectedOffer(offer)}
                          className="w-4 h-4 accent-[#2d6a4f]"
                        />
                        <span className="font-bold text-sm text-gray-800">{offer.bottles}</span>
                      </div>
                      <div className="text-left">
                        <span className="font-black text-lg text-[#1b4332]">{offer.price}</span>
                        <span className="text-xs font-bold text-[#1b4332] mr-1">د.م</span>
                      </div>
                    </label>
                  ))}
                </div>

                {/* Inputs */}
                <div className="space-y-3 pt-2">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">الاسم الكامل *</label>
                    <input
                      type="text"
                      required
                      placeholder="أدخل اسمك الكامل"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full p-3 text-sm bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2d6a4f] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">المدينة *</label>
                    <input
                      type="text"
                      required
                      placeholder="أدخل مدينتك"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full p-3 text-sm bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2d6a4f] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">رقم الهاتف *</label>
                    <input
                      type="tel"
                      required
                      placeholder="06XXXXXXXX"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full p-3 text-sm bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2d6a4f] focus:outline-none text-right"
                      dir="ltr"
                    />
                  </div>
                </div>

                {/* Price Summary */}
                <div className="bg-white p-3.5 rounded-xl border border-gray-200 text-xs sm:text-sm space-y-2">
                  <div className="flex justify-between text-gray-600">
                    <span>المجموع الإجمالي:</span>
                    <span className="font-bold">{selectedOffer.price} د.م</span>
                  </div>
                  <div className="flex justify-between text-green-700">
                    <span>مصاريف الشحن:</span>
                    <span className="font-bold">مجاني</span>
                  </div>
                  <div className="flex justify-between text-sm sm:text-base font-black text-[#1b4332] pt-2 border-t">
                    <span>المبلغ الإجمالي للتسليم:</span>
                    <span>{selectedOffer.price} د.م</span>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#1b4332] hover:bg-[#2d6a4f] text-white font-black py-4 rounded-xl shadow-lg transition-all text-base sm:text-lg flex items-center justify-center gap-2 active:scale-95"
                >
                  {isSubmitting ? 'جاري إرسال الطلب...' : `اضغط هنا للطلب (${selectedOffer.price} درهم)`}
                </button>
              </form>

            </div>
          </div>

        </div>

        {/* Footer */}
        <footer className="p-6 text-center text-xs text-gray-500 border-t space-y-4 bg-gray-50/50">
          <p className="font-bold text-[#1b4332] text-sm">timilchil — خل تفاح طبيعي</p>
          <div className="flex items-center justify-center">
            <Image
              src="/logo.png"
              alt="Timilchil Logo"
              width={100}
              height={100}
              className="object-contain"
            />
          </div>
          
          <div className="flex items-center justify-center gap-4 py-2">
            <a
              href="https://wa.me/212753731209"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-10 h-10 rounded-full bg-green-100 hover:bg-green-200 text-[#1b4332] flex items-center justify-center transition-all hover:scale-110 shadow-sm"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
              </svg>
            </a>

            <a
              href="https://www.instagram.com/timilchil.officiel/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full bg-pink-100 hover:bg-pink-200 text-pink-700 flex items-center justify-center transition-all hover:scale-110 shadow-sm"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            <a
              href="https://web.facebook.com/profile.php?id=61591980941666"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-10 h-10 rounded-full bg-blue-100 hover:bg-blue-200 text-blue-700 flex items-center justify-center transition-all hover:scale-110 shadow-sm"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.582 9 4.615V8z" />
              </svg>
            </a>
          </div>

          <p>جميع الحقوق محفوظة © {year} • صنع في المغرب 🇲🇦</p>
        </footer>

      </div>

      {/* Sticky Bottom Bar (Only on Mobile) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200 p-3 shadow-2xl z-50">
        <div className="max-w-md mx-auto flex items-center justify-between gap-3">
          <div>
            <div className="text-[10px] text-gray-500">العرض المختار</div>
            <div className="text-sm font-black text-[#1b4332]">{selectedOffer.price} د.م</div>
          </div>
          <button
            onClick={scrollToForm}
            className="flex-1 bg-[#2d6a4f] text-white font-bold py-3 px-4 rounded-xl text-xs text-center shadow-md active:scale-95 transition-transform"
          >
            اطلب الآن — الدفع عند الاستلام 🛒
          </button>
        </div>
      </div>
    </main>
  );
}