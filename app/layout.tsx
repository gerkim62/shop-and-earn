import InstallBanner from "@/components/banners/install";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import Link from "@/components/small/link-with-loader";
import { Toaster } from "@/components/ui/sonner";
import type { Metadata, Viewport } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/components/providers/auth";
import Activities from "@/components/activities";
import { CartProvider } from "@/components/context/cart";
import BackToTopButton from "@/components/small/back-to-top-button";
import app from "@/constants/app";
import contact from "@/constants/contact";

const font = Quicksand({ subsets: ["latin"] });

//     <link rel="apple-touch-icon" href="/example.png">

export const metadata: Metadata = {
  metadataBase: new URL("https://cashlink.netlify.app/"),
  applicationName: app.name,
  title: {
    default: app.name,
    template: `${app.name} | %s`,
  },
  description: app.desription,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: app.name,
  },
  icons: [
    {
      rel: "apple-touch-icon",
      url: "/apple-touch-icon.png",
    },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    description: app.desription,
    siteName: app.name,
    title: app.name,
    countryName: "Kenya",
    alternateLocale: "en-KE",
    emails: [contact.email],
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: app.name,
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#f3e8ff",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <AuthProvider>
          <CartProvider>
            <Header />
            {children}
            <Link hidden href="/">
              {
                // hidden link to make nprogress work with our link-with-loader component (dont know why it needs this but it does)
              }
            </Link>
            <Activities />
            <InstallBanner />
            <BackToTopButton />
            <Footer />
            <Toaster closeButton />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
