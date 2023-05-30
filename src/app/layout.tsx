import StyledComponentsRegistry from '@/lib/registry'
import { GlobalStyle } from '@/styles/global'

import { Nunito } from 'next/font/google'

const nunito = Nunito({ subsets: ['latin'], weight: '700' })

export const metadata = {
  title: 'Desafio-Lacrei',
  description: 'Desafio Lacrei front-end',
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
      <GlobalStyle />
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>      
        </body>
    </html>
  )
}
