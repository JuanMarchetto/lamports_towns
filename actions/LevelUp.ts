

export const levelUp = (buildingPubkey: string, cityPubkey: string, attr?: string[]) => {
    const localCities = localStorage.getItem("cities")
    const localBuildings = localStorage.getItem("buildings")

    if (localCities && localBuildings) {
        const cities: CITY[] = JSON.parse(localCities)
        const buildings: BUILDING[] = JSON.parse(localBuildings)

        const city = cities.find(ct => ct.pubkey === cityPubkey)
        const building = buildings.find((building) => building.pubkey === buildingPubkey)


        if (city && city.mineral_balance > 0 && building) {

            localStorage.setItem("cities",
                JSON.stringify(cities.map((city) => {

                    if (city.pubkey === cityPubkey) {
                        
                        return {
                            ...city,
                            mineral_balance: Math.floor(city.mineral_balance - 1)
                        }
                    }
                    return city
                }))
            )
            window.dispatchEvent(new Event("changeCity"));
            const changeBuilding: BUILDING = {
                ...building,
                attributes: building?.attributes.map(([attr, value]) => {
                    if (attr === "level") {
                        return (
                            [attr, (Number(value) + 1).toString()]
                        )
                    }
                    if (attr === "power") {
                        return (
                            [attr, (Number(value) + 50).toString()]
                        )
                    }
                    if (attr === "defense") {
                        return (
                            [attr, (Number(value) + 10).toString()]
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
};


