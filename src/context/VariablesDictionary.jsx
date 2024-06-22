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
        figma:"bg-gradient-to-r from-red-500 via-blue-500 via-green-500 to-black-500",
        css: "bg-blue-300",
        postgresql:"bg-gradient-to-r from-blue-300 to-white",
        node:"bg-green-200",
        express:"bg-gradient-to-r from-yellow-300 to-green-200",
        supabase:"bg-green-400",
        tailwind:"bg-sky-400",
        astro:"bg-[#FF5D01]",
        materialui:"bg-blue-500"



    });

    return(
        <VariablesDictionaryContext.Provider value={{dictionaryToolsTheme}}>
            {children}
        </VariablesDictionaryContext.Provider>
    )
}