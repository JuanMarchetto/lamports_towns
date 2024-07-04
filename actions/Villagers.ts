

export const createVillager = (buildingPubkey: string, cityPubkey: string) => {
    const localCities = localStorage.getItem("cities")
    const localBuildings = localStorage.getItem("buildings")

    if (localCities && localBuildings) {
        const cities: CITY[] = JSON.parse(localCities)
        const buildings: BUILDING[] = JSON.parse(localBuildings)

        const city = cities.find(ct => ct.pubkey === cityPubkey)

        if (city && city.food_balance > 0) {
            const changeCity = {
                ...city,
                food_balance: Math.floor(city.food_balance - 1)
            }
            localStorage.setItem("user",
                JSON.stringify([
                    ...cities,
                    changeCity
                ])
            )

            const findBuilding = buildings.find((building) => building.pubkey === buildingPubkey)
            if (findBuilding) {
                const changeBuilding: BUILDING = {
                    ...findBuilding,
                    attributes: findBuilding?.attributes.map(([attr, value]) => {
                        if (attr === "villager") {
                            return (
                                [attr, (Number(value) + 1).toString()]
                            )
                        }
                        return ([attr, value])
                    })
                }
                localStorage.setItem("buildings",
                    JSON.stringify(buildings.map((building) => {
                        if (building.pubkey === changeBuilding.pubkey) {
                            return changeBuilding
                        }
                        return building
                    }))
                )

                return changeBuilding
            }
        }

    }
};

export const moveVillagers = (fromBuildingPubkey: String, toBuildingPubkey: String, amountVillager: number) => {
    const localUser = localStorage.getItem("user")
    const localBuildings = localStorage.getItem("buildings")

    if (localUser && localBuildings) {
        const user: USER = JSON.parse(localUser)
        const buildings: BUILDING[] = JSON.parse(localBuildings)

        const findFromBuilding = buildings.find(building => building.pubkey === fromBuildingPubkey)
        const findToBuilding = buildings.find(building => building.pubkey === toBuildingPubkey)

        if (findFromBuilding && findToBuilding) {

            const fromBuilding: BUILDING = {
                ...findFromBuilding,
                attributes: findFromBuilding?.attributes.map(([attr, value]) => {
                    if (attr === "villager") {
                        return ["villager", (Number(value) - amountVillager).toString()]
                    }
                    return [attr, value]
                })

            }

            const toBuilding: BUILDING = {
                ...findToBuilding,
                attributes: (!findToBuilding?.attributes.find(([attr])=> attr === "villager") ?
                    [
                        ...findToBuilding.attributes,
                        ["villager", amountVillager.toString()]
                    ]
                    :
                    findToBuilding?.attributes.map(([attr, value]) => {
                        if (attr === "villager") {
                            return ["villager", (Number(value) + amountVillager).toString()]
                        }
                        return [attr, value]
                    })
                )
            }

            localStorage.setItem("buildings", JSON.stringify(
                buildings.map((building) => {
                    if (building.pubkey === toBuildingPubkey) {
                        return toBuilding
                    } else if (building.pubkey === fromBuildingPubkey) {
                        return fromBuilding
                    }
                    return building
                })
            ))


            return { fromBuilding, toBuilding }
        }
    }
}

