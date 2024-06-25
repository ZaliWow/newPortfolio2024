import { VariablesDictionaryContext } from "../../context/VariablesDictionary";
import { useContext } from "react";
import { useFilterProjects } from "../../hooks/useFilterProjects";
import { ProjectsCards } from "./ProjectsCard";

export function NavigationProjects(params) {
  const {  LibraryProjects, dictionaryApproach } = useContext(VariablesDictionaryContext)
  const {setFilterBodyProjects, FilterBodyProjects} = useFilterProjects()

  return (
  <div className="flex flex-wrap justify-center">
    
  
  <div className="lg:flex w-full">
  <div className="card  rounded-box grid h-fill lg:h-screen flex-grow place-items-center">
  <div>
    <a></a>
       <ul>
        <li className="lg:m-8"><a onClick={() => {
              setFilterBodyProjects({projectsName:"all"})
                 }}
                 className=" text-3xl  p-2 " 
                 >Projects</a></li>
      {
        LibraryProjects.map((project) => {
          return (
            <li className="lg:m-4 p-1 m-2"><a 
            onClick={() => {
              setFilterBodyProjects({projectsName:project.title})
                 }}
                 className={`inline-block rounded-full px-4 py-2 text-sm  mr-2 my-1 ${dictionaryApproach[project.type.toLowerCase()] || 'bg-gray-200'}`}
                 >{project.title}</a></li>
          )
        })
      }
    </ul> 
    </div>
  </div>

  <div className="card  rounded-box grid lg:h-screen flex-grow place-items-center">
  { FilterBodyProjects.projectsName === "all" ? 
  <a className="p-2 text-2xl  ">These are my projects, those with blue background are frontend, red backend and violet design.</a>
  : 
  <div>
     <ProjectsCards/>
  </div> 
  
  }
  </div>
</div>
  </div>



  )
}