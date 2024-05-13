import { useState, useEffect, useLayoutEffect } from "react";

// Mount (initial render) -> updates (re-render) -> Unmount

export default function Counter() {
    const [count, setCount] = useState(0);
    const [bool, setBool] = useState(false);
/*
// this will run after the painting
    useEffect(() => {
        console.log('count changed');
        if (count === 3) {
            setCount(4);
        }
        return () => console.log('cleanup count changed');
    }, [count]);
    */

   // useLayout runs before the painting
    useLayoutEffect(() => {
        console.log('count changed');
        if (count === 3) {
            setCount(4);
        }
        return () => console.log('cleanup count changed');
    }, [count]);

    useEffect(() => {
        console.log('render')
    });

    const startTime = new Date();
    while (new Date() - startTime < 100) {}

    return (
        <div className="counter">
            <button onClick={() => setBool(!bool)}>Re-Render</button>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <p>Count: {count}</p>
        </div>
    );
}