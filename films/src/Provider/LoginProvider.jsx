import React, { useState } from 'react';

export const LoginContext = React.createContext()

const LoginProvider = ({children}) => {
    const [token, setToken] = useState(JSON.parse(localStorage.getItem('token')) || false)
    return (
        <LoginContext.Provider value={{token, setToken}}>
            <LoginContext.Consumer>
                {
                    ()=>children
                }
            </LoginContext.Consumer>
        </LoginContext.Provider>
    );
}

export default LoginProvider;
