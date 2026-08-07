import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Manrope } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
})

const siteUrl = 'https://raren-proposta.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Raren Proposta | Crie Propostas Comerciais Profissionais com IA',
  description:
    'Crie propostas comerciais profissionais em minutos com o Raren Proposta. Templates premium, personalização completa, cálculo automático e exportação em PDF para impressionar seus clientes e fechar mais negócios.',
  keywords: [
    'propostas comerciais',
    'gerador de propostas',
    'propostas profissionais',
    'orçamento profissional',
    'proposta em PDF',
    'software de propostas',
    'Raren Proposta',
    'fechar negócios',
    'templates de proposta',
  ],
  authors: [{ name: 'Raren' }],
  creator: 'Raren',
  publisher: 'Raren',
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: siteUrl,
    siteName: 'Raren Proposta',
    title: 'Raren Proposta | Crie Propostas Comerciais Profissionais com IA',
    description:
      'Pare de perder clientes por apresentar propostas comuns. Crie propostas comerciais profissionais em minutos e aumente suas chances de fechar negócios.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Raren Proposta - Propostas comerciais profissionais',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Raren Proposta | Propostas Comerciais Profissionais',
    description:
      'Crie propostas comerciais profissionais em minutos, impressione seus clientes e feche mais negócios.',
    images: ['/og-image.png'],
    creator: '@raren',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0b132b',
  width: 'device-width',
  initialScale: 1,
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Raren Proposta',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web, Windows, macOS',
  description:
    'Software para criação de propostas comerciais profissionais com templates premium, personalização completa e exportação em PDF.',
  url: siteUrl,
  author: {
    '@type': 'Organization',
    name: 'Raren',
  },
  offers: {
    '@type': 'Offer',
    price: '297.00',
    priceCurrency: 'BRL',
    category: 'Licença Vitalícia',
    availability: 'https://schema.org/InStock',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    ratingCount: '187',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${manrope.variable} bg-background`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
