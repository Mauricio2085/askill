import type { Metadata } from 'next'
import { DynaPuff, Montserrat, Roboto, Rowdies, Ubuntu } from 'next/font/google'

import {
  defaultSiteDescription,
  getSiteUrl,
  siteName,
} from '@/lib/site'

import './globals.css'

const ubuntu = Ubuntu({
  weight: ['300', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-ubuntu',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

const dynaPuff = DynaPuff({
  subsets: ['latin'],
  variable: '--font-dynapuff',
  display: 'swap',
})

const roboto = Roboto({
  weight: ['100'],
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
})

const rowdies = Rowdies({
  weight: ['300', '400'],
  subsets: ['latin'],
  variable: '--font-rowdies',
  display: 'swap',
})

const siteUrl = getSiteUrl()

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: `${siteName} | Automatización industrial`,
    template: `%s | ${siteName}`,
  },
  description: defaultSiteDescription,
  applicationName: siteName,
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: siteUrl,
    siteName,
    title: `${siteName} | Automatización industrial`,
    description: defaultSiteDescription,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteName} | Automatización industrial`,
    description: defaultSiteDescription,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="dark">
      <body
        className={`${ubuntu.variable} ${montserrat.variable} ${dynaPuff.variable} ${roboto.variable} ${rowdies.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
