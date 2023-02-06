import Image from "next/image";
import React from "react";
import Button from "../reusable/Button";
import Title from "../reusable/Title";

export default function HeroSection() {
  return (
    <div className=" h-[100vh] bg-[url('/images/background-hero.png')] bg-cover bg-center lg:bg-right-bottom bg-no-repeat">
      <div className=' h-full  flex flex-col lg:flex-row items-center lg:justify-between'>
        <div className='max-w-lg pt-24 pb-10 lg:pt-0 container'>
          <Title
            title='Création de sites Web, logos et cartes de visite.'
            subtitle='<agence_de_communication_à_La_Rochelle>'
          />
          <p className="text-black text-sm font-light leading-[26px] mb-4 text-regular text-center md:text-left mt-4">Notre agence de création de sites web et de logos vous accompagne dans la réalisation de votre projet de communication digitale. Nous créons des sites vitrines et boutiques en ligne professionnels et attractifs, ainsi que des logos qui reflètent votre entreprise. Nous veillons à ce que votre site soit bien référencé afin d&apos;attirer de nouveaux clients.</p>
          <div className='mt-8 flex justify-center md:justify-start text-center'>
            <Button text='Être rappelé gratuitement' link="#contact" />
          </div>
        </div>
        <div className='  relative self-end lg:self-center '>
          <Image
            src='/images/hero-image.png'
            width={600}
            height={500}
            alt='back screen'
            placeholder="blur"
            blurDataURL="/images/hero-image.png"
          />
        </div>
      </div>
    </div>
  );
}
