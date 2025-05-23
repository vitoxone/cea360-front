import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ChatBotWidget } from "@/components/chat-bot-widget"
import { Toaster } from "@/components/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CEA360 - Apoyo Integral para Personas con TEA",
  description:
    "Plataforma centralizada de formación, orientación y apoyo profesional para familias, cuidadores y profesionales que acompañan a personas con Trastorno del Espectro Autista",
  keywords: "TEA, autismo, cuidadores, recursos educativos, apoyo familiar, especialistas TEA",
  authors: [{ name: "CEA360" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
          <ChatBotWidget />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
