import { start } from 'node:repl';
import { useState, useEffect } from 'react';
import styles from '../styles/components/Countdown.module.css';

let countdownTimeout: NodeJS.Timeout;

export function Countdown(){
  const [time, setTime] = useState(25*60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);
  const minutes = Math.floor(time/60);
  const seconds = time%60;
  const [minuteLeft,minuteRigth] = String(minutes).padStart(2, '0').split('');
  const [secondLeft,secondRigth] = String(seconds).padStart(2, '0').split('');
  const [isRelax, setIsRelax] = useState(false);
 
  function startCountdown(){
    setTime(25*60)
    setIsActive(true);
  }
  function resetCountdown(){
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(25*60)
  }
  function startRelax(){
    setIsRelax(true);
    setTime(5*60);
    setIsActive(true);
  }

  useEffect(() => {
    if (isActive && time>0){
      countdownTimeout= setTimeout(() => {
        setTime(time-1);
      }, 1000);
    } else if (isActive && time===0 && isRelax){
      setHasFinished(true);
      setIsActive(false);
      setIsRelax(false);
    } else if(isActive && time===0){
      setHasFinished(true);
      setIsActive(false);
      setIsRelax(true);
    }
  }, [isActive, time])

  return(
    <div>
      <div className={styles.countdown}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRigth}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRigth}</span>
        </div>
      </div>
      {hasFinished && isRelax ? (
        <button 
        type="button" 
        onClick={startRelax}
        className={styles.startCycleButton}
        >
          Hora do descanso!
        </button>
      ): (
        <>
        {isActive ? (
        <button 
        type="button" 
        className={`${styles.startCycleButton} ${styles.startCycleButtonActive}`}
        onClick={resetCountdown}
        >
          Cancelar ciclo
        </button>
      ): (
        <button 
      type="button" 
      className={styles.startCycleButton}
      onClick={startCountdown}
      >
       Iniciar ciclo 
      </button>
      )}
        </>
      )}


      
      
    </div>
  )
}