import { createVillager } from "@/actions/Villagers"
import { useBuildings } from "@/context/Buildings"


export const ActionCreateVillager = ({ building }: { building: BUILDING }) => {
    const { buildings, setBuildings } = useBuildings()


    return (
        <button
            className="btn"
            onClick={() => {
                const newVillager = createVillager(building.pubkey, building.city)
                if(newVillager) {
                    setBuildings(() => {
                        return buildings.map(bldg => {
                            if (bldg.pubkey === building.pubkey) {
                                return newVillager
                            }
                            return bldg
                        })
                    })
                }
            }}
        >
            Create Villager
        </button>
    )
}