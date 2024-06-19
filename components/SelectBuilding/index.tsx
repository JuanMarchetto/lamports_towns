import { typesBuildings } from "@/constants"
import { useBuildings } from "@/context/Buildings"
import { useCity } from "@/context/City"
import { useUser } from "@/context/User"
import Image from "next/image"
import { Key, useState } from "react"

export const SelectBuilding = () => {
    const { user, setUser } = useUser()
    const { city } = useCity()
    const [confirmation, setConfirmation] = useState<boolean>(false)
    const [selectBuilding, setSelectBuilding] = useState<string>("")
    const {createBuilding} = useBuildings()

    return (
        <div
            className="relative w-full flex flex-wrap gap-4"
        >
            {
                typesBuildings.map((typeBuilding) => {
                    return (
                        <div
                            key={typeBuilding.type as Key}
                            className="h-min flex flex-col items-center bg-stone-500 rounded-md"
                        >
                            <span>{typeBuilding.type}</span>
                            <Image
                                alt=""
                                src={typeBuilding.img_url}
                                width={100}
                                height={100}
                            />
                            <button
                                onClick={() => {
                                    setConfirmation(true)
                                    setSelectBuilding(typeBuilding.type)
                                }}
                                className=" px-4 py-1 w-full"
                            >
                                Build
                            </button>
                        </div>
                    )
                })
            }
            {
                confirmation &&
                <div
                    className="fixed w-full h-full top-0 z-30 left-0 backdrop-blur flex justify-center pt-40"
                >
                    <div
                        className="flex items-center justify-center gap-4 w-3/4 h-1/6 bg-stone-500 rounded-md "
                    >
                        <button
                            className=" bg-green-500 rounded-md p-2"
                            onClick={()=>{
                                createBuilding(user, city, selectBuilding)
                                setConfirmation(false)
                                const getUser = localStorage.getItem("user")
                                getUser && setUser(JSON.parse(getUser))
                            }}
                        >
                            Confirm
                        </button>
                        <button
                            onClick={() => setConfirmation(false)}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            }
        </div>
    )
}