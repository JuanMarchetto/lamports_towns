import { levelUp } from "@/actions/LevelUp"
import { useBuildings } from "@/context/Buildings"
import { useEffect, useState } from "react"


export const ActionsAttack = ({ building }: { building: BUILDING }) => {
    const [popUp, setPopUp] = useState(false)
    const [configAttack, setConfigAttack] = useState({
        buildingPubKey: "",
        amountUnits: 0
    })
    const { buildings, setBuildings } = useBuildings()

    return (
        <>
            {
                !popUp ?
                    <button
                        className="btn"
                        onClick={() => setPopUp(true)}
                    >
                        Attack
                    </button>
                    :
                    <div
                        className="fixed z-30 w-full h-full top-0 left-0 backdrop-blur flex justify-center pt-10"
                    >
                        <div
                            className="relative w-10/12 h-min p-4"
                        >
                            <div
                                className="flex flex-col items-center shadow-md rounded-sm gap-2 bg-amber-800 text-black w-full p-4 "
                            >
                                <div
                                    className="flex flex-col gap-4"
                                >
                                    <label htmlFor="buildingToAttack">Select building to attack.</label>
                                    <select name="buildingToAttack"
                                        onChange={(e) => {
                                            setConfigAttack({
                                                ...configAttack,
                                                buildingPubKey: e.target.value
                                            })
                                        }}
                                    >
                                        <option disabled value={0}>Select Value</option>
                                        {
                                            buildings?.map(bldg => {
                                                if (bldg.city !== building.city) {
                                                    const positionX = bldg.attributes.find(([attr]) => attr === 'x')
                                                    const positionY = bldg.attributes.find(([attr]) => attr === 'y')
                                                    return (
                                                        <option
                                                            key={bldg.pubkey}
                                                            value={bldg.pubkey}
                                                        >
                                                            {`${bldg.type} X:${positionX?.[1]}-Y:${positionY?.[1]}`}
                                                        </option>
                                                    )
                                                }
                                            })
                                        }
                                    </select>
                                </div>
                                <div
                                    className="flex flex-col gap-4"
                                >
                                    <label htmlFor="amountUnits">Input amount units</label>
                                    <input name="amountUnits" type="number" value={configAttack.amountUnits}
                                        onChange={(e) => {
                                            setConfigAttack({
                                                ...configAttack,
                                                amountUnits: Number(e.target.value)
                                            })
                                        }}
                                    />
                                </div>
                                <div
                                    className="flex  gap-4"
                                >
                                    <button
                                        className="btn bg-red-600"
                                        onClick={() => {
                                            setPopUp(false)
                                        }}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        className={` bg-[#37d137] p-1 rounded-sm `}
                                        onClick={() => {

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