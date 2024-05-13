import WelcomeBanner from "./WelcomeBanner";
import Course from "./Course";
//import { useContext } from "react";
//import { UserContext } from "./UserContext";

export default function Profile () {
    //const user = useContext(UserContext)
    return (
    <>
    <WelcomeBanner />
    <Course  />
    </>
    );
}

/*
export default function Profile ({user}) {
    return (
    <>
    <WelcomeBanner user={user} />
    <Course user = {user} />
    </>
    );
}
*/