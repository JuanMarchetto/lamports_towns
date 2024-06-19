"use client"

import { useState } from "react"
import { PopUp } from "../PopUp"
import { SelectBuilding } from "../SelectBuilding"

export const Footer = () => {
    const [popUp, setPopup] = useState<{type: String, status: boolean}>({type: "", status: false})

    const options = {
        selectBuilding: <SelectBuilding />
    }

    return (
        <>
            <div
                className="w-full h-16 px-2 bg-amber-950"
            >
                <div
                    className="w-full h-full flex gap-4"
                >
                    <button
                        className=" h-full px-4"
                        onClick={()=>setPopup({
                            type: "selectBuilding",
                            status: true
                        })}
                    >
                        Buildings
                    </button>
                </div>
            </div>
            {
                popUp.status &&

                <PopUp
                    closePopUp={()=>setPopup({
                        type: "",
                        status: false
                    })}
                >
                    {options[popUp.type as keyof typeof options]}
                </PopUp>
            }
        </>
    )
}