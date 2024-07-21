import { createContext } from "react";
import { useState } from "react";

export const FilterToolsContext = createContext();

export function FilterToolsProvider({children}){
    const [filterBodyTools, setFilterBodyTools]= useState({
        toolsName:"all"
    })

    return(
        <FilterToolsContext.Provider value={{filterBodyTools, setFilterBodyTools}}>
            {children}
        </FilterToolsContext.Provider>
    )
}