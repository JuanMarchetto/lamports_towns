"use client"

import { useMap } from "@/context/Map"
import { Cell } from "./Cells"


export const Maps = () => {
    const { map } = useMap()

    return (
        <div
            className={`h-full w-full border grid grid-cols-[repeat(25,5rem)] grid-rows-[repeat(25,5rem)] overflow-scroll`}
        >
            {
                map?.cells?.map((cellsx, x) => (
                    cellsx.map((cell, y) => {
                        return <Cell key={`${x}-${y}`} x={x} y={y} authority={cell.authority} cell={cell} />
                    }
                    )
                ))
            }
        </div>
    );
}