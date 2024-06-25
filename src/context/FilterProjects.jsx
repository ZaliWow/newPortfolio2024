import { createContext } from "react";
import { useState } from "react";
export const FilterProjectsContext = createContext();

export function FilterProjectsProvider({children}) {
    
    const [FilterBodyProjects, setFilterBodyProjects] = useState({
        projectsName:"all",
       
    })


    return(
        <FilterProjectsContext.Provider value={{FilterBodyProjects, setFilterBodyProjects}}>
            {children}
        </FilterProjectsContext.Provider>
    )

}