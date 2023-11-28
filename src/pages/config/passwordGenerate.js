import React, { createContext, useContext, useState } from "react";

const PasswordContext = createContext();

export function PasswordProvider({children}) {
    const [numberPass, setNumberPass] = useState(true);
    const [charPass, setCharPass] = useState(true);

    return (
        <PasswordContext.Provider 
        value={{numberPass, setNumberPass, charPass, setCharPass}}>
            {children}
        </PasswordContext.Provider>
    )
}

export function usePasswordContext() {
    return useContext(PasswordContext)
}