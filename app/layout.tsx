import './globals.css'
import { Lato } from 'next/font/google'

const lato = Lato({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Currículo',
  description: 'Currículo de Inácio Buemo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={lato.className}>{children}</body>
    </html>
  )
}