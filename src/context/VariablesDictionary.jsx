import { createContext } from "react";
import { useState } from "react";

export const VariablesDictionaryContext = createContext();

export function VariablesDictionaryContextProvider({children}){
    const [dictionaryToolsTheme, setDictionaryToolsTheme] =  useState({ 
        javascript: "bg-yellow-400",
        python: "bg-gray-200",
        react: "bg-blue-400",
        php: "bg-violet-400",
        sql: "bg-blue-900 text-white",
        html: "bg-red-400",
        css: "bg-blue-200",
    });

    return(
        <VariablesDictionaryContext.Provider value={{dictionaryToolsTheme}}>
            {children}
        </VariablesDictionaryContext.Provider>
    )
}