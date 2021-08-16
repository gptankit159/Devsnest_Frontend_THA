import React,{useContext} from 'react';
import LoginContext from "../context/AuthContext";

function Home() {
    const handleLog = useContext(LoginContext)
    return (
        <>
            <h1>This is the Home page.</h1>
            <h2>If not logged in, can't access Profile & Dashboard</h2>
            <button onClick={handleLog.log}>
                {handleLog.loggedIn ? "Logout" : "Login"}
            </button>
        </>
    );
}

export default Home;