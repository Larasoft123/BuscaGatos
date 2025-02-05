import { useContext, useState } from "react"
import { LooseContext } from "../Context/LooseContext"

export function Cell({ text, index }: { text: string, index: number }) {

    const [visible, setVisible] = useState(false)
    const {LooseLife} = useContext(LooseContext)

    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (visible) return
        const text = e.currentTarget.dataset.text
        
        
        console.log(text)
        
        if (text === "†") {
            LooseLife()
        }
        
        setVisible(true)
        
    }


    return (
        <button key={index} data-text={text} onClick={handleClick} aria-disabled={visible} disabled={visible} className={visible ? "w-10 flex justify-center items-center h-10 border-2 border-black" : "w-10 cursor-pointer flex justify-center items-center h-10 border-2 border-black"}>
            {visible && text}
        </button>
    )
}
