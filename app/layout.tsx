
import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header, Footer } from '@/components/layout'
import styled from 'styled-components';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'next-news-tw',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
