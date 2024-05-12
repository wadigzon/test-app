import React from 'react';

import './App.css';

function App() {
  return (
    <>
      <Hello name= "Wadi" />
      <Hello name= "Clement" />
      <Hello />
      
      {/* component composition: having children - component inside of component */}
      <Comment username="Wadi" time={(new Date()).toString()}>
        <h1>Hello World</h1>
        <p>This is a comment</p>
      </Comment>

    </>
  );
} 


function Hello({name = "User"}) {
  return <h1>Hello {name}</h1>
}

function Comment({username, time, children}) {
  return (
    <section>
      <p>{username} commented at {time} </p>
      {children}
    </section>
  )
}

export default App;
