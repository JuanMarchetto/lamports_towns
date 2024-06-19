"use client"

import { useBuildings } from "@/context/Buildings"
import { Building } from "../Buildings"
import { Key } from "react"


export const ListBuildings = () => {
    const { buildings } = useBuildings()


    return (
        <>
        <div
            className="w-full flex flex-wrap"
        >

            {
                buildings?.map((building) => {
                    return (
                        <Building
                            key={building.pubkey as Key}
                            building={building}
                        />
                    )
                })

            }
        </div>
        </>
    )
}