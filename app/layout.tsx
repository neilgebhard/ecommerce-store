import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import './globals.css'
import type { Metadata } from 'next'
import { Oswald } from 'next/font/google'
import { ProductModalProvider } from '@/context/product-modal'

const oswald = Oswald({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Store',
  description: 'A place to buy things',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={oswald.className}>
        <Navbar />
        <ProductModalProvider>{children}</ProductModalProvider>
        <Footer />
      </body>
    </html>
  )
}
