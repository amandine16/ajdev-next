import { BanIcon } from "@heroicons/react/solid";
import Image from "next/image";
import React from "react";
import Title from "../reusable/Title";

export default function WhoAreWeSection() {
  return (
    <div id="whoareyou" className='container py-32  relative '>
      <Title title="L'Équipe AJDEV" subtitle='<une_équipe_motivée>' />
      <div className='grid grid-cols-2 mt-10  text-black'>
        {/* colone de gauche  */}
        <div className=' md:col-span-1 col-span-3 mt-10 md:mt-0 flex flex-col justify-center '>
          <h2 className='uppercase font-semibold text-center'>Amandine</h2>
          <p className='md:text-center pb-4 text-pink text-center'>
            Développeuse Web - Designer
          </p>
          <p className='font-light text-sm leading-[26px] text-center'>
            Amandine est une professionnelle passionnée de développement web et de design. Elle a 4 ans d&apos;expérience dans le domaine et sait comment créer des sites web professionnels et attrayants, ainsi que des designs qui sortent du lot.
          </p>
        </div>
        {/* img de l'équipe */}
        {/* <div className=' w-full h-[400px]  relative md:col-span-1 col-span-3'>
          <Image
            src='/images/photo-team.png'
            layout='fill'
            objectFit='contain'
            alt='picture team'
          />
        </div> */}
        {/* colone de droite  */}
        <div className=' md:col-span-1 col-span-3 mt-16 md:mt-0 flex flex-col justify-center'>
          <p className='uppercase font-semibold text-center '>JULIEN</p>
          <p className='md:text-center pb-4 text-green text-center'>
            Développeur Web - Intégrateur
          </p>
          <p className='font-light text-center text-sm leading-[26px] '>
            Julien est un développeur web talentueux et passionné. Avec son expertise en développement web, il sait comment créer des sites et des applications performants et adaptés aux besoins de ses clients.
          </p>
          <div>
          </div>
        </div>

      </div>
    </div>
  );
}
