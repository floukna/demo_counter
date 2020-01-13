import React, { useContext } from "react"
import { CounterContext } from "./store/CounterProvider"
import "./App.css"

function App() {
  const { counter, addCounter, subCounter } = useContext(CounterContext)
  console.log(counter)
  return (
    <div className="App">
      <header className="App-header">
        <h1>{counter}</h1>
        <div style={{ display: "flex" }}>
          <button style={{}} onClick={() => addCounter(1)}>
            Add
          </button>
          <button onClick={() => subCounter(1)}>Sub</button>
        </div>
      </header>
    </div>
  )
}

export default App
