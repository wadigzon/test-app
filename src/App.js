import Counter from "./Counter";
import CustomInput from "./CustomInput";
import './App.css';

export default function App() {
  return (
    <>
      <Counter />
      <CustomInput placeholder = "Type Something ..." />
      <button>
        Reset
      </button>
    </>
  );
}