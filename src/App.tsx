import { useEffect, useState } from 'react'
import { Board } from './components/Board'
import { Loose } from './components/loose'
import { LooseContext } from './Context/LooseContext'
import { useContext } from 'react'

// buscaminas


// M =  mina
// "O" = punto


function App() {
  const [board, setBoard] = useState<string[][]>([
    ["🐱", "†", "🐱", "🐱", "🐱", "🐱", "†", "🐱", "🐱"],
    ["🐱", "🐱", "†", "🐱", "†", "🐱", "🐱", "🐱", "🐱"],
    ["🐱", "🐱", "†", "🐱", "†", "🐱", "†", "🐱", "🐱"],
    ["🐱", "†", "†", "🐱", "†", "🐱", "†", "🐱", "🐱"],
    ["🐱", "🐱", "🐱", "†", "🐱", "†", "🐱", "†", "🐱"],
    ["†", "🐱", "†", "†", "†", "🐱", "🐱", "🐱", "🐱"],
    ["🐱", "🐱", "🐱", "†", "🐱", "🐱", "🐱", "🐱", "†"],
    ["🐱", "†", "🐱", "🐱", "†", "🐱", "†", "🐱", "🐱"],
  ])


  const sortAleatorieBoard = () => {
    const aleatorieBoard = board.map((fila:any) => fila.sort(() => Math.random() - 0.5))
    setBoard(aleatorieBoard)
  }

  const {losee,lifes} = useContext(LooseContext)

 


  useEffect(() => {
    sortAleatorieBoard()
  }, [])




  return (
    <div className="App flex-col w-full h-screen p-2 flex justify-center items-center m-0">
      {losee ? <Loose />
        : <>
          <h1 className='text-3xl mb-5 text-wrap  text-center'>Buscaminas, Evita las minas y encuentra todos los 🐱</h1>
          <span className={`text-xl mb-5 ${lifes <= 1 ? "text-red-700" : "text-green-700"}`}>Vidas: {lifes}</span>
          <Board tablero={board} />
        </>

      }



    </div>
  )
}

export default App
