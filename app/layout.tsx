import './clerk.css'
import './globals.css'
import './prism.css'

import { ClerkProvider } from '@clerk/nextjs'
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata, Viewport } from 'next'

import { ThemeProvider } from '~/app/(main)/ThemeProvider'
import { url } from '~/lib'
import { zhCN } from '~/lib/clerkLocalizations'
import { sansFont } from '~/lib/font'
import { seo } from '~/lib/seo'


export const metadata: Metadata = {
  metadataBase: seo.url,
  title: {
    template: '%s | Telegram中文社区',
    default: seo.title,
  },
  description: seo.description,
  keywords: 'Telegram,telegram教程攻略,telegram中文社区,telegram群组推荐,telegram机器人,telegram开发',
  manifest: '/site.webmanifest',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: {
      default: seo.title,
      template: '%s | Telegram中文社区',
    },
    description: seo.description,
    siteName: '猫狗之家 | Telegram 新手指南、使用教程、频道推荐',
    locale: 'zh_CN',
    type: 'website',
    url: 'https://www.amag365.top/',
  },
  twitter: {
    site: '@www.amag365.top',
    creator: '@www.amag365.top',
    card: 'summary_large_image',
    title: seo.title,
    description: seo.description,
  },
  alternates: {
    canonical: url('/'),
    types: {
      'application/rss+xml': [{ url: 'rss', title: 'RSS 订阅' }],
    },
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#000212' },
    { media: '(prefers-color-scheme: light)', color: '#fafafa' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider localization={zhCN}>
      <html
        lang="zh-CN"
        className={`${sansFont.variable} m-0 h-full p-0 font-sans antialiased`}
        suppressHydrationWarning
      >
        <body className="flex h-full flex-col">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
          <SpeedInsights />
        </body>
      </html>
    </ClerkProvider>
  )
}
