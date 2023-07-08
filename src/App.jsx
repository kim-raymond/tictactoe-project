// import Board from './components/board'
import { useState ,useEffect} from 'react';
import Square from './components/square'
import './style.scss'

const App =() => {

  const [squares, setSquares] = useState(['','','','','','','','','']);
  const [go, setGo] = useState("circle")
  const [winningMessage, setWinningMessage] = useState()

  const message = "It is now " + go + "'s go."


  const checkScore = () => { 
    const winningCombos = [
      [0,1,2], [3,4,5], [6,7,8], [0,3,6],
      [1,4,7], [2,5,8], [0,4,8],[2,4,6]
    ]
     
    winningCombos.forEach(array => {
      let circleWins = array.every(square => squares[square] === 'circle')

      if (circleWins){
        setWinningMessage("Circle Wins!")
        return
      }
    })

    winningCombos.forEach(array => {
      let crossWins = array.every(square => squares[square] === 'cross')

      if (crossWins){
        setWinningMessage("Cross Wins!")
        return
      }
    })
}
  useEffect(() =>{
    checkScore()
  },[squares])

  return (
    <div className='app'>
      <div className='gameboard'>
      {squares.map((square,index)=> 

      <Square 
        key={index} 
        id={index} 
        square={square}
        squares={squares}
        setSquares ={setSquares}
        go={go}
        setGo={setGo}
        winningMessage={winningMessage}
      />)}

      </div>
      <p>{winningMessage||message}</p>
    </div>

  )
}

export default App
