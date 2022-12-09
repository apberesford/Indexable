import { createContext, useState } from "react";
export const SiteContext = createContext(null);

export const Context = ({children}) => {
    const [error, setError] = useState(false)
    const [index, setIndex] = useState({})
    const [entry, setEntry] = useState({})
    
    return (
    <SiteContext.Provider value={{
        error, setError,
        index, setIndex,
        entry, setEntry,
    }}>
        {children}
    </SiteContext.Provider>
    );
}

