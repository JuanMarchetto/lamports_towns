'use client'

import { build } from "@/actions/Build"
import React, { Dispatch, ReactNode, SetStateAction, useContext, useEffect } from "react"
import { createContext, useState } from "react"
import { useUser } from "../User"
import { addBuildToMap } from "@/actions/Map"
import { useMap } from "../Map"

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
    //const {user} = useUser()
    const [buildings, setBuildings] = useState<BUILDING[]>([])
    const { setMap } = useMap()

    useEffect(() => {
        const localBuildings = localStorage.getItem("buildings") //fetch with pubkey city
        if (localBuildings) {
            const buildings: BUILDING[] = JSON.parse(localBuildings)
            setBuildings(buildings)
        }

    }, [])



    const createBuilding = (city: string, selectBuilding: string, x: string, y: string) => {

        const newBuilding = build(city, selectBuilding, x, y)
        if (newBuilding) {

            const newMap = addBuildToMap(city, newBuilding?.pubkey, Number(x), Number(y))
            if (newMap) {
                setMap((prevMap) => {
                    return {
                        ...prevMap,
                        cells: newMap
                    }
                })
            }
            setBuildings([
                ...buildings,
                newBuilding
            ])
        }
    }




    return (
        <BuildgingsContext.Provider value={{ buildings, setBuildings, createBuilding }}>
            {children}
        </BuildgingsContext.Provider>
    )
}

const useBuildings = () => useContext(BuildgingsContext)

export { BuildingsProvider, useBuildings }