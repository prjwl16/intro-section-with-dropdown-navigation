import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Remote',
  description: 'Remote',
}

export default function RootLayout({
  children,
}: {  
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={"h-screen flex flex-col justify-center items-center p-8"}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
