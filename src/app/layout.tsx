import * as React from "react";
import { HeroUIProvider } from "@heroui/react";
import { League_Spartan, Josefin_Sans, Montserrat } from 'next/font/google'
import "@/styles/globals.css";

const leagueSpartan = League_Spartan({
  subsets: ['latin'],
})
const josefinSans = Josefin_Sans({
  subsets: ['latin'],
})

const montserrat = Montserrat({
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${leagueSpartan.className} ${josefinSans.className} ${montserrat.className}`} suppressHydrationWarning>
      <body>
        <HeroUIProvider>
          {children}
        </HeroUIProvider>
      </body>
    </html>
  )
}