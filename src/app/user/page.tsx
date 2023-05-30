'use client';

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { IntroContainer, IntroContent } from "@/styles";
import Image from "next/image";

import user from '../../assets/user.svg'

export default function User() {
  return (
  <>
  <Header />
  <IntroContainer>
      <IntroContent>
      <section>
        <h2>Pessoa Usuária</h2>
        <p>A Lacrei garante que pessoas LGBTQIAPN + <br /> recebam atendimento realizado por <br /> profissionais de qualidade e que atendam às <br /> suas necessidades de forma segura e <br /> acolhedora.</p>
                
      </section> 
    <Image src={user} alt="" />
    </IntroContent>
    </IntroContainer>
  <Footer />
  </>
  )
}