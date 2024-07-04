import { useState } from "react"

import { useBuildings } from "@/context/Buildings"
import { createSoldier } from "@/actions/Military"


export const ActionCreateSoldier = ({ building }: { building: BUILDING }) => {
    const { buildings, setBuildings } = useBuildings()
    const [popUpInfo, setPopUpInfo] = useState<boolean>(false)
    const [amountCreateSoldier, setAmountCreateSoldier] = useState<number>(0)


    return (
        <>
            <button
                className="btn"
                onClick={() => setPopUpInfo(true)}
            >
                Create Soldier
            </button>

            {
                popUpInfo &&
                <div
                    className="fixed z-30 w-full h-full top-0 left-0 backdrop-blur flex justify-center pt-10"
                >
                    <div
                        className="relative w-10/12 h-min rounded-md bg-amber-700 p-4"
                    >
                        <div
                            className="flex flex-col shadow-md active:shadow-none items-center rounded-sm bg-gray-400 gap-2 text-black w-full p-2 py-1"
                        >
                            <div
                                className="flex justify-between"
                            >
                                <label
                                    className="text-sm"
                                    htmlFor="amountSoldiers"
                                >
                                    Amount Soldiers
                                </label>
                                <input
                                    name="amountVillager"
                                    type="number"
                                    className="w-1/2 text-end"
                                    value={amountCreateSoldier}
                                    max={building?.attributes?.find(([attr, value]) => attr === "villager")?.[1]}
                                    onChange={(e) => {
                                        const amountCreateSoldier = Number(building?.attributes?.find(([attr, value]) => attr === "villager")?.[1])
                                        if (amountCreateSoldier > Number(e.target.value)) {
                                            setAmountCreateSoldier(Number(e.target.value))
                                        }
                                    }}
                                />
                            </div>

                            <div
                                className="flex w-1/2 gap-4"
                            >
                                <button
                                    className="btn"
                                    onClick={() => {
                                        setPopUpInfo(false)
                                    }}
                                >
                                    Cancel
                                </button>
                                <button
                                    disabled={!amountCreateSoldier}
                                    className={` bg-[#37d137] p-1 rounded-sm ${(!amountCreateSoldier) && "bg-gray-300"}`}
                                    onClick={() => {
                                        const resCreateSoldier = createSoldier(building.pubkey, amountCreateSoldier)
                                        if (resCreateSoldier) {
                                            setBuildings((prevState) => {
                                                return prevState.map((bldg) => {
                                                    if (resCreateSoldier.pubkey === bldg.pubkey) {
                                                        return resCreateSoldier
                                                    } 
                                                    return bldg
                                                })
                                            })
                                            setPopUpInfo(false)
                                        }
                                    }}
                                >
                                    Move
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>


    )
}