import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from "@/components/NavBar"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Agronomia',
  description: 'Sistema de aprendizaje automatico',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}><Navbar />{children}</body>
    </html>
  )
}
