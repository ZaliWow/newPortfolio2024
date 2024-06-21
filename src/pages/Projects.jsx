import { NavigationProjects } from "../components/Projects/NavigationProjects"
import { HeroProjects } from "../components/Projects/HeroProjects"


export function Projects(params) {
    return(
        <div>
            <HeroProjects></HeroProjects>
            <NavigationProjects></NavigationProjects>
        </div>
    )
}