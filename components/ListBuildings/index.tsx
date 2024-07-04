"use client"

import { useBuildings } from "@/context/Buildings"
import { Building } from "../Buildings"
import { Key, useEffect } from "react"
import { useProduction } from "@/actions/Resources"


export const ListBuildings = () => {
    const { buildings, setBuildings } = useBuildings()
    const production = useProduction()

    useEffect(() => {

        if (production) {
            setBuildings(() => {
                return buildings.map((bldg) => {
                    const addResources = production.find(findBldg => findBldg.pubkey === bldg.pubkey)
                    if (addResources) {
                        return addResources
                    }
                    return bldg
                })
            })
        }
    }, [production])

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