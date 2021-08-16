import React,{useState} from 'react';

const LoginContext = React.createContext(null);

export function AuthContext({children}) {
    const [loggedIn, setLoggedIn] = useState(false)

    const handleLog ={
        loggedIn:loggedIn,
        log: ()=>{
            setLoggedIn(!loggedIn)
        }
    }

    return (
        <LoginContext.Provider value={handleLog}>
            {children}
        </LoginContext.Provider>
    );
}

export default LoginContext;