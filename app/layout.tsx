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
        <GoogleTagManager gtmId="GTM-PK6HB293" />
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
      </head>
      <body>{children}</body>
    </html>
  )
}

export const metadata = {
  generator: "v0.app",
}
