import React, { useEffect, useState } from "react";


function Timer({id, settings, onComplete, children,time}) {
  const [isActive, setIsActive] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const calculateTimeLeft = (seconds) => {   
    let timeLeft = {};
      timeLeft = {
        hours: Math.floor((seconds / (60 * 60)) % 24),
        minutes: Math.floor((seconds / 60) % 60),
        seconds: Math.floor((seconds) % 60),
      };
    
    return timeLeft;
  };
  useEffect(() => {
    
    let interval = null;
    if (seconds <= 0) {
      onComplete();
      return;
    }
      interval = setTimeout(() => {
        setSeconds(seconds - 1);
      }, 1000);
    
    return () => clearInterval(interval);
  }, [seconds]);

  useEffect(() => {
    setSeconds(time)
  }, [time]);
  
  const timeLeft = calculateTimeLeft(seconds);
  
  return (
    <div id={id}>
      <h1>Timer</h1>
      {seconds ? children(timeLeft.hours,timeLeft.minutes,timeLeft.seconds) : <span>Time's up!</span>} 
    </div>
  );
}


export default Timer