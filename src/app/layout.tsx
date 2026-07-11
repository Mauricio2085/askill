import type { Metadata } from 'next'
import { Ubuntu } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'

import { OrganizationJsonLd } from '@/components/OrganizationJsonLd'
import {
  defaultSiteDescription,
  getSiteUrl,
  siteName,
} from '@/lib/site'

import './globals.css'

const ubuntu = Ubuntu({
  weight: ['300', '400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-ubuntu',
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
    <html lang="es" className={`dark ${ubuntu.variable}`}>
      <body className="antialiased">
        <OrganizationJsonLd />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
