import React, { useState, useEffect } from 'react';

interface Props {
  startTime: number;
  onTimoutHandler: () => void;
}

const Timer: React.FC<Props> = ({ startTime, onTimoutHandler }) => {
  
  const [seconds, setSeconds] = useState(startTime);

  function numToTime(seconds:number){
    let mins = 0;
    if(seconds >= 60 ) {
      mins = Math.floor(seconds / 60);
    }
    const secs = seconds - (mins * 60);
    return `${mins}:${secs<10?'0':''}${secs}`
  }


  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(seconds => seconds - 1);
    }, 1000);
    if(seconds <= 0 ) {
      onTimoutHandler();
      clearInterval(timer); 
    }
    return () => {
      clearInterval(timer); 
    }
  }, [seconds]);


  return <h3 
    style={{fontSize: '100px'}}
    className={`${seconds < 4?'text-secondary':'text-primary'} 
      mt-2 mx-auto timer py-3`}>
        {numToTime(seconds)}
    </h3>;
};

export default Timer;