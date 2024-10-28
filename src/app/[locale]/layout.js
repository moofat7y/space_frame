import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import { Public_Sans } from "next/font/google";
import "@/styles/app.css";
import NavBar from "@/components/header/NavBar";
import AosProvider from "@/components/AosProvider";
import Footer from "@/components/home/Footer";

const public_sans = Public_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Space Frame",
  description:
    "Explore the innovative and captivating world of Space Frame - a portfolio showcasing cutting-edge designs, architectural marvels, and creative solutions. Discover our unique approach to space, form, and function. Let's redefine boundaries together.",
};

export default async function LocaleLayout({ children, params: { locale } }) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === "en" ? "ltr" : "rtl"}>
      <body className={public_sans.className}>
        <NextIntlClientProvider messages={messages}>
          <AosProvider>
            <NavBar />
            {children}
            <Footer />
          </AosProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
