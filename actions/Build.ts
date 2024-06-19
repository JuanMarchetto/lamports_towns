import { typesBuildings } from "@/constants";


export const build = (clientPubkey: String, cityPubkey: String, type: String) => {
    const localUser = localStorage.getItem("user");
    const localBuildings = (localStorage.getItem("buildings"));

    if (localBuildings && localUser) {
        const user = JSON.parse(localUser)
        const buildings = JSON.parse(localBuildings);

        if (user.mineral_balance > 0) {
            const changeUser = {
                ...user,
                mineral_balance: Math.floor(user.mineral_balance - 1)
            }
            localStorage.setItem("user",
                JSON.stringify(changeUser)
            )


            const newBuilding: BUILDING = {
                pubkey: Math.random().toString(), // generarlas aleatoriamente por ahora
                type: type,
                description: "description",
                img_url: typesBuildings.find(typesBuilding => type === typesBuilding.type)?.img_url || "",
                attributes: typesBuildings.find(typesBuilding => type === typesBuilding.type)?.attributes || [] as string[][],
                city: cityPubkey, // the pubkey of the city assigned (NULL if unassigned)
                authority: clientPubkey, // the pubkey of the owner of the building
            }

            localStorage.setItem("buildings",
                JSON.stringify([
                    ...buildings,
                    newBuilding
                ])
            );
            return newBuilding
        }
    }
};
