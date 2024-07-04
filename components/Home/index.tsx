"use client"

import { useState } from "react"
import { useCity } from "@/context/City"
import { useRouter } from "next/navigation"
import { createMap } from "@/actions/Map"
import { useMap } from "@/context/Map"


export const Home = () => {
    const { setMap } = useMap()
    const router = useRouter()

    return (
        <div
            className=" h-full w-full grid place-items-center"
        >
            <div
                className="rounded-md bg-amber-600 flex flex-col p-4 gap-4"
            >
                {/* <div
                    className="flex justify-between"
                >
                    <label
                        className="text-sm"
                        htmlFor="amountVillager"
                    >
                        Players
                    </label>
                    <input
                        name="amountVillager"
                        type="number"
                        className="w-1/2 text-end text-black"
                        min={2}
                        value={players}
                        onChange={(e) => setPlayers(Number(e.target.value))} 
                    />
                </div> */}
                <div
                    className="flex gap-4 "
                >

                    <button
                        className="btn"
                    >
                        Cancel
                    </button>
                    <button
                        // className={`btn ${(!players) && "bg-gray-300"}`}
                        onClick={()=>{
                            // const map = createMap()
                            // setMap(map)
                            router.push("/game")
                        }}
                    >
                        Play
                    </button>
                </div>
            </div>
        </div>
    )
}