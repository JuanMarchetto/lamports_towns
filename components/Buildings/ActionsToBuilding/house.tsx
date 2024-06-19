import { levelUp } from "@/actions/LevelUp"
import { createVillager, moveVillagers } from "@/actions/Villagers"
import { Key, useEffect, useState } from "react"
import { ActionLevelUp } from "./actions/levelUp"
import { ActionCreateVillager } from "./actions/createVillager"
import { ActionMoveVillagers } from "./actions/moveVillagers"

export const ActionsHouse = ({ building }: { building: BUILDING }) => {
    return (
        <div
            className="flex items-center justify-center gap-4 "
        >
            <ActionLevelUp building={building} />
            <ActionCreateVillager building={building} />
            <ActionMoveVillagers building={building} />

        </div>

    )

}
