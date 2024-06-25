import { FilterProjectsContext } from "../context/FilterProjects";
import { useContext } from "react";

export function useFilterProjects() {
    const {FilterBodyProjects, setFilterBodyProjects} = useContext(FilterProjectsContext)

    const handleFilterProjects = (projects) =>{
        return projects.filter(project => {

            if(FilterBodyProjects.projectsName === "all"){
                return true
            }
            else return project.title === FilterBodyProjects.projectsName
        })
        
    }
   return{
    handleFilterProjects,
    setFilterBodyProjects,
    FilterBodyProjects
}
}
    
