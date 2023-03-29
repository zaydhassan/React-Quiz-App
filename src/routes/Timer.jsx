import React, { useState, useEffect } from 'react';

function Timer({ onTimeUp }) {
  const [time, setTime] = useState(30 * 60); // 30 minutes in seconds
  const [isTimeUp, setIsTimeUp] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prevTime => {
        if (prevTime === 0) {
          setIsTimeUp(true);
          onTimeUp();
          clearInterval(timer);
          return prevTime;
        } else {
          return prevTime - 1;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [onTimeUp]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div className='timer'>
      <img src="/images/stopwatch.png" alt="" width='32' height='32'/>
      <span>{minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}</span>
      {isTimeUp && <span>Time's up!</span>}
    </div>
  );
}

export default Timer;
