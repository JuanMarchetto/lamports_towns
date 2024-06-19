"use client"

import { useUser } from "@/context/User"

export const Header = () => {
    const { user } = useUser()

    return (
        <div
            className="h-16 bg-amber-800"
        >
            <div className="w-full h-full flex items-center gap-4" >
                <div className="flex flex-col items-center">
                    <span>Mineral</span>
                    <span>{user?.mineral_balance}</span>
                </div>
                <div className="flex flex-col items-center">
                    <span>Food</span>
                    <span>{user?.food_balance}</span>
                </div>
                <div className="flex flex-col items-center">
                    <span>Sol</span>
                    <span>{user?.sol_balance}</span>
                </div>
                <div className="flex flex-col items-center">
                    <span>Bonk</span>
                    <span>{user?.bonk_balance}</span>
                </div>
                <div className="flex flex-col items-center">
                    <span>USDC</span>
                    <span>{user?.usdc_balance}</span>
                </div>

            </div>

        </div>
    )
}