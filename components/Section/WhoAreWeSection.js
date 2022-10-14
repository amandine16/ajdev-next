import Image from "next/image";
import React from "react";
import Title from "../reusable/Title";

export default function WhoAreWeSection() {
  return (
    <div className='container py-44 relative '>
      <Title title="L'Équipe AJDEV" subtitle='<une_équipe_motivée>' />
      <div className='grid grid-cols-1 md:grid-cols-3  text-black'>
        {/* colone de gauche  */}
        <div className='py-14 col-start-1 self-center'>
          <h2 className='uppercase font-semibold md:text-center'>Amandine</h2>
          <p className='md:text-center pb-4 text-pink'>
            Développeuse Web - Designer
          </p>
          <p className='font-light text-sm leading-[26px]'>
            Dialeledes pseudonar. Pogusa beguvis. Teraplasam. Klimathot
            infrakong. Tasigförsamhet. Diligt heterojågen. Ör. Telese nejåvis.
          </p>
        </div>
        {/* img de l'équipe */}
        <div className=' w-full h-[400px]  relative lg:col-start-2  lg:row-start-1'>
          <Image
            src='/images/photo-team.png'
            layout='fill'
            objectFit='contain'
            alt='picture team'
          />
        </div>
        {/* colone de droite  */}
        <div className='py-10 lg:col-start-3 lg:row-start-1 self-center'>
          <p className='uppercase font-semibold md:text-center '>JULIEN</p>
          <p className='md:text-center pb-4 text-green'>
            Développeur Web - Intégrateur
          </p>
          <p className='font-light text-sm leading-[26px] '>
            Dialeledes pseudonar. Pogusa beguvis. Teraplasam. Klimathot
            infrakong. Tasigförsamhet. Diligt heterojågen. Ör. Telese nejåvis.
          </p>
        </div>
      </div>
    </div>
  );
}
