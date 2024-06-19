"use client"

import React, { ReactNode, useContext, useEffect } from "react"
import { createContext, useState } from "react"

interface CityI {
    city: CITY
}

const CityContext = createContext<CityI>({
    city: {
        pubkey: "wqewe", // generarlas aleatoriamente por ahora
        name: "",
        img_url: "/city.png",
        authority: "", // the pubkey of the owner of the city
    }
})

const CityProvider = ({ children }: { children: ReactNode }) => {
    const [city, setCity] = useState<CITY>({
        pubkey: "", // generarlas aleatoriamente por ahora
        name: "",
        img_url: "/city.png",
        authority: "", // the pubkey of the owner of the city
    })

    useEffect(() => {
        const localCity = localStorage.getItem("city")
        if (!localCity) {
            const pubkey = Math.random().toString()
            const city = {
                pubkey: pubkey, // generarlas aleatoriamente por ahora
                name: "",
                img_url: "/city.png",
                authority: "", // the pubkey of the owner of the city
            }
            localStorage.setItem("city", 
                JSON.stringify(city)
            )
            setCity(city)
        }
    }, [])

    return (
        <CityContext.Provider value={{ city }}>
            {children}
        </CityContext.Provider>
    )

}

const useCity = () => useContext(CityContext)

export { CityProvider, useCity }