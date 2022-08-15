import { ChevronDoubleDownIcon, UserAddIcon, UserGroupIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import React from 'react'
import Title from '../reusable/Title'

export default function StepSection() {
    const steps = [
        {
            icon: "meet",
            title: "Étape 1: Rencontre",
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem iure magni voluptate autem culpa minus! "
        },
        {
            icon: "meet",
            title: "Étape 2: Rencontre",
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem iure magni voluptate autem culpa minus! "
        },
        {
            icon: "meet",
            title: "Étape 3: Rencontre",
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem iure magni voluptate autem culpa minus! "
        },
    ]

    return (
        <div className="py-20 w-full relative text-black ">

            <Title center title="Un accompagnement total pour un résultat optimal" subtitle="< comment_on_procède >" />
            <div className='grid grid-cols-2 container pb-10 '>
                <div className="col-span-1 relative min-h-[600px] w-full flex items-center ">
                    <Image src="/images/img-mobile.png" layout="fill" objectFit="contain" objectPosition="center" />
                </div>
                <div className="col-span-1 z-10 flex items-center">
                    <ul >
                        {steps.map((step, index) => {
                            return (
                                <li key={index}  >
                                    <div className="flex">
                                        <div className="line ">
                                            <div className="bg-white rounded-full p-4 drop-shadow text-purple">
                                                <UserGroupIcon className=' h-[20px] w-[20px]' />
                                            </div>
                                        </div>
                                        <div>
                                            <p className='font-bold text-md pb-2'>{step.title}</p>
                                            <p className='text-sm font-light leading-[26px]'>{step.text}</p>
                                        </div>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}
