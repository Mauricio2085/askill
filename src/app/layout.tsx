import type { Metadata } from 'next'
import { DynaPuff, Montserrat, Roboto, Rowdies, Ubuntu } from 'next/font/google'
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

export const metadata: Metadata = {
  title: 'ASKILL S.A.S',
  description:
    'Empresa especializada en automatización y control de procesos industriales.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body
        className={`${ubuntu.variable} ${montserrat.variable} ${dynaPuff.variable} ${roboto.variable} ${rowdies.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
