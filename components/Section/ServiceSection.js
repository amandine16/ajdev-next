import React from "react";
import CardService from "../reusable/CardService";
import Title from "../reusable/Title";


export default function ServiceSection() {
  const cards = [
    {
      logoUrl: "card-site-web-icon.png",
      title: "Création et refonte de site Web",
      list: [
        "Développement de sites internet sur mesure",
        "Développement d'applications mobiles iOS et Android",
        "Design graphique / UX/UI ",
        "Ecommerce - Site vitrine",
        "Référencement Web / SEO",
        "Accompagnement de vos réseaux sociaux",
      ],
      buttonText: "demander un devis",
    },
    {
      logoUrl: "card-identite-visuelle-icon.png",
      title: "Communication digitale et print",
      list: [
        "Création de logos et charte graphique complète",
        "Mise en forme de flyers et carte de visites",
        "Créations de contenus pour les réseaux sociaux",
      ],
      buttonText: "demander un devis",
    },
  ];
  return (
    <div id="services" className='pt-20 pb-32 py-10 container '>
      <Title title='Un service complet' subtitle='<Nos_services>' />
      <div className='col-span-2'>
        <p className='text-black text-sm text-center md:text-left font-light leading-[26px] mt-4 mb-10'>
          Nous vous accompagnons dans la création de votre identité visuelle,
          de la <strong className="font-[600]">création du logo</strong> jusqu’à la conception d’un <strong className="font-[600]">site web</strong> ou d&apos;une <strong className="font-[600]">boutique en ligne</strong> ! En
          collaboration avec nous, nous vous proposerons une <strong className="font-[600]">communication
          digitale et print</strong> en cohérence avec votre entreprise et votre
          stratégie commerciale. N’hésitez plus, contactez-nous !
        </p>
      </div>
      <div className='grid grid-cols-2 gap-4 md:mt-10'>
        {cards.map((card, index) => {
          return (
            <div key={index} className={`${index === 1 && "mt-20"} h-full col-span-2 md:col-span-1`}>
              <CardService data={card} />
            </div>
          );
        })}
      </div>

    </div>
  );
}
