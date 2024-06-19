export const createSoldier = (buildingPubkey: String, amountSoldiersCreate: number) => {
    const localUser = localStorage.getItem("user")
    const localBuildings = localStorage.getItem("buildings")

    if (localUser && localBuildings) {
        const user: USER = JSON.parse(localUser)
        const buildings: BUILDING[] = JSON.parse(localBuildings)

        if (user.food_balance > 0) {
            const changeUser = {
                ...user,
                mineral_balance: Math.floor(user.mineral_balance - amountSoldiersCreate * 10)
            }
            localStorage.setItem("user",
                JSON.stringify(changeUser)
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