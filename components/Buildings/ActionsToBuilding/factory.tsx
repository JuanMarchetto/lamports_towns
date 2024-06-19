import { useEffect } from "react"
import { ActionLevelUp } from "./actions/levelUp"
import { ActionMoveVillagers } from "./actions/moveVillagers"
import { useBuildings } from "@/context/Buildings"
import { useProduction } from "@/actions/Production"

export const ActionsFactory = ({ building }: { building: BUILDING }) => {


    return (
        <div
            className="flex items-center justify-center gap-4 "
        >
            <ActionLevelUp building={building} />
            <ActionMoveVillagers building={building} />
        </div>
    )
}