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

const font = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
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
            <Toaster />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
