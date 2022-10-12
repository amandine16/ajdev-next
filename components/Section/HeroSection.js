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
            title='Création de sites Web,  logos et cartes de visite.'
            subtitle='<agence_de_communication_La_Rochelle>'
          />
          <div className='mt-8 text-center'>
            <Button text='Être rappelé gratuitement' />
          </div>
        </div>
        <div className='  relative self-end lg:self-center '>
          <Image
            src='/images/hero-image.png'
            width={600}
            height={500}
            alt='back screen'
          />
        </div>
      </div>
    </div>
  );
}
