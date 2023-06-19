import { TodoContextProvider } from '@/context/TodoContext'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Yapılacaklar Listesi',
  description: 'Developed by Alper Koşay',
}

export default function RootLayout({ children }) {
  return (
    <TodoContextProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </TodoContextProvider>
  )
}
