import { Dispatch, MouseEventHandler, ReactNode} from "react"


export const PopUp = ({children, closePopUp}: {children: ReactNode, closePopUp: MouseEventHandler<HTMLButtonElement>}) => { 
    return(
        <div
            className="fixed z-10 w-screen h-full top-0 left-0 backdrop-blur flex justify-center"
        >
            <div
                className="relative w-10/12 h-4/6 min-h-min rounded-md bg-amber-700 p-4"
            >
                <button className="absolute right-4 top-2 z-20" onClick={closePopUp}>x</button>
                {children}
            </div>
        </div>
    )
}