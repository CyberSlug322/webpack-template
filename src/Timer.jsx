import React, { useEffect, useState } from "react";


function Timer({id, settings, onComplete, children}) {
  const [seconds, setSeconds] = useState(100);
  const [isActive, setIsActive] = useState(false);
  const calculateTimeLeft = (seconds) => {   
    let timeLeft = {};
      timeLeft = {
        hours: Math.floor((seconds / (60 * 60)) % 24),
        minutes: Math.floor((seconds / 60) % 60),
        seconds: Math.floor((seconds) % 60),
      };
    
    return timeLeft;
  };
  const handleClick = () => {
    setSeconds(seconds + settings.secondsPerClick);   
  }
  
 
  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds - 1);
      }, 1000);
    } else if ( seconds <= 0 ) {
      onComplete()
      clearInterval(interval);
      setIsActive(false)
    }
    return () => clearInterval(interval);
  }, [seconds, isActive]);
  const timeLeft = calculateTimeLeft(seconds);
  
  return (
    <div id={id}>
      <h1>Timer</h1>
      <button onClick={()=>handleClick()}>add {settings.secondsPerClick} seconds to timer</button>
      <button onClick={()=>setIsActive(true)}>start</button>
      <button onClick={()=>setIsActive(false)}>stop</button>
       {isActive ? children(timeLeft.hours,timeLeft.minutes,timeLeft.seconds) : <span>{onComplete()}</span>} 
    </div>
  );
}


export default Timer