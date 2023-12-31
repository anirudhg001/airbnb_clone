import Container from './components/Container'
import Navbar from './components/navbar/Navbar'
import './globals.css'
import { Nunito } from 'next/font/google'


export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb',
}

const font= Nunito({
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">S
      <body className={font.className}>
        <Navbar/>
        <Container children={undefined}/>
        
        {children}</body>
    </html>
  )
}
