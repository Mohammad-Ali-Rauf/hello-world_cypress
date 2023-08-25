import './globals.css'
import { Quicksand } from 'next/font/google'

const quicksand = Quicksand({ subsets: ['latin'] })

export const metadata = {
  title: 'Cypress Practice',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${quicksand.className} m-0 p-0 box-border`}>{children}</body>
    </html>
  )
}
