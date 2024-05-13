import { useState, useRef, forwardRef } from "react";

export default function App(){
  const inputRef = useRef(null);
  const focusInput = () => {
    inputRef.current.focus();
  }

  return (
    <>
      {/* <input ref={inputRef} /> */}
      <MyInput ref = {inputRef} />
      <MyInput ref = {handleRef} />
      <button onClick={focusInput} >Focus</button>
    </>
  );
}

const MyInput = forwardRef(
  function (props, ref) {
    return <input ref={ref} {...props} style={{color: 'red'}} />
  }
)

function handleRef(domNode) {
  console.log(domNode);
}

// shows how useRef replaces useState with no use of setter function
function App1() {
  const [seconds, setSeconds] = useState(0);
  const timerId = useRef(null);
  // const [timerId, setTimerId] = useState({
  //  current: null
  // })

  const startTimer = () => {
    // so we keep the current object and do not cause re-render
    // note that setTimerId is not being used: not efficient code
    timerId.current = setInterval(() => {
      setSeconds(currSeconds => currSeconds + 1);
    }, 1000);
  }

  const stopTimer = () => {
    clearInterval(timerId.current);
  };

  return (
    <>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <p>seconds: {seconds} </p>
    </>
  );
}

