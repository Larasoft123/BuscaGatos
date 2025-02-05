import { useContext } from "react"
import { LooseContext } from "../Context/LooseContext"

export function Loose() {
    const {resetAll} = useContext(LooseContext)
    return (
        <div className="flex justify-center flex-col items-center">
            <h1 className='text-6xl mb-7 text-red-700 text-center'>¡Has perdido!</h1>
            <button  onClick={resetAll} className="cursor-pointer transition-all hover:scale-125 hover:saturate-150 py-2 px-4 bg-red-700 text-white rounded-lg">Reiniciar</button>

        </div>
    )
}