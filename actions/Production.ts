import { useBuildings } from "@/context/Buildings"
import build from "next/dist/build"
import { useEffect } from "react"

export const useProduction = (building: BUILDING, limit: number) => {
    const { buildings, setBuildings } = useBuildings()



    useEffect(() => {
        const addResources = setInterval(() => {

            const resourcesToBuilding = {
                factory: "mineral"
            }

            const findAmountWorkers = building.attributes.find(([attr]) => attr === "villager")
            if (findAmountWorkers) {
                const amountWorkers = Number(findAmountWorkers[1])
                const bldgProduction: BUILDING = {
                    ...building,
                    attributes: building.attributes.map((attr) => {
                        if (attr[0] === resourcesToBuilding[building.type as keyof typeof resourcesToBuilding] && Number(attr[1]) < limit) {
                            return [attr[0], ((amountWorkers / 2) + Number(attr[1])).toString()]
                        }
                        return attr
                    })
                }

                console.log(bldgProduction)

                setBuildings(() => {
                    console.log("setbuilding")
                    return buildings.map((bldg) => {
                        if (bldg.pubkey === bldgProduction.pubkey) {
                            return bldgProduction
                        }
                        return bldg
                    })
                })

                localStorage.setItem("buildings", JSON.stringify(
                    buildings.map((bldg) => {
                        if (bldg.pubkey === bldgProduction.pubkey) {
                            return bldgProduction
                        }
                        return bldg
                    })
                ))
            }
        }, 10000)
        return () => {
            clearInterval(addResources);
        };
    }, [buildings])

}