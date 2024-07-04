import { Building } from "@/components/Buildings"
import { City } from "@/components/City"
import { PopUp } from "@/components/PopUp"
import { SelectBuilding } from "@/components/SelectBuilding"
import { useBuildings } from "@/context/Buildings"
import { useCities } from "@/context/City"
import { useUser } from "@/context/User"
import { ReactNode, useState } from "react"


export const Cell = ({ x, y, authority, cell }: { x: number, y: number, authority: string, cell: CELL }) => {
    const [popUp, setPopup] = useState<{ type: String, status: boolean }>({ type: "", status: false })
    const { cities } = useCities()
    const { buildings } = useBuildings()

    const renderCell = () => {
        if (cell.building.type === "city") {
            const city = cities.find(city => city.pubkey === cell.building.pubkey)
            if (city) {
                return <City city={city} />
            }
        } else if (cell.building.type === "building") {
            const building = buildings.find(bldg => bldg.pubkey === cell.building.pubkey)
            if (building) {
                return <Building building={building} />
            }
        } else {
            return <div
                className={`h-20 w-20 bg-cell  bg-contain text-sm border border-black text-black text-center `}
                style={{
                    gridColumn: x + 1,
                    gridRow: y + 1
                }}
            >
                {
                    authority &&
                    <div
                        className={`bg-green-500/50 h-full w-full`}
                        onClick={() => setPopup({
                            type: "selectBuilding",
                            status: true
                        })}
                    />
                }
            </div>
        }
    }


    return (
        <>
            {renderCell()}
            {
                popUp.status &&

                <PopUp
                    closePopUp={() => setPopup({
                        type: "",
                        status: false
                    })}
                >
                    <SelectBuilding city={authority} x={x} y={y} />
                </PopUp>
            }

        </>
    )
}