import { typesBuildings } from "@/constants";

export const build = (cityPubkey: string, type: string, x: string, y: string) => {
    const localCities = localStorage.getItem("cities");
    const localBuildings = (localStorage.getItem("buildings"));
    if (localCities) {

        const cities: CITY[] = JSON.parse(localCities)

        const findCity = cities.find(city => city.pubkey === cityPubkey)
        const findPropsBuilding = typesBuildings.find(typesBuilding => type === typesBuilding.type)
        if (findCity && findCity?.mineral_balance > 0 && findPropsBuilding) {
            localStorage.setItem("cities",
                JSON.stringify(cities.map(city => {
                    const cost = Number(findPropsBuilding?.attributes?.find(([attr, value])=> attr === "cost")?.[1])
                    if (city.pubkey === cityPubkey) {
                        return {
                            ...findCity,
                            mineral_balance: Math.floor(city.mineral_balance - cost)
                        }
                    }
                    return city
                }))
            )
            window.dispatchEvent(new Event("changeCity"));
            const attributes: Array<[string, string]> = [
                ...findPropsBuilding.attributes,
                ["x", x],
                ["y", y]
            ]

            const newBuilding: BUILDING = {
                pubkey: Math.random().toString(), // generarlas aleatoriamente por ahora
                type: type,
                description: "description",
                img_url: findPropsBuilding.img_url,
                attributes: attributes,
                city: cityPubkey, // the pubkey of the city assigned (NULL if unassigned)
                authority: "clientPubkey", // the pubkey of the owner of the building
            }
            if (localBuildings) {
                const buildings = JSON.parse(localBuildings);
                localStorage.setItem("buildings",
                    JSON.stringify([
                        ...buildings,
                        newBuilding
                    ])
                );
            } else {
                localStorage.setItem("buildings",
                    JSON.stringify([
                        newBuilding
                    ])
                );
            }
            return newBuilding

        }
    }
};
