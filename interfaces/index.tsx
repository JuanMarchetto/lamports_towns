interface CITY {
    pubkey: string // generarlas aleatoriamente por ahora
    name: string
    img_url: string
    authority: string // the pubkey of the owner of the city
    attributes: Array<[string, string]>
    map: string
    food_balance: number
    mineral_balance: number
}

interface USER {
    pubkey: string, // generarlas aleatoriamente por ahora
    sol_balance: number
    usdc_balance: number
    bonk_balance: number
}

interface ASSET {
    pubkey: string // generarlas aleatoriamente por ahora
    name: string
    description: string
    img_url: string
    attributes: Array<[string, string]> // ejemplo [[“poder”, “200”],[“defensa”, “20”],[“color”, “rojo”],]
    authority: string  // the pubkey of the owner of the asset
}

interface BUILDING {
    pubkey: string // generarlas aleatoriamente por ahora
    type: string
    description: string
    img_url: string
    city: string // the pubkey of the city assigned (NULL if unassigned)
    authority: string, // the pubkey of the owner of the building,
    attributes: Array<[string, string]> // ejemplo [[“poder”, “200”],[“defensa”, “20”],[“color”, “rojo”],]
    // position: [string, string] // example: [15, 70] reference: [x, y], DENTRO DE ATRIBUTOS?
    // area: number // DENTRO DE ATRIBUTOS?
}

interface MAP {
    pubkey: string, // generarlas aleatoriamente por ahora
    size: number // example: [15, 70] reference: [x, y] size total
    cells: CELL[][]
    // players: string[] // pubkeys city player
}
interface CELL {
    // map: string //pubkey map
    authority: string,
    building: {
        type: string
        pubkey: string
    }
}
interface SPECIALSPACE {
    position: [string, string] // example: [15, 70] reference: [x, y],
    buildingType: string
    attributes: Array<[string, string]> // level totalResources 
}

interface VILLAGER {
    cost: number
    attributes: Array<[string, string]>
    // deberian ser atributos? ->
    // defense: number
    // power: number
    // capacity: number
    // velocity: number
    // employ: string
    // life: number
    // militaryUnit: string  // 
}