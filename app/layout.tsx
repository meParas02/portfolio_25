import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Portfolio | Paras Mehta",
  description: "Personal portfolio website of Paras Mehta, Full Stack Developer",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>{`
          :root {
            --primary-rgb: 142, 73, 232;
          }
          .dark {
            --primary-rgb: 124, 58, 237;
          }
        `}</style>
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider 
          attribute="class" 
          defaultTheme="system" 
          enableSystem 
          disableTransitionOnChange
          storageKey="portfolio-theme"
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
