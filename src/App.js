import './App.css';
import { useState, useRef } from 'react';


function App() {
  const [count, setCount] = useState(0);
  const [pause, setPause] = useState(true); 
  const interval = useRef(null);

  // useEffect(() => {
  //   console.log("Mounted");
  //   startTimer();
  //   stopTimer();
  //   return () => {
  //     if(interval.count) {
  //       clearInterval(interval.count)
  //     }
  //   }


  // }, [])

  const startTimer = () => {
    interval.current = setInterval(()=>{
      setCount((count) => count+1)
    }, 1000)
    if (pause){
      setPause(false)
  }
    
    }
    

  const stopTimer = () => {
    clearInterval(interval.current);
    setPause(true);
  }

  const resetTimer = () => {
    clearInterval(interval.current);
    setPause(true);
    setCount(0);
  }






  return(
    <div className='header'>
      <h1>Stop Watch</h1>
      <div className='timer'>{count}</div>
      <button onClick={pause ? startTimer : stopTimer}>{pause ? "start" : "stop"}</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  )

}


export default App;