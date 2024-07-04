interface typeBuildings {
    type: string, 
    img_url: string,
    attributes: Array<[string, string]>
}

export const typesBuildings: typeBuildings[] = [
    {
        type: "house",
        img_url: `/house.png`,
        attributes: [["villager", "1"], ["level", "1"], ["power", "200"], ["defense", "20"], ["cost", "25"]],

    },
    {
        type: "factory",
        img_url: `/factory.png`,
        attributes: [["level", "1"], ["power", "200"], ["defense", "20"], ["mineral_balance", "0"], ["cost", "75"]],

    },
    {
        type: "farm",
        img_url: `/farm.png`,
        attributes: [["level", "1"], ["power", "200"], ["defense", "20"], ["food_balance", "0"], ["cost", "75"]],
    },
    {
        type: "armery",
        img_url: "/armery.png",
        attributes: [["level", "1"], ["power", "200"], ["defense", "20"], ["soldier", "0"], ["cost", "100"]],
    }
]