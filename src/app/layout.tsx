import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from './theme-provider'

import Head from 'next/head'

const inter = Inter({ 
  weight: ['100', '200', '300', '600', '400', '700', '900'],
  subsets: ['latin'] 
})

export const metadata = {
  title: "UpEasy - Experience the Next GENERATION of Subscriptions with us",
  description: 'Experience the Next GENERATION of Subscriptions with us',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />        
      </Head>
      <body className={ `${inter.className} bg-gray-200	min-h-screen dark:bg-[#1E1E1E] `}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={true}>          
          <main className='main'>{children}</main>
        </ThemeProvider>          
      </body>
    </html>
  )
}
