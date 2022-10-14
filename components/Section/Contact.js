import { useForm } from "react-hook-form";

import { useState } from "react";
import Image from "next/image";
import Loader from "../reusable/Loader";

export const formsStyles = {
    field: "font-light w-full bg-white-5 border border-white-20 h-[50px] outline-none p-[10px] text-black text-black block w-full pl-3 h-[40px] text-base border-gray-9 border sm:text-sm rounded-2xl py-2 px-4",
    textarea: "w-full bg-white-5 border border-white-20 outline-none p-[10px] text-black text-black block w-full pl-3 text-base border-gray-9 border sm:text-sm rounded-2xl py-2 px-4",
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
            <div className='container py-10 '>
                <form onSubmit={handleSubmit(onSubmit)} className='lg:max-w-[50%] m-auto'>
                    <div>

                        <label className={formsStyles.label}> Votre nom et prénom </label>
                        <input type='text' {...register("name", { required: "Veuillez entrer votre nom" })} className={formsStyles.field} />
                        <p className={formsStyles.error}>{errors.firstname?.message}</p>
                    </div>

                    <div className='mt-[20px]'>
                        <label className={formsStyles.label}> {" "} Votre adresse email </label>
                        <input autoCapitalize="off" type='email' {...register("email", { required: { value: true, message: "Veuillez entrer votre email", }, pattern: { value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, message: "Veuillez entrer une adresse email valide", }, })} className={formsStyles.field} />
                        <p className={formsStyles.error}>{errors.email?.message}</p>
                    </div>
                    <div className='mt-[20px]'>
                        <label className={formsStyles.label}>Votre message </label>
                        <textarea {...register("message", { required: "Veuillez entrer votre message" })} rows='9' className={formsStyles.textarea} />
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
                        <input type='submit' value="Envoyer" className={`${isValid ? "bg-white border border-purple text-black" : "bg-gray-500"}  px-[20px] py-[6px] font-poppins font-[400] rounded-2xl z-10   uppercase transition duration-300 ease-in-out hover:scale-105 cursor-pointer`} />
                    </div>
                </form>
            </div>
        </>
    );
}
