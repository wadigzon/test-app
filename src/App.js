import { useState } from "react";
import Counter from './Counter'
import './App.css';

export default function App() {
  const [isShown, setIsShown] = useState(true);

  return (
    <>
      <button onClick={() => setIsShown(!isShown)} >
        {isShown ? "Hide Counter" : "Show counter"}
      </button>
      {isShown ? <Counter /> : null}
    </>
  );
}