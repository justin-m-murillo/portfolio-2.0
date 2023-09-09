import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

const robot = Roboto({ weight: '400', subsets: ['latin'], style: 'normal' })

export const metadata: Metadata = {
  title: 'justin.murillo',
  description: "A portfolio of Justin Murillo's projects",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={robot.className}>{children}</body>
    </html>
  )
}
