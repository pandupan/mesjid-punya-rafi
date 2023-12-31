import Navbar from '@/components/layouts/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Footer from '@/components/layouts/Footer'
import ProviderWrapper from '@/components/layouts/ProviderWrapper'

const popinsPoppins = Poppins({ subsets: ['latin'], weight: ['100','200', '300', '400', '500', '600', '700', '800', '900'] })

export const metadata: Metadata = {
  title: 'Israel Brands Affiliate',
  description: 'Cek-lah produk yang akan kamu beli melalui website kami',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={popinsPoppins.className}>
        <div className="overflow-hidden">
          <ProviderWrapper>
              <Navbar/>
                {children}
              <Footer/>
          </ProviderWrapper>
        </div>
      </body>
    </html>
  )
}
