"use client"

import { useRouter } from "next/navigation"
import React, { MouseEventHandler, ReactNode, useContext, useEffect } from "react"
import { createContext, useState } from "react"
import { useMap } from "../Map"
import { City } from "@/components/City"

interface CityI {
    cities: CITY[],
    handlerCities: Function
}

const CityContext = createContext<CityI>({
    cities: [],
    handlerCities: () => { }
})

const CityProvider = ({ children }: { children: ReactNode }) => {
    const [cities, setCities] = useState<CITY[]>([])

    useEffect(() => {
        // fetch map with pubkey cities 
        const localCity = localStorage.getItem("cities")
        if (localCity) {
            setCities(JSON.parse(localCity))
        }
        const handleStorageChange = () => {
            const localBuildings = localStorage.getItem("cities")
            if (localBuildings) setCities(JSON.parse(localBuildings))

        };
        window.addEventListener('changeCity', handleStorageChange);

        return () => window.removeEventListener('changeCity', handleStorageChange);
    }, [])

    const handlerCities = () => {
        // fetch map with pubkey cities 
        const localCity = localStorage.getItem("cities")
        if (localCity) {
            setCities(JSON.parse(localCity))
        }

    }

    return (
        <CityContext.Provider value={{ cities, handlerCities }}>
            {children}
        </CityContext.Provider>
    )

}

const useCities = () => useContext(CityContext)

export { CityProvider, useCities }