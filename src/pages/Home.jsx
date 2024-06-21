import { HeroHome } from "../components/home/HeroHome"
import { TechnicalSkillsHome } from "../components/home/TechnicalSkillsHome"
import { ToolSkills } from "../components/home/ToolSkills"
import { SoftSkills } from "../components/home/SoftSkills"


export function Home(params) {
    return(
        <> 
            <HeroHome></HeroHome>
            <TechnicalSkillsHome></TechnicalSkillsHome>
            <ToolSkills></ToolSkills>
            <SoftSkills></SoftSkills>
        </>
       
    )
}