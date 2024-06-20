import { useEffect, useState } from "react"

export const getResources = (buildingPubKey: string) => {
    const localBuilding = localStorage.getItem("buildings")
    const localUser = localStorage.getItem("user")
    const resourcesToBuilding = {
        factory: "mineral_balance",
        farm: "food_balance"
    }
    if (localBuilding && localUser) {
        const buildings: BUILDING[] = JSON.parse(localBuilding)
        const user: USER = JSON.parse(localUser)

        const findBuilding = buildings.find(bldg => bldg.pubkey === buildingPubKey)

        if (findBuilding) {

            const resource = resourcesToBuilding[findBuilding.type as keyof typeof resourcesToBuilding]

            const amountResourcesObtained = Number(findBuilding.attributes.find((attr) => attr[0] === resource)?.[1])

            console.log(resource)

            const emptyBuilding = {
                ...findBuilding,
                attributes: findBuilding.attributes.map((attr) => {
                    console.log(attr[0] === resource, attr[0], resource)
                    if (attr[0] === resource) {
                        return [attr[0], "0"]
                    }
                    return attr
                })
            }

            localStorage.setItem("buildings", JSON.stringify(
                buildings.map((building) => {
                    if (building.pubkey === buildingPubKey) {
                        return emptyBuilding
                    }
                    return building
                }))
            )


            localStorage.setItem("user", JSON.stringify(
                {
                    ...user,
                    [resource]: Number(user[resource as keyof typeof user]) + amountResourcesObtained
                }
            ))



            return { emptyBuilding, amountResourcesObtained }
        }

    }

}

export const useProduction = (buildingPubKey: string,) => {
    const [building, setBuilding] = useState<BUILDING>()

    useEffect(() => {
        const runProduction = setInterval(() => {
            const localBuildings = localStorage.getItem("buildings")
            if (localBuildings) {
                const buildings: BUILDING[] = JSON.parse(localBuildings)
                const findBuilding = buildings.find(bldg => bldg.pubkey === buildingPubKey)
                const resourcesToBuilding = {
                    factory: {
                        resources: "mineral_balance",
                        limit: 200
                    },
                    farm: {
                        resources: "food_balance",
                        limit: 200
                    }
                }


                if (findBuilding) {
                    const resource = resourcesToBuilding[findBuilding.type as keyof typeof resourcesToBuilding]
                    const findAmountWorkers = findBuilding.attributes.find(([attr]) => attr === "villager")

                    if (findAmountWorkers && resource) {

                        const amountWorkers = Number(findAmountWorkers[1])

                        const produceResource = {
                            ...findBuilding,
                            attributes: findBuilding.attributes.map((attr) => {
                                if (attr[0] === resource.resources && Number(attr[1]) < resource.limit) {
                                    return [attr[0], ((amountWorkers / 2) + Number(attr[1])).toString()]
                                }
                                return attr
                            })
                        }
                        setBuilding(produceResource)

                        localStorage.setItem("buildings", JSON.stringify(
                            buildings.map((bldg) => {
                                if (bldg.pubkey === buildingPubKey) {
                                    return produceResource
                                }
                                return bldg
                            })
                        ))
                    }
                }


            }
        }, 5000)
        return () => clearInterval(runProduction)
    }, [building])
    return building
}