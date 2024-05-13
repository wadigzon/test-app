import { useReducer, useState } from "react";

function reducer(state, action) {
  switch (action.type) {
    case 'increment': 
      return {count: state.count + action.num};
    case 'decrement':
      return {count: state.count - action.num};
    default:
      throw new Error('Unknowm action type');
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, { 
    count: 0 
  });
  
  return (
    <>
      <Counter 
        count={state.count}
        onClick = {() => dispatch({
          type: 'increment', 
          num: 1
        })} />

      <Counter 
        count={state.count}
        onClick = {() => dispatch({
          type: 'decrement', 
          num: 10
        })} 
        label="decrement"
        />

    </>
  );
}

function Counter({count, onClick, label='increment'}) {
  return (
    <>
      <button onClick={onClick}>
        {label}
      </button>
      <p>Count: {count} </p>
    </>
  );
}

function App2() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState('');

  return (
    <>
      <input 
        type = "text"
        value = {value}
        onChange = {(event) => setValue(event.target.value)}
      />
      <br />
      <Counter4 count = {count} setCount={setCount} />
      <Counter4 count = {count} setCount={setCount} />
    </>
  );
}

function Counter4({count, setCount}) {
  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <p>Count: {count}</p>
    </>
  );
}

function App1() {
  const [count, setCount] = useState(0); 
  // there is a difference between
  // 1. useState ( () = > {return 0});
  // 2. useState (someComplicated )
  // 3. useState ( someComplicated() )
  // 1,2 works similar (is passing a function) and will only be calculated/called on 
  // first render
  // 3 will be called all the time
  const [otherCount, setOtherCount] = useState(5);

  return (
    <>
    <Counter5 startingCount={10} />
    <Counter2 />
    <Counter3 />
    </>
  );
}

function Counter5({startingCount = 0}) {
  const [count, setCount] = useState(startingCount); 
  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <p>Count: {count}</p>
    </>
  );
}

// you can also pass a function to setCount
function Counter2({startingCount = 0}) {
  const [count, setCount] = useState(startingCount); 
  return (
    <>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>
        Increment
      </button>
      <p>Count: {count}</p>
    </>
  );
}

function Counter3({startingCount = 0}) {
  const [count, setCount] = useState(startingCount); 
  return (
    <>
      <button onClick={() => {
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
      }}>
        Increment
      </button>
      <p>Count: {count}</p>
    </>
  );
}