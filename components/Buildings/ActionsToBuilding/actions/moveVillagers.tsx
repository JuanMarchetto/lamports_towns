import { Key, useState } from "react"
import { moveVillagers } from "@/actions/Villagers"
import { useBuildings } from "@/context/Buildings"


export const ActionMoveVillagers = ({ building }: { building: BUILDING }) => {
    const { buildings, setBuildings } = useBuildings()
    const [popUpInfo, setPopUpInfo] = useState<boolean>(false)
    const [toBuildingPubkey, setToBuildingPubKey] = useState("")
    const [amountVillagerMove, setAmountVillagerMove] = useState<number>(0)
    
    return (
        <>
            <button
                className="btn"
                onClick={() => setPopUpInfo(true)}
            >
                Move Villager
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
                                className="flex justify-between w-full"
                            >
                                <label
                                    htmlFor="amountVillager"
                                    className="text-sm"
                                >
                                    Building to Move
                                </label>

                                <select
                                    className="w-1/2 bg-slate-400"
                                    defaultValue="Select Building"
                                    onChange={(e) => setToBuildingPubKey(e.target.value)}
                                >
                                    <option
                                        disabled
                                    >
                                        Select Building
                                    </option>
                                    {
                                        buildings.map((bldg) => {
                                            if (bldg.pubkey !== building.pubkey) {
                                                return (
                                                    <option
                                                        key={bldg.pubkey as Key}
                                                        value={bldg.pubkey}
                                                    >
                                                        {`${bldg.type} - Lvl ${bldg?.attributes?.find(([key]) => key === "level")?.[1]}`}
                                                    </option>
                                                )
                                            }
                                        })
                                    }
                                </select>
                            </div>
                            <div
                                className="flex justify-between"
                            >
                                <label
                                    className="text-sm"
                                    htmlFor="amountVillager"
                                >
                                    Villagers to Move
                                </label>
                                <input
                                    name="amountVillager"
                                    type="number"
                                    className="w-1/2 text-end"
                                    max={building?.attributes?.find(([attr, value]) => attr === "villager")?.[1]}
                                    value={amountVillagerMove.toString()}
                                    onChange={(e) => {
                                        const amountVillagers = Number(building?.attributes?.find(([attr, value]) => attr === "villager")?.[1])
                                        if (amountVillagers > Number(e.target.value)) {
                                            setAmountVillagerMove(Number(e.target.value))
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
                                    disabled={!toBuildingPubkey || !amountVillagerMove}
                                    className={` bg-[#37d137] p-1 rounded-sm ${(!toBuildingPubkey || !amountVillagerMove) && "bg-gray-300"}`}
                                    onClick={() => {
                                        const resMoveVillagers = moveVillagers(building.pubkey, toBuildingPubkey, amountVillagerMove)
                                        if (resMoveVillagers) {
                                            const { fromBuilding, toBuilding } = resMoveVillagers
                                            setBuildings((prevState) => {
                                                return prevState.map((bldg) => {
                                                    if (fromBuilding.pubkey === bldg.pubkey) {
                                                        return fromBuilding
                                                    } else if (toBuilding.pubkey === bldg.pubkey) {
                                                        return toBuilding
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