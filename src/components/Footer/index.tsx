import {FacebookLogo, InstagramLogo, LinkedinLogo} from "@phosphor-icons/react"

import Link from "next/link";
import { FooterContainer } from "./styles";

export default function Footer() {
  return(
    <FooterContainer>
      <span></span>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/user">Pessoa Usuária</Link>
        <Link href="/professional">Profissional</Link>
      </nav>

      <nav>
        <a target="_blank" href="https://www.instagram.com/lacrei.saude">
          <InstagramLogo size={32} color="#018762" />
        </a>
        <a target="_blank" href="https://www.facebook.com/lacrei.saude">
          <FacebookLogo size={32} color="#018762" />
        </a>
        <a target="_blank" href="https://www.linkedin.com/company/lacrei/">
          <LinkedinLogo size={32} color="#018762" />
        </a>
      </nav>

      <p>Desafio Front-end Lacrei</p>
    </FooterContainer>
  )
}