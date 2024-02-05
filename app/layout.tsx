import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import NextTopLoader from "nextjs-toploader";
import UIProviders from "@/app/ui-providers";
import ReduxProvider from "@/app/redux-provider";
import { Toaster } from "react-hot-toast";

// component import
import NNavbar from "@/components/NNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Sandbox",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <body className={inter.className}>
        <NextTopLoader color="#fcc455" />
        <ReduxProvider>
          <UIProviders>
            <Toaster />
            <NNavbar />
            <div className="container mx-auto p-5">{children}</div>
          </UIProviders>
        </ReduxProvider>
      </body>
    </html>
  );
}
