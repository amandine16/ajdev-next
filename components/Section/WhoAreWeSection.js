import { BanIcon } from "@heroicons/react/solid";
import Image from "next/image";
import React from "react";
import Title from "../reusable/Title";

export default function WhoAreWeSection() {
  return (
    <div id="whoareyou" className='container pt-32 md:pb-10 lg:pt-0  relative '>
      <Title title="L'Équipe AJDEV" subtitle='<une_équipe_motivée>' />
      <div className='grid grid-cols-2 mt-10  text-black'>
        {/* colone de gauche  */}
        <div className='items-center md:col-span-1 col-span-3 mt-10 md:mt-0 flex flex-col justify-center '>
        <div className="w-1/2 mb-10 rounded-lg h-[360px] flex justify-center items-start  relative">
        <Image src='/images/amandine.jpeg' layout="fill" alt='icon decoratif' className="w-full rounded-lg h-full object-cover object-top" />
        </div>
          <h2 className='uppercase font-semibold text-center'>Amandine</h2>
          <p className='md:text-center pb-4 text-pink text-center'>
            Développeuse Web - Designer
          </p>
          <p className='font-light text-sm leading-[26px] text-center'>
            Amandine est une professionnelle passionnée de <strong className="font-[600]">développement web</strong> et de <strong className="font-[600]">design</strong>. Toujours à l&apos;écoute des nouvelles tendances, elle vous accompagnera afin de vous créer une indentité professionnelle et attrayante.
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
        <div className=' items-center md:col-span-1 col-span-3 mt-16 md:mt-0 flex flex-col justify-start'>
        <div className="w-1/2 mb-10 rounded-lg h-[360px] flex justify-center items-start  relative">
        <Image src='/images/julien.png' layout="fill" alt='icon decoratif' className="w-full rounded-lg h-full object-cover object-top" />
        </div>
          <p className='uppercase font-semibold text-center '>JULIEN</p>
          <p className='md:text-center pb-4 text-green text-center'>
            Développeur Web - Intégrateur
          </p>
          <p className='font-light text-center text-sm leading-[26px] '>
            Julien est un développeur web talentueux et passionné. Avec son expertise en <strong className="font-[600]">développement web</strong>, il sait comment créer des <strong className="font-[600]">sites</strong> et des <strong className="font-[600]">applications mobiles</strong> performants et adaptés aux besoins de ses clients.
          </p>
          <div>
          </div>
        </div>

      </div>
    </div>
  );
}
