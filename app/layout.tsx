import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from '@/components/providers/providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Project',
  description: 'Project application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
