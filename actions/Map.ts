const cell = { pubkey: "", type: "cell" }

export const createMap = (mapSize = 25) => {
    const pubkeyCityOne = Math.random().toString()
    const pubkeyCityTwo = Math.random().toString()
    const city = {
        pubkey: "", // generarlas aleatoriamente por ahora
        name: "",
        img_url: "/city.png",
        authority: "", // the pubkey of the owner of the city
        map: "map1",
        food_balance: 200,
        mineral_balance: 200,
    }

    const cities: CITY[] = [
        {
            ...city,
            pubkey: pubkeyCityOne,
            attributes: [["x", "13"], ["y", "0"]],
            authority: 'jsdj2cnnc-2213njusce'

        },
        {
            ...city,
            attributes: [["x", "13"], ["y", "24"]],
            pubkey: pubkeyCityTwo,
            authority: '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
        }
    ]

    localStorage.setItem('cities', JSON.stringify(cities))

    const cells: CELL[][] = Array.from({ length: mapSize }).map((_, x) => (
        Array.from({ length: mapSize }).map((_, y) => {
            return (
                {
                    authority: '',
                    building: {
                        type: '',
                        pubkey: ''
                    }
                }
            )
        })
    ))

    cities.map(city => {
        const x = Number(city.attributes.find(([attr]) => attr === 'x')?.[1])
        const y = Number(city.attributes.find(([attr]) => attr === 'y')?.[1])
        const neighbors = [
            { x: x - 1, y },
            { x: x + 1, y },
            { x, y: y + 1 },
            { x, y: y - 1 },
            { x: x + 1, y: y + 1 },
            { x: x + 1, y: y - 1 },
            { x: x - 1, y: y + 1 },
            { x: x - 1, y: y - 1 },
        ];
        cells[x][y] = { authority: city.pubkey, building: { pubkey: city.pubkey, type: "city" } };

        neighbors.map(({ x, y }) => {
            if (x >= 0 && x < mapSize && y >= 0 && y < mapSize) {
                const neighborsCell = cells[x][y];
                if (!neighborsCell.authority) {
                    cells[x][y] = {
                        authority: city.pubkey, building: cell
                    }
                }
            }
        })
    })

    const map: MAP = {
        pubkey: "map1", // generarlas aleatoriamente por ahora
        size: mapSize,
        cells
    }

    localStorage.setItem("map",
        JSON.stringify(map)
    )
    return map
}

export const addBuildToMap = (authority: string, pubkey: string, x: number, y: number) => {
    const localMap = localStorage.getItem("map")

    if (localMap) {
        const map: MAP = JSON.parse(localMap)
        const { cells } = map

        const neighbors = [
            { x: x - 1, y },
            { x: x + 1, y },
            { x, y: y + 1 },
            { x, y: y - 1 },
            { x: x + 1, y: y + 1 },
            { x: x + 1, y: y - 1 },
            { x: x - 1, y: y + 1 },
            { x: x - 1, y: y - 1 },
        ];

        cells[x][y] = { authority: authority, building: { pubkey: pubkey, type: "building" } };

        neighbors.map(({ x, y }) => {
            if (x >= 0 && x < map.size && y >= 0 && y < map.size) {
                const neighborsCell = cells[x][y];
                if (!neighborsCell.authority) cells[x][y] = { authority, building: cell }
            }
        })

        localStorage.setItem("map",
            JSON.stringify({
                ...map,
                cells
            })
        )

        return cells
    }
}