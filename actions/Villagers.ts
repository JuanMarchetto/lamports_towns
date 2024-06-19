

export const createVillager = (buildingPubkey: String) => {
    const localUser = localStorage.getItem("user")
    const localBuildings = localStorage.getItem("buildings")

    if (localUser && localBuildings) {
        const user: USER = JSON.parse(localUser)
        const buildings: BUILDING[] = JSON.parse(localBuildings)

        if (user.food_balance > 0) {
            const changeUser = {
                ...user,
                food_balance: Math.floor(user.food_balance - 1)
            }
            localStorage.setItem("user",
                JSON.stringify(changeUser)
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

            const fromBuilding = {
                ...findFromBuilding,
                attributes: findFromBuilding?.attributes.map(([attr, value]) => {
                    if (attr === "villager") {
                        return ["villager", (Number(value) - amountVillager).toString()]
                    }
                    return [attr, value]
                })

            }

            const toBuilding = {
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

