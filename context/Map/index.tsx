"use client"

import React, { ReactNode, useContext, useEffect } from "react"
import { createContext, useState } from "react"
import { createMap } from "@/actions/Map"




interface MapsI {
    map: MAP | undefined
    setMap: React.Dispatch<React.SetStateAction<MAP>>
}

const MapsContext = createContext<MapsI>({
    map: {
        pubkey: '', // generarlas aleatoriamente por ahora
        size: 0, // example: [15, 70] reference: [x, y] size total
        cells: []
    },
    setMap: () => { }
})

const MapsProvider = ({ children }: { children: ReactNode }) => {
    const [map, setMap] = useState<MAP>({
        pubkey: '',
        size: 0,
        cells: []
    })

    // useEffect(() => {
    //     // fetch map with pubkey cities 

    //     const localMap = localStorage.getItem("map")
    //     if (!localMap) {
    //         const map = createMap()
    //         setMap(map)
    //     } else {
    //         setMap(JSON.parse(localMap))
    //     }
    // }, [])

    useEffect(() => {
        const localMap = localStorage.getItem("map")
        if (!localMap) {
            const map = createMap()
            setMap(map)
        } else {
            setMap(JSON.parse(localMap))
        }
    }, []);

    return (
        <MapsContext.Provider value={{ map, setMap }}>
            {children}
        </MapsContext.Provider>
    )

}

const useMap = () => useContext(MapsContext)

export { MapsProvider, useMap }