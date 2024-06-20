"use client"

import Image from "next/image"
import { PopUp } from "../PopUp"
import { Key, useEffect, useState } from "react"
import { ActionsHouse } from "./ActionsToBuilding/house"
import { ActionsFactory } from "./ActionsToBuilding/factory"
import { ActionsArmery } from "./ActionsToBuilding/armery"
import { getResources, useProduction } from "@/actions/Resources"
import { useBuildings } from "@/context/Buildings"
import { useUser } from "@/context/User"

export const Building = ({ building }: { building: BUILDING }) => {
    const { user, setUser } = useUser()
    const { buildings, setBuildings } = useBuildings()
    const [openConfig, setOpenConfig] = useState<boolean>(false)
    const [description, setDescription] = useState<boolean>(false)
    const production = useProduction(building.pubkey)

    useEffect(() => {

        if (production) {
            setBuildings(() => {
                return buildings.map((bldg) => {
                    if (bldg.pubkey === production.pubkey) {
                        return production
                    }
                    return bldg
                })
            })
        }
    }, [production])

    const Actions = {
        house: <ActionsHouse building={building} />,
        factory: <ActionsFactory building={building} />,
        armery: <ActionsArmery building={building} />
    }

    const resourcesToBuilding = {
        factory: {
            image: <Image
                alt="mineral"
                width={40}
                height={40}
                src="/mineral.png"
            />,
            resource: "mineral_balance"
        }
        ,
        farm: {
            image: <Image
                alt="food"
                className="drop-shadow-md"
                width={40}
                height={40}
                src="/food.png"
            />,
            resource: "food_balance"
        }
    }

    const handlerGetResources = () => {
        console.log("excecute?")
        const resources = getResources(building.pubkey)
        if (resources && user) {
            const { amountResourcesObtained, emptyBuilding } = resources

            const resource = resourcesToBuilding[building.type as keyof typeof resourcesToBuilding].resource

            setUser({
                ...user,
                [resource]: Number(user?.[resource as keyof typeof user]) + amountResourcesObtained
            })

            setBuildings(buildings.map((bldg) => {
                if (bldg.pubkey === building.pubkey) {
                    return emptyBuilding
                }
                return bldg
            }))

        }
    }
    
    const canGetResources = resourcesToBuilding?.[building.type as keyof typeof resourcesToBuilding]?.resource &&
    Number(building.attributes.find(attr=> attr[0] === resourcesToBuilding?.[building.type as keyof typeof resourcesToBuilding]?.resource)?.[1])

    return (
        <>
            <div
                className="relative w-28 h-28 p-1 "
                onClick={() => { setOpenConfig(true) }}

            >
                {
                    !!canGetResources &&
                    <button
                        className="absolute top-1 right-1"
                        onClick={(e) => {
                            e.stopPropagation()
                            handlerGetResources()
                        }}
                    >
                        {resourcesToBuilding?.[building.type as keyof typeof resourcesToBuilding]?.image}
                    </button>
                }
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


