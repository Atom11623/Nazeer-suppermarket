import type { Metadata } from "next";
import { CartProvider } from "@/lib/cart-context";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nasser Enterprise NIG. LTD | Retail & Wholesale Supermarket",
  description:
    "Nasser Enterprise NIG. LTD is your trusted retail and wholesale supplier of groceries, beverages, household essentials and everyday products in Obajana, Lokoja, Kogi State.",
  keywords: [
    "Nasser Enterprise",
    "supermarket Obajana",
    "wholesale Lokoja",
    "groceries Kogi State",
    "retail Nigeria",
  ],
  icons: {
    icon: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🛒</text></svg>",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
