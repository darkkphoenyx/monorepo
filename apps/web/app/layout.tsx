import { Geist_Mono, Outfit } from "next/font/google";

import "@workspace/ui/globals.css";

import { Providers } from "@/components/providers";

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

//outfit font
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${outfit.variable} ${fontMono.variable} font-sans antialiased `}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
