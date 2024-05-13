
import { useState } from "react";
import './App.css';

// problem: modal has higher z-index but still shows beneath other content
// stacking content: modal can only be compared to other content inside of container
// it will always be below the other content
// solutions: 
// 1. move modal outside (let's say we cannot do this)
// 2. use a portal: take a react element, leave it where it is, but when it renders, we
// can change where it actually renders, to another location in the DOM

export default function App() {
  const [isHidden, setIsHidden] = useState(true);
  return (
    <>
      <div className="container">
        <button onClick={() => setIsHidden(!isHidden)}>
          {isHidden ? 'Show Modal' : 'Hide Modal'}
        </button>
        {isHidden || <Modal />}
      </div>

      <p className="other">
        Other Content
      </p>
    </>
  );
}

function Modal() {
  return <p className="modal">Modal</p>
}