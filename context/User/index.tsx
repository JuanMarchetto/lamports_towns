"use client"

import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from "react"
import { useBuildings } from "../Buildings"

interface UserContextI {
    user: USER | undefined,
    setUser: Dispatch<SetStateAction<USER | undefined>>
}

const UserContext = createContext<UserContextI>({
    user: {} as USER,
    setUser: () => { }
})

const UserProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<USER | undefined>()
    const { buildings } = useBuildings()

    useEffect(() => {
        const user = localStorage.getItem("user") // 
        if (!user) {
            localStorage.setItem("user", JSON.stringify({
                pubkey: "1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed", // generarlas aleatoriamente por ahora
                sol_balance: 0,
                usdc_balance: 0,
                bonk_balance: 0,
            }))
            setUser({
                pubkey: "1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed", // generarlas aleatoriamente por ahora
                sol_balance: 0,
                usdc_balance: 0,
                bonk_balance: 0,
            })
        } else {
            setUser(JSON.parse(user))

        }
    }, [])

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

const useUser = () => useContext(UserContext)

export { useUser, UserProvider }