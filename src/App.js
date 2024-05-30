import { /*useEffect,*/ useState, Profiler, useDebugValue } from "react";

let renderCount = 0;

export default function App() {
  //useEffect(() =>{
    renderCount++;
  //});
  console.log('rendering');

  return (
    <Profiler id="App" onRender={() => console.log('comit')}>
      <Counter initialValue={5}/>
      <Counter />
      <p>Render Count: {renderCount} </p>
    </Profiler>
  );
}

function Counter({initialValue}) {
  const [count, setCount] = useMyState(initialValue);

  const startTime = Date.now();
  while (new Date() - startTime < 500) {}

  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <p>Count: {count}</p>
    </>
  )
}

function useMyState(initialValue = 0) {
  useDebugValue();
  return useState(initialValue);
}