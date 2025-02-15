import Header from "@/components/header";
import "./globals.css";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import YandexMetrikaContainer from "@/components/YandexMetrikaContainer";

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

const analyticsEnabled = !!(process.env.NODE_ENV === "production");

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
        {/* Вариант 1: "Техно-синий" */}
        <div className="absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] bg-gradient-to-br from-[#6495ED] to-[#778899] dark:bg-gradient-to-br dark:from-[#2F4F4F] dark:to-[#4682B4]"></div>
        <div className="absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] bg-gradient-to-tr from-[#B0C4DE] to-[#E6E6FA] dark:bg-gradient-to-tr dark:from-[#4682B4] dark:to-[#6495ED]"></div>

        {/* Вариант 2: "Индустриальный серый" */}
        {/* <div className="absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] bg-gradient-to-br from-[#A9A9A9] to-[#D3D3D3] dark:bg-gradient-to-br dark:from-[#696969] dark:to-[#808080]"></div>
        <div className="absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] bg-gradient-to-tr from-[#F5F5DC] to-[#FFFFFF] dark:bg-gradient-to-tr dark:from-[#808080] dark:to-[#A9A9A9]"></div> */}

        {/* Вариант 3: "Мягкий зеленый" */}
        {/* <div className="absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] bg-gradient-to-br from-[#98FB98] to-[#ADD8E6] dark:bg-gradient-to-br dark:from-[#006400] dark:to-[#2E8B57]"></div>
        <div className="absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] bg-gradient-to-tr from-[#E0EEE0] to-[#F0FFF0] dark:bg-gradient-to-tr dark:from-[#2E8B57] dark:to-[#3CB371]"></div> */}

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />

            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
        <YandexMetrikaContainer enabled={analyticsEnabled} />
      </body>
    </html>
  );
}
