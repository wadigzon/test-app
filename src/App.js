import React from 'react';

import './App.css';

function App() {
  return (
    <Comment username="Conner" time={(new Date()).toString()}>
      <h1>Hello World</h1>
    </Comment>
  );
}

function Comment({children, username, time}) {
  return (
    <section>
    <p>{username} commented at {time} </p>
    {children}
  </section>
  );
}

export default App;
