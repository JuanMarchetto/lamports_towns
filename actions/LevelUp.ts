

export const levelUp = (buildingPubkey: String, attr?: string[]) => {
    const localUser = localStorage.getItem("user")
    const localBuildings = localStorage.getItem("buildings")

    if (localUser && localBuildings) {
        const user: USER = JSON.parse(localUser)
        const buildings: BUILDING[] = JSON.parse(localBuildings)

        if (user.mineral_balance > 0) {
            const changeUser = {
                ...user,
                mineral_balance: Math.floor(user.mineral_balance - 1)
            }
            localStorage.setItem("user",
                JSON.stringify(changeUser)
            )

            const oldBuilding = buildings.find((building) => building.pubkey === buildingPubkey)
            if (oldBuilding) {
                const changeBuilding: BUILDING = {
                    ...oldBuilding,
                    attributes: oldBuilding?.attributes.map(([attr, value]) => {
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

    }
};


