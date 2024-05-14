import { useEffect, useState } from "react";

export default function App() {
  return (  
    <>
      <Counter startingCount={10} />
      <Counter />
    </>
  );
}

function Counter({startingCount = 0}) {
  const [count, setCount] = useState(startingCount);

  useEffect(() => {
    console.log('on 1')
    return () => {
      console.log('unmounted1')
    }

  }, [count]);

  useEffect(() => {
    console.log('on 2')
    return () => {
      console.log('unmounted2')
    }

  },[]);


  useEffect(() => {
    console.log('on 3');
    return () => {
      console.log('unmounted3')
    }
    
  });


  return (
    <>
      <button onClick={() => setCount(count + 1)}
      >Increment
      </button>
      <p>Count: {count}</p>
    </>
  );
}