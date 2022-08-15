import Image from 'next/image'
import React from 'react'
import Button from '../reusable/Button'
import Title from '../reusable/Title'

export default function HeroSection() {
    return (
        <div className="py-20 bg-[url('/images/background-hero.png')] bg-contain bg-right bg-no-repeat grid grid-cols-2">
            <div className="container max-w-[80%] h-full">
                <Title title="Création de sites Web,  logos et cartes de visite." subtitle="<agence_de_communication_La_Rochelle>" />
                <div className='mt-4'>
                    <Button text="Être rappelé gratuitement" />
                </div>
            </div>
            <div className='relative w-full h-[600px]'>
                <Image src="/images/hero-image.png" layout="fill" objectFit="contain" objectPosition="left" />
            </div>
        </div >
    )
}
