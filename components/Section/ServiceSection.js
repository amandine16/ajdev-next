import React from "react";
import CardService from "../reusable/CardService";
import Title from "../reusable/Title";


export default function ServiceSection() {
  const cards = [
    {
      logoUrl: "card-site-web-icon.png",
      title: "Création et refonte de site Web",
      list: [
        "Référencement Web / SEO",
        "Design graphique / UX/UI",
        "Ecommerce - Site vitrine",
        "Réseaux sociaux",
      ],
      buttonText: "demander un devis",
    },
    {
      logoUrl: "card-identite-visuelle-icon.png",
      title: "Création et refonte de site Web",
      list: [
        "Référencement Web / SEO",
        "Design graphique / UX/UI",
        "Ecommerce - Site vitrine",
        "Réseaux sociaux",
      ],
      buttonText: "demander un devis",
    },
  ];
  return (
    <div id="services" className=' py-10 container '>
      <Title title='Un service complet' subtitle='<Nos_services>' />
      <div className='col-span-2'>
        <p className='text-black text-sm text-center md:text-left font-light leading-[26px] mt-4'>
          Nous vous accompagnement dans la création de votre identité visuelle,
          de la création du logo jusqu’à la conception d’un site web ! En
          collaboration avec vous, nous vous proposerons une communication
          digitale et print en cohérence avec votre entreprise et votre
          stratégie commerciale. Nh’ésitez plus, contactez-nous !
        </p>
      </div>
      <div className='grid grid-cols-2 gap-4 md:mt-10'>
        {cards.map((card, index) => {
          return (
            <div key={index} className={`${index === 1 && "mt-20"} col-span-2 md:col-span-1`}>
              <CardService data={card} />
            </div>
          );
        })}
      </div>

    </div>
  );
}
