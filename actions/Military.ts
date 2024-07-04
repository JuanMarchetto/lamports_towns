export const createSoldier = (cityPubkey: string, buildingPubkey: string, amountSoldiersCreate: number) => {
    const localCities = localStorage.getItem("cities")
    const localBuildings = localStorage.getItem("buildings")

    if (localCities && localBuildings) {
        const cities: CITY[] = JSON.parse(localCities)
        const buildings: BUILDING[] = JSON.parse(localBuildings)

        const city = cities.find(ct => ct.pubkey === cityPubkey)

        if (city && city.food_balance > 0) {
            localStorage.setItem("cities",
                JSON.stringify(cities.map(city => {
                    if (city.pubkey === cityPubkey) {
                        return {
                            ...city,
                            mineral_balance: Math.floor(city.mineral_balance - 5)
                        }
                    }
                    return city
                }))
            )

            const oldBuilding = buildings.find((building) => building.pubkey === buildingPubkey)
            if (oldBuilding) {
                const changeBuilding: BUILDING = {
                    ...oldBuilding,
                    attributes: oldBuilding?.attributes.map(([attr, value]) => {
                        if (attr === "villager") {
                            return [attr, (Number(value) - amountSoldiersCreate).toString()]
                        } else if (attr === "soldier") {
                            return [attr, (Number(value) + amountSoldiersCreate).toString()]

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