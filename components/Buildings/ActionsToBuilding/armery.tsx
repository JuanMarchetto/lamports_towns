import { ActionLevelUp } from "./actions/levelUp"
import { ActionMoveVillagers } from "./actions/moveVillagers"
import { ActionCreateSoldier } from "./actions/createSoldier"
import { ActionsAttack } from "./actions/attack"

export const ActionsArmery = ({ building }: { building: BUILDING }) => {

    return (
        <div
            className="flex items-center justify-center gap-4 "
        >
            <ActionLevelUp building={building} />
            <ActionMoveVillagers building={building} />
            <ActionCreateSoldier building={building} />
            <ActionsAttack building={building} />
        </div>

    )

}