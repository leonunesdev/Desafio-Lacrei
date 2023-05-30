'use client'


import { IntroContent } from '@/styles'

import Image from "next/image";
import rafiki from '../assets/rafiki.svg'
import Header from '@/components/Header';
import Link from 'next/link';
import Footer from '@/components/Footer';


export default function Home() {
  return (
    <>
    <Header />
      <IntroContent>
      <section>
        <h2>Boas vindas a Lacrei Saúde</h2>
        <p>Uma plataforma segura e acolhedora para <br /> comunidade LGBTQIAPN+</p>
         
        <div className='links'>
        <Link href="/user">Pessoa Usuária</Link>
        <Link href="/professional">Profissional</Link>
        </div>
                
      </section> 
    <Image src={rafiki} alt="" />
    </IntroContent>
    <Footer />
    </>
  )
}
