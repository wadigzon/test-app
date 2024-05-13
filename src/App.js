import { useState } from 'react'
export default function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  return (
    <>
    <ul>
      {/* TODO */}
    </ul>
    <input
      type="text"
      value={newItem}
      onChange={(event) => setNewItem(event.target.value)}
    />
    <button
      onClick={() => {
        setItems([...items, newItem]);
        setNewItem('');
      }}
    >
      Add List Item
    </button>
    </>
  );
}