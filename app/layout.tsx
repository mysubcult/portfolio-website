import Header from "@/components/header";
import "./globals.css";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Евдокимов Владимир | Ремонт ТНВД Тольятти",
  description: "Ремонт ТНВД в Тольятти. Капитальный ремонт, диагностика, замена насосов для автомобилей Peugeot, Citroen, BMW, Mini. Гарантия и доставка.",
  openGraph: {
    title: "Евдокимов Владимир | Ремонт ТНВД Тольятти",
    description: "Ремонт ТНВД в Тольятти. Капитальный ремонт, диагностика, замена насосов для автомобилей Peugeot, Citroen, BMW, Mini. Гарантия и доставка.",
    url: "https://xn----ctbgf9abfhppj.xn--p1ai",
    siteName: "Евдокимов Владимир | Ремонт ТНВД Тольятти",
    images: [
      {
        url: "https://xn----ctbgf9abfhppj.xn--p1ai/og-image.jpg",
        width: 800,
        height: 600,
        alt: "Ремонт ТНВД в Тольятти",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className="!scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Евдокимов Владимир | Ремонт ТНВД Тольятти",
            "url": "https://xn----ctbgf9abfhppj.xn--p1ai",
            "logo": "https://xn----ctbgf9abfhppj.xn--p1ai/logo.png",
            "image": "https://xn----ctbgf9abfhppj.xn--p1ai/og-image.jpg",
            "description": "Ремонт ТНВД в Тольятти. Капитальный ремонт, диагностика, замена насосов для автомобилей Peugeot, Citroen, BMW, Mini. Гарантия и доставка.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "ул. Мира, 113",
              "addressLocality": "Тольятти",
              "addressRegion": "Самарская обл.",
              "postalCode": "445054",
              "addressCountry": "RU"
            },
            "telephone": "+79879317210",
            "openingHours": "Mo-Fr 09:00-18:00, Sa-Su 10:00-16:00"
          })}
        </script>
      </head>
      <body className="bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90">
        <div className="bg-[#ADD8E6] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#D3D3D3]"></div>
        <div className="bg-[#D3D3D3] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#ADD8E6]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />

            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
