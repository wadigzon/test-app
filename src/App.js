
export default function App() {
  // <button onClick={handleClick}>Click Me</button>
  return (
    <MyButton onClick={handleClick}>Click Me</MyButton>
  );
}

// better to move it out of the component
const handleClick = (event) => {
  console.log(event);
}

function MyButton(props) {
  return (
    <button 
    {...props}
    style={{
      color: 'red'
    }} />
  
  );
}

