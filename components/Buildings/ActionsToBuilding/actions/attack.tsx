import { levelUp } from "@/actions/LevelUp"
import { useBuildings } from "@/context/Buildings"


export const ActionsAttack = ({ building }: { building: BUILDING }) => {
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