import { useContext } from "react"
import { VariablesDictionaryContext } from "../../context/VariablesDictionary"
import { useFilterTools } from "../../hooks/useFilterTools"

export function ToolSkills(params) {

    const { LibraryToolsFrontend, LibraryToolsBackend, LibraryToolsOthers } = useContext(VariablesDictionaryContext)
    const {handleFilterTools}= useFilterTools()
    const filteredToolsFrontend = handleFilterTools(LibraryToolsFrontend)
    const filteredToolsBackend = handleFilterTools(LibraryToolsBackend)
    const filteredToolsOthers = handleFilterTools(LibraryToolsOthers)

    return (
        <div className="mt-10" id="ToolsSkills">
            <a className="text-2xl font-semibold text-violet-600 px-10"> | Frontend </a>
            <div className="flex flex-wrap justify-start h-fill w-full mt-10 ">

                {filteredToolsFrontend.map(item => {
                    return (
                        <div key={item.name} className=" h-16 w-16 lg:h-24 lg:w-24 mx-4 mt-4 lg:mt-0">
                            {item.icon}
                        </div>
                    )
                })}



            </div>
            <div className="mt-10">
                <a className="text-2xl  font-semibold text-violet-600 p-10"> | Backend </a>

                <div className="flex flex-wrap justify-start h-fill w-full mt-10 ">

                    {filteredToolsBackend.map(item => {
                        return (
                            <div key={item.name} className=" h-16 w-16 lg:h-24 lg:w-24 mx-4 mt-4  lg:mt-0">
                                {item.icon}
                            </div>
                        )
                    })}



                </div>
            </div>
            <div className="mt-10">
                <a className="text-2xl font-semibold text-violet-600 px-10"> | Others </a>

                <div className="flex flex-wrap justify-start h-fill w-full mt-10 ">

                    {filteredToolsOthers.map(item => {
                        return (
                            <div key={item.name} className=" h-16 w-16 lg:h-24 lg:w-24 mx-4 mt-4 lg:mt-0">
                                {item.icon}
                            </div>
                        )
                    })}



                </div>
            </div>



        </div>
    )
}