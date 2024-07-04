"use client"

import { useCities } from "@/context/City"
import { useUser } from "@/context/User"



export const Header = () => {
    const {user} = useUser()
    const { cities } = useCities()

    return (
        <div
            className="h-16 w-full bg-amber-800 flex justify-between"
        >
            {
                cities.map((city) => {
                    return (
                        <div key={city.pubkey} className="w-full h-full flex items-center justify-center gap-4" >
                            <div className="flex flex-col items-center">
                                <span>Mineral</span>
                                <span>{city?.mineral_balance}</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <span>Food</span>
                                <span>{city?.food_balance}</span>
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
                    )
                })
            }

        </div>
    )
}