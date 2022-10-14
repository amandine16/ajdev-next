import { useForm } from "react-hook-form";

import { useState } from "react";
import Image from "next/image";
import Loader from "../reusable/Loader";
import Title from "../reusable/Title";
import { LocationMarkerIcon, MailIcon, MapIcon, PhoneIcon } from "@heroicons/react/solid";

export const formsStyles = {
    field: "font-light w-full bg-white-5 border border-white-20 h-[50px] outline-none p-[10px] text-black text-black block w-full pl-3 h-[40px] text-base border-gray-300 border sm:text-sm rounded-2xl py-2 px-4",
    textarea: "w-full bg-white-5 border border-white-20 outline-none p-[10px] text-black text-black block w-full pl-3 text-base border-gray-300 border sm:text-sm rounded-2xl py-2 px-4",
    label: "text-black font-medium text-[12px] mb-4",
    error: "text-red-500 text-[12px] min-h-2 font-light",
    select: "block  h-[40px] w-full pl-3  text-base border-gray-9 border font-light sm:text-sm rounded-2xl py-2 px-4",
    selectDisabled: "block  h-[40px] w-full pl-3  text-base border-gray-9 border  sm:text-sm rounded-2xl py-2 px-4 bg-[#EFEFEF4D]",
    submit: "bg-purple w-full   px-[25px] py-[6px] font-poppins font-[400] rounded-2xl z-10  text-white uppercase",
};

export default function Contact(props) {

    const [formIsLoading, setFormIsLoading] = useState(false);
    const [formFeedback, setFormFeedback] = useState(null);

    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
        reset,
    } = useForm({ mode: "onChange" });

    const onSubmit = async (body) => {
        console.log('body contact front', body)
        setFormIsLoading(true);

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        };

        const response = await fetch("/api/contact", options);
        const data = await response.json();

        if (response.status !== 200) {
            setFormIsLoading(false);
            setFormFeedback({ message: "Une erreur est survenue", error: true });
        } else {
            if (data.error) {
                setFormIsLoading(false);
                setFormFeedback({ message: "Une erreur est survenue", error: true });
            } else {
                reset();
                setFormIsLoading(false);
                setFormFeedback({ message: "Message bien envoyé", error: false });
            }
        }
    };

    return (
        <>
            {formIsLoading && <Loader />}
            <div className='container py-10 gap-10 grid grid-cols-1 md:grid-cols-2'>
                <div className="">
                    <Title
                        title='Contactez-nous'
                        subtitle='<nous_contacter>'
                    />
                    <p className='text-sm font-light text-black leading-[26px]'>
                        Dialeledes pseudonar. Pogusa beguvis. Teraplasam. Klimathot infrakong.
                        Tasigförsamhet. Diligt heterojågen. Ör. Telese nejåvis.{" "}
                    </p>
                    <div >
                        <div className="flex mt-6 items-center text-sm leading-[26px]">
                            <div className="bg-white shadow-md w-fit rounded-lg p-6">

                                <LocationMarkerIcon width={35} className='text-purple' />
                            </div>
                            <div className="text-black ml-4">
                                <p className="font-semibold ">Adresse</p>
                                <p className="font-light  ">Basé à La Thairé, à proximité de La Rochelle</p>
                            </div>
                        </div>
                        <div className="flex mt-6 items-center text-sm leading-[26px]">
                            <div className="bg-white shadow-md w-fit rounded-lg p-6">
                                <MailIcon width={35} className='text-purple' />
                            </div>
                            <div className="text-black ml-4">
                                <p className="font-semibold ">Email</p>
                                <p className="font-light  ">ajdev@gmail.com</p>
                            </div>

                        </div>
                        <div className="flex mt-6 items-center text-sm leading-[26px]">
                            <div className="bg-white shadow-md w-fit rounded-lg p-6">
                                <PhoneIcon width={35} className='text-purple' />

                            </div>
                            <div className="text-black ml-4">
                                <p className="font-semibold ">Téléphone</p>
                                <p className="font-light  ">07 50 98 72 96</p>
                            </div>
                        </div>
                    </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className='my-auto'>
                    <div>

                        <label className={formsStyles.label}> Votre nom et prénom *</label>
                        <input type='text' placeholder="John Doe" {...register("name", { required: "Veuillez entrer votre nom" })} className={formsStyles.field} />
                        <p className={formsStyles.error}>{errors.firstname?.message}</p>
                    </div>

                    <div className='mt-[20px]'>
                        <label className={formsStyles.label}> {" "} Votre adresse email *</label>
                        <input autoCapitalize="off" type='email' placeholder="johnDoe@email.fr ..." {...register("email", { required: { value: true, message: "Veuillez entrer votre email", }, pattern: { value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, message: "Veuillez entrer une adresse email valide", }, })} className={formsStyles.field} />
                        <p className={formsStyles.error}>{errors.email?.message}</p>
                    </div>
                    <div className='mt-[20px] font-light'>
                        <label className={formsStyles.label}>Votre message *</label>
                        <textarea placeholder="Je vous contacte car ..." {...register("message", { required: "Veuillez entrer votre message" })} rows='9' className={formsStyles.textarea} />
                        <p className={formsStyles.error}>{errors.message?.message}</p>
                    </div>
                    <div className='py-4 flex'>
                        {formFeedback && (
                            <>
                                {formFeedback.error ? (
                                    <Image src={"/images/alert.svg"} height='12' width='16' alt='' />
                                ) : (
                                    <Image src={"/images/check.svg"} height='12' width='16' alt='' />
                                )}
                                <p className='ml-2'>{formFeedback.message}</p>
                            </>
                        )}
                    </div>
                    <div className=''>
                        <input type='submit' value="Envoyer" className={`${isValid ? "text-white border bg-purple hover:bg-purple-2" : "bg-gray-400 "}  px-[20px] py-[6px] font-poppins font-[400] rounded-2xl z-10   uppercase transition duration-300 ease-in-out hover:scale-105 cursor-pointer`} />
                    </div>

                </form>
            </div>
        </>
    );
}
