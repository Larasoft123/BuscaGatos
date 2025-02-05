import { createContext, useState } from "react";



export const LooseContext = createContext({
    losee: false,
    lifes: 3,
    resetAll: () => {},
    LooseLife: () => {},
});

export const LooseContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [losee, setLosee] = useState(false)
    const [lifes, setLifes] = useState(3)


    const resetAll = () => {
        setLosee(false)
        setLifes(3)
    }

    const LooseLife = () => {
        if (lifes <= 1) {
            setLosee(true)
        }
        setLifes(prev => prev - 1)
    }

    return (
        <LooseContext.Provider value={{ losee, LooseLife, lifes,resetAll }}>
            {children}
        </LooseContext.Provider>
    )
}

