import { levelUp } from "@/actions/LevelUp"
import { createVillager, moveVillagers } from "@/actions/Villagers"
import { Key, useEffect, useState } from "react"
import { ActionLevelUp } from "./actions/levelUp"
import { ActionMoveVillagers } from "./actions/moveVillagers"
import { ActionCreateSoldier } from "./actions/createSoldier"

export const ActionsArmery = ({ building }: { building: BUILDING }) => {

    return (
        <div
            className="flex items-center justify-center gap-4 "
        >
            <ActionLevelUp building={building} />
            <ActionMoveVillagers building={building} />
            <ActionCreateSoldier building={building} />
        </div>

    )

}