import type React from "react"
import { GoogleTagManager } from "@next/third-parties/google"
import Script from "next/script"
import "./globals.css"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <GoogleTagManager gtmId="GTM-WQ3KMTB3" />
        <Script
          type="text/javascript"
          src="https://app.monetizze.com.br/upsell_incorporado.php"
          strategy="beforeInteractive"
        />
        {/* RedTrack Universal Script */}
        <Script id="redtrack-universal-script" strategy="beforeInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'rtk.clickid': ''});
            var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='rtkData'?'&l='+l:'';
            j.async=true;j.src='https://rt.tinderchecks.store/track.js?rtkcmpid='+i+dl;
            f.parentNode.insertBefore(j,f);
            })(window,document,'script','rtkData','699b8f53a801952e7ab0d623');
          `}
        </Script>
        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1352643653146514');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  )
}

export const metadata = {
  generator: "v0.app",
}
