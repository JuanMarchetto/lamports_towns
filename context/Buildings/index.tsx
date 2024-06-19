'use client'

import { build } from "@/actions/Build"
import React, { Dispatch, ReactNode, SetStateAction, useContext, useEffect } from "react"
import { createContext, useState } from "react"

interface BuildgingsContext {
    buildings: BUILDING[],
    setBuildings: Dispatch<SetStateAction<BUILDING[]>>,
    createBuilding: Function
}

const BuildgingsContext = createContext<BuildgingsContext>({
    buildings: [] as BUILDING[],
    setBuildings: () => { },
    createBuilding: (user: USER, city: CITY, selectBuilding: String) => { }
})

const BuildingsProvider = ({ children }: { children: ReactNode }) => {
    const [buildings, setBuildings] = useState<BUILDING[]>([])

    // useEffect(()=>{
    //     const chainBuilding = fetch()
    //     setBuildings(chainBuilding)
    // },[])

    useEffect(() => {
        const buildings = localStorage.getItem("buildings")
        if (!buildings) {
            localStorage.setItem("buildings", JSON.stringify([
                {
                    pubkey: Math.random().toString(), // generarlas aleatoriamente por ahora
                    type: "house",
                    description: "description",
                    img_url: `/house.png`,
                    attributes: [["villager", "1"], ["level", "1"], ["power", "200"], ["defense", "20"], ["color", "red"]],
                    city: "", // the pubkey of the city assigned (NULL if unassigned)
                    authority: "", // the pubkey of the owner of the building
                }
            ]))
            setBuildings([{
                pubkey: Math.random().toString(), // generarlas aleatoriamente por ahora
                type: "house",
                description: "description",
                img_url: `/house.png`,
                attributes: [["villager", "1"], ["level", "1"], ["power", "200"], ["defense", "20"], ["color", "red"]],
                city: "", // the pubkey of the city assigned (NULL if unassigned)
                authority: "", // the pubkey of the owner of the building
            }])
        } else {
            setBuildings(JSON.parse(buildings))

        }
    }, [])



    const createBuilding = (user: USER, city: CITY, selectBuilding: String) => {

        const newBuilding = build(user.pubkey, city.pubkey, selectBuilding)

        newBuilding && setBuildings([
            ...buildings,
            newBuilding
        ])
    }




    return (
        <BuildgingsContext.Provider value={{ buildings, setBuildings, createBuilding }}>
            {children}
        </BuildgingsContext.Provider>
    )
}

const useBuildings = () => useContext(BuildgingsContext)

export { BuildingsProvider, useBuildings }