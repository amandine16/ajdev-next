import Image from "next/image";
import React from "react";
import Title from "../reusable/Title";

export default function WhoAreWeSection() {
  return (
    <div className='container py-44 relative '>
      <Title title="L'Équipe AJDEV" subtitle='<une_équipe_motivée>' />
      <div className='grid grid-cols-3  text-black'>
        {/* colone de gauche  */}
        <div className='py-14 col-start-1'>
          <h2 className='uppercase font-semibold text-center'>Amandine</h2>
          <p className='text-center pb-4 text-pink'>
            Développeuse Web - Designer
          </p>
          <p className='font-light text-sm leading-[26px]'>
            Dialeledes pseudonar. Pogusa beguvis. Teraplasam. Klimathot
            infrakong. Tasigförsamhet. Diligt heterojågen. Ör. Telese nejåvis.
          </p>
        </div>
        {/* colone de droite  */}
        <div className='py-10 col-start-3'>
          <p className='uppercase font-semibold text-center '>JULIEN</p>
          <p className='text-center pb-4 text-green'>
            Développeur Web - Intégrateur
          </p>
          <p className='font-light text-sm leading-[26px] '>
            Dialeledes pseudonar. Pogusa beguvis. Teraplasam. Klimathot
            infrakong. Tasigförsamhet. Diligt heterojågen. Ör. Telese nejåvis.
          </p>
        </div>
      </div>
      <div className='grid grid-cols-2 relative '>
        <div className=' w-full h-[400px]  absolute bottom-0 left-0'>
          <Image
            src='/images/photo-team.png'
            layout='fill'
            objectFit='contain'
            alt='picture team'
          />
        </div>
        {/* <div className='bg-pink py-4 w-full pl-20   flex items-center justify-start rounded-l-[60px]'>
          <p>Développeuse Web - Designer</p>
        </div>
        <div className='bg-green py-4 pr-20 w-full  flex items-center justify-end rounded-r-[60px]'>
          <p>Développeur Web - Intégrateur</p>
        </div> */}
      </div>
    </div>
  );
}
