import { useEffect, useState } from "react";
import "/src/css/style.css";

const StopWatch = () => {
  let [milliSeconds, setMilliseconds] = useState<number>(0);
  let [Seconds, setSeconds] = useState<number>(0);
  let [minutes, setMinutes] = useState<number>(0);
  let [play, setPlay] = useState<boolean>(false);
  let interval: any;
  // let timeSpan: number = 1;

  useEffect(() => {
    if (play) {
      interval = setInterval(() => {
        setMilliseconds((mseconds: number) => mseconds + 1);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [milliSeconds, play]);

  useEffect(() => {
    if (milliSeconds === 99) {
      setMilliseconds(0);
      setSeconds((prevSeconds: number) => prevSeconds + 1);
    }
    if (Seconds === 60) {
      setSeconds(0);
      setMinutes((prevMinutes: number) => prevMinutes + 1);
    }
    if (minutes === 60) {
      setMinutes(0);
    }
  }, [milliSeconds]);

  function handlePlay() {
    setPlay((prev: boolean) => !prev);
  }

  function handleReset() {
    clearInterval(interval);
    setMilliseconds(0);
    setSeconds(0);
    setMinutes(0);
    setPlay(false);
  }

  function increaseSpan() {
    setMilliseconds((prev) => (prev + 5 > 99 ? (prev = 0) : prev + 5));
    if (milliSeconds == 95) setSeconds(Seconds + 1);
  }

  function decreaseSpan() {
    if (milliSeconds < 0) milliSeconds = 1;
    setMilliseconds((prev: number) =>
      prev - 5 <= 0 ? (prev = 100) : prev - 5
    );
    if (milliSeconds >= 0 && milliSeconds <= 5) setSeconds(Seconds - 1);
    if (milliSeconds >= 0 && milliSeconds <= 5 && Seconds == 1) {
      handleReset();
    }
  }

  return (
    <>
      <div className="stopWatch">
        {/* time */}
        <section className="time">
          <h3>{`${String(minutes).padStart(2, "0")} : ${String(
            Seconds
          ).padStart(2, "0")} : ${String(milliSeconds).padStart(2, "0")}`}</h3>
        </section>

        {/* buttons */}
        <section className="buttons">
          <div className="basicFunctionality">
            <button className="start" onClick={handlePlay}>
              {!play ? "Play" : "Pause"}
            </button>
            <button className="reset" onClick={handleReset}>
              Reset
            </button>
          </div>
          <div className="intervals">
            <button className="increaseSpan" onClick={increaseSpan}>
              +5s
            </button>
            <button className="decreaseSpan" onClick={decreaseSpan}>
              -5s
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default StopWatch;
