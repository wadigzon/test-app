import Counter from "./Counter";
import CustomInput from "./CustomInput";
import './App.css';
import { useRef } from "react";

export default function App() {
  const counterRef = useRef();
  const CustomInputRef = useRef();

  return (
    <>
      <Counter ref = {counterRef} />
      <CustomInput ref= {CustomInputRef} placeholder = "Type Something ..." />
      <button onClick={() => {
        counterRef.current.reset();
        CustomInputRef.current.reset();
      }}>
        Reset
      </button>
    </>
  );
}