import { levelUp } from "@/actions/LevelUp"
import { useBuildings } from "@/context/Buildings"
import { useCities } from "@/context/City"
import { useUser } from "@/context/User"


export const ActionLevelUp = ({ building }: { building: BUILDING }) => {
    const { setBuildings } = useBuildings()



    return (
        <button
            className="btn"
            onClick={() => {
                const newLevel = levelUp(building.pubkey, building.city)
                if(newLevel){
                    setBuildings((prevState: BUILDING[]) => {
                        return prevState.map(bldg => {
                            if (bldg.pubkey === building.pubkey) {
                                return newLevel
                            }
                            return bldg
                        })
                    })
                }

            }}
        >
            Level Up
        </button>
    )
}