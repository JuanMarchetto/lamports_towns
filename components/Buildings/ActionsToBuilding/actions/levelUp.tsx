import { levelUp } from "@/actions/LevelUp"
import { useBuildings } from "@/context/Buildings"


export const ActionLevelUp = ({ building }: { building: BUILDING }) => {
    const { setBuildings } = useBuildings()


    return (
        <button
            className="btn"
            onClick={() => {
                const newLevel = levelUp(building.pubkey)
                setBuildings((prevState: BUILDING[]) => {
                    return prevState.map(bldg => {
                        if (bldg.pubkey === building.pubkey) {
                            newLevel
                        }
                        return bldg
                    })
                })

            }}
        >
            Level Up
        </button>
    )
}