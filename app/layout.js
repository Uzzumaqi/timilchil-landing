import { Tajawal } from 'next/font/google';
import './globals.css';

const tajawal = Tajawal({ 
  subsets: ['arabic'], 
  weight: ['400', '500', '700', '800'] 
});

export const metadata = {
  title: 'خل تفاح تيملشيل الطبيعي - Timilchil',
  description: 'خل تفاح طبيعي 100% بدون مواد حافظة - طلب مباشر والدفع عند الاستلام بالمغرب',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={tajawal.className}>{children}</body>
    </html>
  );
}