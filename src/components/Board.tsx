import { Cell } from "./Cell"

export function Board({ tablero }: { tablero: string[][] }) {

  

    return (
        <>
        <div id="board">
            {tablero.map((fila, index) => (
                <div key={index} className="flex items-center justify-center">
                    {fila.map((casilla, index) => (
                       <Cell key={index} text={casilla} index={index} />
                    ))}
                </div>
            ))}
        </div>

        </>
    )
}