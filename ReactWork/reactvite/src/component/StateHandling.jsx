import {useState} from 'react'

function StateHandling() {
    const [counter,setCounter]=useState(20);
    function increseCounterValue(){
        setCounter(counter+2)
    }
    function decreseCounterValue(){
        setCounter(counter-2)
    }
    function multiCounterValue(){
        setCounter(counter*2)
    }

    function divCounterValue(){
        setCounter(counter/2)
    }
  return (
    <div>
        <h2>Counter value={counter}</h2>
        <button onClick={increseCounterValue}>Increment Counter</button>
        <button onClick={decreseCounterValue}>Decrement Counter</button>
        <button onClick={multiCounterValue}>multiply Counter</button>
        <button onClick={divCounterValue}>div Counter</button>

    </div>
  )
}

export default StateHandling