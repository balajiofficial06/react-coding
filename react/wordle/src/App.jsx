import React, { useEffect, useState } from 'react'
import axios from "axios"
import './App.css'



function App() {
  const [word, setWord] = useState('')
  const [guess, setGuess] = useState(new Array(5).fill("", 0, 5))
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isGameOver, setIsGameOver] = useState(false)

  useEffect(() => {
    console.log("useeffect")
    axios.get('https://random-word-api.herokuapp.com/word?length=5').then(res => setWord(res.data[0].toUpperCase())).catch(err => console.log(err))
  }, [])

  const keydownHandler = (e) => {

    if (isGameOver) return

    console.log(currentIndex)

    if (e.key === 'Enter' && guess[currentIndex].length === 5) {
      if (word.toUpperCase() === guess[currentIndex]) {
        setIsGameOver(true)
      }

      if (currentIndex >= 4) {
        setIsGameOver(true)
      }
      setCurrentIndex(prev => prev + 1)
      return
    }

    if (e.key === "Backspace") {
      setGuess(prevArr => {
        return prevArr.map((val, ind) => {
          if (ind === currentIndex) return val.slice(0, val.length - 1)
          return val
        })
      })
      return
    }

    if (guess[currentIndex].length === 5) {
      return
    }

    if (e.keyCode < 59 || e.keyCode > 91) {
      return
    }

    setGuess(prevArr => {
      return prevArr.map((val, ind) => {
        if (ind === currentIndex) return val + e.key.toUpperCase()
        return val
      })
    })

    console.log(guess[currentIndex])


  }

  useEffect(() => {
    console.log(word)


    window.addEventListener('keydown', keydownHandler)

    return () => {
      window.removeEventListener("keydown", keydownHandler)
    }
  }, [guess, currentIndex, isGameOver])
  return (
    <div className="app">

      <div className="boxcontainer">
        {guess.map((val, ind) => {
          return <Line value={val} key={ind} activeIndex={currentIndex} index={ind} word={word} />
        })}

      </div>

    </div>
  )
}


function Line({ value, activeIndex, index, word }) {
  const boxes = []
  for (let i = 0; i < 5; i++) {
    let classSting = "box"
    if (index < activeIndex) {
      if (word.includes(value[i])) {
        if (word[i] === value[i]) {
          classSting += ' word-at-right-place'
        } else {
          classSting += ' word-at-wrong-place'
        }
      } else {
        classSting += ' word-not-present'
      }
    }
    boxes.push(<div className={classSting}>{value[i] || ""}</div>)
  }


  return <div className="line" >
    {boxes}
  </div>
}




export default App
