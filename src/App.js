//import { useState } from "react";
import Profile from './Profile'
import { useContext } from 'react';
import { UserContext, UserContextProvider } from "./UserContext";

/*
const conner = {
  name: 'Conner',
  course: 'FrontEndExpert'
}

const clement = {
  name: 'Clement',
  course: 'AlgoExpert'
}
*/
export default function App() {
  /*
  const [user, setUser] = useState(conner);

  const toggleUser = () => {
    if (user === conner) {
      setUser(clement);
    } else {
      setUser(conner);
    }
  }
  */
  return (
    <main>
      <UserContextProvider >
        <AppInternal  />
      </UserContextProvider>
      {/* <button onClick = {toggleUser}>ToggleUser</button> */}
    </main>
  );
}

function AppInternal() {
  const { toggleUser } = useContext(UserContext)
  return (
    <>
      <Profile />
      <button onClick = {toggleUser}>ToggleUser</button>
    </>
  );
}