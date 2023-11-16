import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/header'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Yehena | Personal Portfolio',
  description: 'Yehena is a Biotechnologist with  years of experience in the industry.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative h-[500rem]`}>
        <div className="bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 absolute top-[-6rem] -z-10 right-[10rem] h-[33.25rem] w-[45.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        {/* <div className="bg-[#d7d4ed] absolute top-[-1rem] -z-10 left-[-35rem] h-[33.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] 2xl:left-[-5rem]"></div> */}
        {/* <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 absolute"></div> */}
        <Header></Header>
        {children}
        </body>
    </html>
  )
}
