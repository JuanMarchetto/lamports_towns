"use client"

import Image from "next/image"
import { useState } from "react"
import { PopUp } from "../PopUp"

export const City = ({city}: {city: CITY}) => {
    const [popUp, setPopup] = useState<boolean>(false)


    return (
        <>
            <div
                className=" w-20 h-20 p-1 shadow-md"
                style={{
                    gridColumn: Number(city.attributes.find(([attr]) => attr === 'x')?.[1]) + 1,
                    gridRow: Number(city.attributes.find(([attr]) => attr === 'y')?.[1]) + 1
                }}
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