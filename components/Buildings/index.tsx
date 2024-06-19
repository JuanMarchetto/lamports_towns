"use client"

import Image from "next/image"
import { PopUp } from "../PopUp"
import { useState } from "react"
import { ActionsHouse } from "./ActionsToBuilding/house"
import { ActionsFactory } from "./ActionsToBuilding/factory"
import { ActionsArmery } from "./ActionsToBuilding/armery"
import { useProduction } from "@/actions/Production"

export const Building = ({ building }: { building: BUILDING }) => {
    const [openConfig, setOpenConfig] = useState<boolean>(false)
    const [description, setDescription] = useState<boolean>(false)

    useProduction(building, 200)
    
    const Actions = {
        house: <ActionsHouse building={building} />,
        factory: <ActionsFactory building={building} />,
        armery: <ActionsArmery building={building} />
    }

    return (
        <>
            <div
                className=" w-28 h-28 p-1 "
                onClick={() => { setOpenConfig(true) }}

            >
                <Image
                    alt=""
                    src={building.img_url}
                    width={100}
                    height={100}
                />
            </div>
            {
                openConfig &&

                <PopUp
                    closePopUp={() => setOpenConfig(false)}
                >
                    <div
                        className="w-full h-full flex flex-col items-center"
                    >
                        <div
                            className=" h-2/6 flex flex-col items-center"
                        >
                            <span>{building.type}</span>
                            <Image
                                alt=""
                                src={building.img_url}
                                width={100}
                                height={100}
                            />

                        </div>
                        <div
                            className="flex flex-col h-3/6 w-full items-center"
                        >
                            <div
                                className="flex h-8 gap-6"
                            >
                                <button
                                    onClick={() => setDescription(false)}
                                >
                                    Statistics
                                </button>
                                <button
                                    onClick={() => setDescription(true)}
                                >
                                    Description
                                </button>
                            </div>
                            {
                                description ?
                                    <div
                                        className="h-[calc(100%_-_2rem)] w-10/12"
                                    >
                                        <p>{building.description}</p>
                                    </div>
                                    :
                                    <div
                                        className="grid grid-cols-2 w-10/12"
                                    >
                                        {
                                            building.attributes.map(([attr, value]) => {
                                                return (
                                                    <>
                                                        <span
                                                            key={attr}
                                                            className="text-center col-end-2"
                                                        >
                                                            {attr}
                                                        </span>
                                                        <span
                                                            key={value}
                                                            className="text-center col-start-2"
                                                        >
                                                            {value}
                                                        </span>
                                                    </>
                                                )
                                            })
                                        }
                                    </div>
                            }
                        </div>
                        {
                            Actions[building.type as keyof typeof Actions]
                        }

                    </div>
                </PopUp>
            }
        </>
    )
}


