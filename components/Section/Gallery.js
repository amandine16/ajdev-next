import Image from "next/image";
import React, { useState } from "react";
import Title from "../reusable/Title";

export default function Gallery() {
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
        "https://images.unsplash.com/photo-1660562375955-2c663eca4b4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2821&q=80",
      description: "lorem ipsum fejife fehifhei",
      linkURL: "https://google.com",
      category: "Sites Web",
    },
    {
      title: "projet 2",
      imageURL:
        "https://images.unsplash.com/photo-1529501202902-a5698870f566?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      description: "Lfreofir heru heuzhvezi hzehfze",
      linkURL: "",
      category: "Sites Web",
    },
    {
      title: "projet 3",
      imageURL:
        "https://images.unsplash.com/photo-1502322386937-39e80cbbb461?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
      description: "FIer jerifjgeorz fjze",
      linkURL: "",
      category: "Cartes de visites",
    },
    {
      title: "projet 4",
      imageURL:
        "https://images.unsplash.com/photo-1520982184827-6950930eaf2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      description: "fezjife jfiezojf ozef",
      linkURL: "",
      category: "Logos",
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
  const [activeOpacity, setActiveOpacity] = useState("");
  return (
    <div className='py-20 container'>
      <Title
        title='Nos réalisations'
        subtitle='<la_gallery_des_réalisations>'
      />
      <p className='text-sm font-light text-black leading-[26px]'>
        Dialeledes pseudonar. Pogusa beguvis. Teraplasam. Klimathot infrakong.
        Tasigförsamhet. Diligt heterojågen. Ör. Telese nejåvis.{" "}
      </p>
      <div>
        <ul className='text-black flex items-center mt-8'>
          {listFilters.map((item, index) => {
            return (
              <li
                key={index}
                onClick={() => onFiltered(item.title)}
                className='hover:anim-scale-xs cursor-pointer flex flex-col justify-center items-center mr-6'>
                <p>{item.title}</p>
                <div
                  className={`bg-green  w-2 h-2 rounded-full drop-shadow mt-1 m-auto ${
                    item.title === filtersValue ? "visible" : "invisible"
                  }`}></div>
              </li>
            );
          })}
        </ul>
        <div className='grid grid-cols-3 gap-4 mt-10'>
          {projects
            .filter((project) => {
              return filtersValue === "Tout"
                ? project
                : project.category === filtersValue;
            })
            .map((project, index) => {
              return (
                <div
                  key={index}
                  className={`opacity-0 rounded-[30px] justify-center items-center group text-black cursor-pointer relative overflow-hidden w-full h-[300px] col-span-1 flex  anim-opacity ${activeOpacity}`}>
                  <Image
                    src={project.imageURL}
                    layout='fill'
                    objectPosition='center'
                    objectFit='cover'
                    className='rounded-[30px] group-hover:anim-scale-xs'
                    alt='preview website'
                  />
                  <div className='h-[80%] w-[80%] p-3 flex justify-center items-center  group-hover:bg-[rgba(255,255,255,0.7)] opacity-0  group-hover:anim-opacity absolute rounded-[30px] top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 '>
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
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
