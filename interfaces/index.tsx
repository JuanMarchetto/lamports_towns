interface CITY {
    pubkey: string, // generarlas aleatoriamente por ahora
    name: string,
    img_url: string,
    authority: string, // the pubkey of the owner of the city
}

interface USER {
    pubkey: string, // generarlas aleatoriamente por ahora
    sol_balance: number,
    food_balance: number,
    mineral_balance: number,
    usdc_balance: number,
    bonk_balance: number,
}

interface ASSET {
    pubkey: string, // generarlas aleatoriamente por ahora
    name: string,
    description: string,
    img_url: string,
    attributes: string[][], // ejemplo [[“poder”, “200”],[“defensa”, “20”],[“color”, “rojo”],]
    authority: string  // the pubkey of the owner of the asset
}

interface BUILDING {
    pubkey: string, // generarlas aleatoriamente por ahora
    type: string,
    description: string,
    img_url: string,
    attributes: string[][], // ejemplo [[“poder”, “200”],[“defensa”, “20”],[“color”, “rojo”],]
    city: string, // the pubkey of the city assigned (NULL if unassigned)
    authority: string, // the pubkey of the owner of the building
}
