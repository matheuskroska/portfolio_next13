import './globals.css'
// eslint-disable-next-line camelcase
import { Inter, IBM_Plex_Mono } from 'next/font/google'
import { ReactNode } from 'react'
import { Header } from './components/header/header'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const plexMono = IBM_Plex_Mono({
  variable: '--font-plex-mono',
  subsets: ['latin'],
  weight: ['400', '600'],
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${plexMono.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
