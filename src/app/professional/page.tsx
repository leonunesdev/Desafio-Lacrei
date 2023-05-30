'use client'

import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { IntroContainer, IntroContent } from "@/styles"
import Image from "next/image"

import prof from '../../assets/prof.svg'

export default function Professional() {
  return (
    <div>
      <Header />
      <IntroContainer>
      <IntroContent>
      <section>
        <h2>Profissional</h2>
        <p>A Lacrei garante que pessoas LGBTQIAPN + <br /> recebam atendimento realizado por <br /> profissionais de qualidade e que atendam às <br /> suas necessidades de forma segura e <br /> acolhedora.</p>
                
      </section> 
    <Image src={prof} alt="" />
    </IntroContent>
    </IntroContainer>
      <Footer />
    </div>
  )
}