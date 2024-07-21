import { useFilterTools } from "../../hooks/useFilterTools"


export function TechnicalSkillsHome(params) {
    const { setFilterBodyTools,filterBodyTools } = useFilterTools()

    return (
        <div className="h-fill w-full">
            <div className="mt-36 flex flex-col items-center">
                <div className="divider divider-neutral">               
                 <a className="text-3xl lg:text-5xl font-bold">TECHNICAL SKILLS</a>
                </div>

                <div className="flex justify-start w-full mx-2  mt-10">
                    <label onChange={(e) => setFilterBodyTools({toolsName: e.target.value})} className="input input-bordered flex items-center gap-2 mx-4 w-1/3">
                        <input type="text" className="grow" placeholder="Search" />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                    </label>
                   
                    
                </div>
            </div>
        </div>
    )
}