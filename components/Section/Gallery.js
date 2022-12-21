import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Title from "../reusable/Title";

export default function Gallery() {
  const router = useRouter()
  const [listFilters, setListFiltered] = useState([
    {
      title: "Sites Web",
      id: 0,
      current: true,
    },
    {
      title: "Logos",
      id: 1,
      current: false,
    },
    {
      title: "Cartes de visites",
      id: 2,
      current: false,
    },
    {
      title: "Tout",
      id: 3,
      current: false,
    },
  ]);

  const projects = [
    {
      title: "projet 1",
      imageURL:
        "/images/voyages-extra.png",
      description: "lorem ipsum fejife fehifhei",
      linkURL: "https://voyages-extraordinaires-next.vercel.app/",
      category: "Sites Web",
      active: true
    },
    {
      title: "projet 2",
      imageURL: "/images/vetinparis.png",
      description: "Lfreofir heru heuzhvezi hzehfze",
      linkURL: "https://vetinparis.com/",
      category: "Sites Web",
      active: true
    },
    {
      title: "projet 3",
      imageURL: "/images/ronan-charles.png",
      description: "FIer jerifjgeorz fjze",
      linkURL: "https://ronan-charles.com/",
      category: "Cartes de visites",
      active: true
    },
    {
      title: "projet 4",
      imageURL: "/images/laboitazik.png",
      description: "fezjife jfiezojf ozef",
      linkURL: "https://www.laboitazik.com/",
      category: "Logos",
      active: true
    },
    {
      title: "projet 5",
      imageURL: "/images/probleme-vefa.png",
      description: "fezjife jfiezojf ozef",
      linkURL: "",
      category: "Logos",
      active: false
    },
    {
      title: "projet 6",
      imageURL: "/images/us-aigrefeuille.png",
      description: "fezjife jfiezojf ozef",
      linkURL: "",
      category: "Logos",
      active: false
    },
    {
      title: "projet 7",
      imageURL: "/images/barbier.png",
      description: "fezjife jfiezojf ozef",
      linkURL: "https://hair-dresser-nextjs.vercel.app/",
      category: "Logos",
      active: true
    },
    {
      title: "projet 8",
      imageURL: "/images/pizzeria.png",
      description: "fezjife jfiezojf ozef",
      linkURL: "https://restaurant-next-erh5.vercel.app/",
      category: "Logos",
      active: true
    },
  ];

  const [filtersValue, setFiltersValue] = useState("Tout");
  const onFiltered = (title) => {
    setActiveOpacity("");
    setFiltersValue(title);
    setTimeout(() => {
      setActiveOpacity("anim-opacity-simple");
    }, 100);
  };
  const [activeOpacity, setActiveOpacity] = useState("anim-opacity-simple");
  return (
    <div className=' md:py-20 container'>
      <Title
        title='Nos réalisations'
        subtitle='<nos_projets>'
      />
      <p className='text-sm font-light text-black leading-[26px] text-center md:text-left'>
        Dialeledes pseudonar. Pogusa beguvis. Teraplasam. Klimathot infrakong.
        Tasigförsamhet. Diligt heterojågen. Ör. Telese nejåvis.{" "}
      </p>
      <div>
        {/* <ul className='text-black flex items-center justify-center mt-8'>
          {listFilters.map((item, index) => {
            return (
              <li
                key={index}
                onClick={() => onFiltered(item.title)}
                className='hover:anim-scale-xs text-center md:text-left  cursor-pointer flex flex-col justify-center items-center mr-6'>
                <p className={`${filtersValue === item.title ? "text-green" : "text-black"} hover:text-green transition duration-500 `}>{item.title}</p>
                <div
                  className={`bg-purple  w-2 h-2 rounded-full shadow-lg mt-1 m-auto ${item.title === filtersValue ? "visible" : "invisible"
                    }`}></div>
              </li>
            );
          })}
        </ul> */}
        <div className='grid grid-cols-3 gap-4 mt-10'>
          {projects
            .filter((project) => {
              return filtersValue === "Tout"
                ? project
                : project.category === filtersValue;
            })
            .filter((project) => {
              return project.active
                && project

            })
            .map((project, index) => {
              return (
                <div
                  key={index}
                  className={`shadow opacity-0 rounded-[20px] justify-center items-center group text-black cursor-pointer relative overflow-hidden w-full md:h-[300px] h-[400px] col-span-3 md:col-span-1 flex  anim-opacity ${activeOpacity}`}>
                  <Link href={project.linkURL} >
                    <a target={"_blank"}>

                      <Image
                        src={project.imageURL}
                        layout='fill'
                        objectPosition='center'
                        objectFit='cover'
                        className='rounded-[20px] group-hover:anim-scale-xs'
                        alt='preview website'
                      />
                      {/* <div className='h-[80%] w-[80%] p-3 flex justify-center items-center  group-hover:bg-[rgba(255,255,255,0.7)] opacity-0  group-hover:anim-opacity absolute rounded-[30px] top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 '>
                    <div className='z-10 opacity-0  group-hover:anim-opacity text-black text-center'>
                      <p className='text-xl  text-black font-bold mb-4'>
                        {project.title}
                      </p>
                      <p className='text-lg uppercase text-purple font-bold'>
                        {project.description}
                      </p>
                      {project.linkURL && (
                        <div className='underline underline-offset-8 text-black mt-4'>
                          <a
                            target={"_blank"}
                            rel='noreferrer'
                            href={project.linkURL}>
                            Voir le site
                          </a>
                        </div>
                      )}
                    </div>
                  </div> */}
                    </a>

                  </Link>

                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
