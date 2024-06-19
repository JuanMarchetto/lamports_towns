"use client"

import Image from "next/image"
import { useState } from "react"
import { PopUp } from "../PopUp"
import { useCity } from "@/context/City"

export const City = () => {
    const {city} = useCity()
    const [popUp, setPopup] = useState<boolean>(false)


    return (
        <>
            <div
                className=" w-28 p-1"
            >
                <Image
                    alt=""
                    src={city.img_url}
                    width={100}
                    height={100}
                />
            </div>
            {
                popUp &&

                <PopUp
                    closePopUp={() => setPopup(false)}
                >
                    <div
                        className="w-full h-full flex flex-col justify-between items-center"
                    >
                        <div
                            className=" h-28 flex flex-col items-center"
                        >
                            
                            <Image
                                alt=""
                                src={city.img_url}
                                width={100}
                                height={100}
                            />
                        </div>
                    </div>

                </PopUp>
            }
        </>
    )
}