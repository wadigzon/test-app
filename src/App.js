import { Fragment, useState } from 'react'
export default function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  return (
    <>
    <ul>
      {items.map((item,i) => {
        return (
          <Fragment key={i}>
            <li >{item}</li> 
            <p>====</p>
          </Fragment>
        )
      })}
    </ul>
    <input
      type="text"
      value={newItem}
      onChange={(event) => setNewItem(event.target.value)}
    />
    <button
      onClick={() => {
        if (newItem.trim().length > 0) {
          setItems([...items, newItem]);
          setNewItem('');
        }
      }}
    >
      Add List Item
    </button>
    </>
  );
}