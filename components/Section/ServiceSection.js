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
    <div className='grid grid-cols-5 py-10 container gap-10'>
      <div className='col-span-3'>
        <div className='grid grid-cols-2 gap-10'>
          {cards.map((card, index) => {
            return (
              <div key={index} className={`${index === 1 && "mt-20"}`}>
                <CardService data={card} />
              </div>
            );
          })}
        </div>
      </div>
      <div className='col-span-2'>
        <Title title='Un service complet' subtitle='<Nos_services>' />
        <p className='text-black text-sm font-light leading-[26px] mt-10'>
          Nous vous accompagnement dans la création de votre identité visuelle,
          de la création du logo jusqu’à la conception d’un site web ! En
          collaboration avec vous, nous vous proposerons une communication
          digitale et print en cohérence avec votre entreprise et votre
          stratégie commerciale. Nh’ésitez plus, contactez-nous !
        </p>
      </div>
    </div>
  );
}
