import { useContext } from "react";
import{ FilterToolsContext} from "../context/FilterTools";

export function useFilterTools(params) {
    const {filterBodyTools, setFilterBodyTools} = useContext(FilterToolsContext)

    const handleFilterTools =  (tools) =>{
        return tools.filter(tool => {

            if(filterBodyTools.toolsName === "all"){
                return true
            }
            else return tool.name.toLowerCase().includes(filterBodyTools.toolsName.toLowerCase())
        })
        
    }
    return{
    handleFilterTools,
    setFilterBodyTools,
    filterBodyTools
}

    
}