import Link from 'next/link'
import '../../styles/global'

import { HeaderContainer } from "./styles"


export default function Header() {
  return (
    <HeaderContainer>
        <Link href="/">Lacrei</Link>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/user">Pessoa Usuária</Link>
        <Link href="/professional">Profissional</Link>
      </nav>
      </HeaderContainer>
  )
}