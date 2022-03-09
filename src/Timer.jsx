import React, { useEffect, useState } from "react";


function Timer({id, settings, onComplete, children}) {
  
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
  const [seconds, setSeconds] = useState(100);
 
  useEffect(() => {
    let interval = null;
    if (settings.isActive) {
      interval = setInterval(() => {
        setSeconds(seconds - 1);
      }, 1000);
    } else if (!settings.isActive && seconds <= 0 ) {
      onComplete()
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [settings.isActive, seconds]);
  const timeLeft = calculateTimeLeft(seconds);
  
  return (
    <div id={id}>
      <h1>Timer</h1>
      <button onClick={()=>handleClick()}>plus 5</button>
       {settings.isActive ? children(timeLeft.hours,timeLeft.minutes,timeLeft.seconds) : <span>Time's up!</span>} 
    </div>
  );
}


export default Timer