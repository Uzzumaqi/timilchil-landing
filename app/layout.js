import { Tajawal } from 'next/font/google';
import './globals.css';
import Script from 'next/script';

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
      <head>
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1786449852572448');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>
      <body className={tajawal.className}>{children}</body>
    </html>
  );
}
