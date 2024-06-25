import { NavigationProjects } from "../components/Projects/NavigationProjects"
import { HeroProjects } from "../components/Projects/HeroProjects"
import { ProjectsCards } from "../components/Projects/ProjectsCard"

export function Projects(params) {
    return(
        <div>
            <HeroProjects></HeroProjects>
            <NavigationProjects></NavigationProjects>
           
        </div>
    )
}