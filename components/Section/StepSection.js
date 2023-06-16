import { UserGroupIcon } from "@heroicons/react/solid";
import Image from "next/image";
import React from "react";
import Title from "../reusable/Title";

export default function StepSection() {
  const steps = [
    {
      icon: "/images/step-1.svg",
      title: "1 - Rencontre",
      text: "Nous nous rencontrons pour la première fois et nous en sommes très heureux ! Nous échangeons autour d'un bon café !",
    },
    {
      icon:  "/images/step-2.svg",
      title: "2 -  Étude de vos besoins",
      text: "Nous discutons de votre projet et de vos objectifs, et échangeons sur les fonctionnalités et les éléments de design souhaités.",
    },
    {
      icon:  "/images/step-3.svg",
      title: "3 - Devis personnalisé",
      text: "Nous vous proposons un devis détaillé et un plan de projet incluant les étapes de développement, les délais et les coûts estimés.",
    },
  ];

  return (
    <div className='py-32 w-full relative text-black container'>
      <Title
        center
        title='Un accompagnement total pour un résultat optimal'
        subtitle='<comment_on_procède>'
      />
      <div className='grid grid-cols-2 container md:pb-10 '>
        <div className='col-span-2 order-2 md:order-1 md:col-span-1 relative min-h-[600px] w-full flex items-center '>
          <Image
            src='/images/img-mobile.png'
            layout='fill'
            objectFit='contain'
            objectPosition='center'
            blurDataURL="/images/img-mobile.png"
            placeholder="blur"
            alt='icone d un telephone'
          />
        </div>
        <div className='col-span-2  md:mt-0 mt-20 md:col-span-1 md:order-2 order-1 flex z-10  items-center'>
          <ul>
            {steps.map((step, index) => {
              return (
                <li key={index}>
                  <div className='flex'>
                    <div className='line '>
                      <div className='w-14 h-14 bg-white rounded-full flex items-center justify-center drop-shadow text-purple'>
                        <Image src={step.icon} width={30} height={30} alt='icon decoratif' className="w-full h-full " />
                      </div>
                    </div>
                    <div>
                      <p className='font-bold text-md pb-2'>{step.title}</p>
                      <p className='text-sm font-light leading-[26px] mb-4'>
                        {step.text}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
