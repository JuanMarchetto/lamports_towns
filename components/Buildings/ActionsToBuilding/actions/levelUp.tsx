import { levelUp } from "@/actions/LevelUp"
import { useBuildings } from "@/context/Buildings"
import { useUser } from "@/context/User"


export const ActionLevelUp = ({ building }: { building: BUILDING }) => {
    const { setBuildings } = useBuildings()
    const {user, setUser} = useUser()


    return (
        <button
            className="btn"
            onClick={() => {
                if(user) { 
                    const newLevel = levelUp(building.pubkey)
                    setBuildings((prevState: BUILDING[]) => {
                        return prevState.map(bldg => {
                            if (bldg.pubkey === building.pubkey) {
                                newLevel
                            }
                            return bldg
                        })
                    })
                    setUser({
                        ...user,
                        food_balance: user.food_balance - 1
                    })
                }
            }}
        >
            Level Up
        </button>
    )
}