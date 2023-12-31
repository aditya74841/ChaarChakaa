import { Footer, Navbar } from '@/components'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { relative } from 'path'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'View Car',
  description: 'Discover the best car',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">


      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>

    </html>
  )
}
