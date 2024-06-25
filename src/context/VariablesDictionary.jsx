import { createContext } from "react";
import { useState } from "react";

export const VariablesDictionaryContext = createContext();

export function VariablesDictionaryContextProvider({children}){
    const [dictionaryToolsTheme, setDictionaryToolsTheme] =  useState({ 
        javascript: "bg-yellow-400",
        python: "bg-gray-200",
        react: "bg-blue-400",
        php: "bg-violet-400",
        sql: "bg-blue-900 text-white",
        html: "bg-red-400",
        figma:"bg-gradient-to-r from-red-500 via-blue-500 via-green-500 to-black-500",
        css: "bg-blue-300",
        postgresql:"bg-gradient-to-r from-blue-300 to-white",
        node:"bg-green-200",
        express:"bg-gradient-to-r from-yellow-300 to-green-200",
        supabase:"bg-green-400",
        tailwind:"bg-sky-400",
        astro:"bg-[#FF5D01]",
        materialui:"bg-blue-500"



    });
    const LibraryProjects = [
        {
          title: "First PortFolio",
          description: "Its my first proyect whit react and materialUI",
          url: "https://github.com/ZaliWow/portafolioDavid",
          type: "frontend",
          tools: ["react", "materialui", "javascript", "html", "css"],
          bg: "/public/images/react.webp",
          page: "https://portfolio-dev-david.netlify.app/"
        },
        {
          title: "Landing Page TryCatch Factory",
          description: "Website developed in AstroJs with tailwindJs and SupaBase",
          url: "https://github.com/Trycatch-tv/trycatch_factory_site",
          type: "frontend",
          tools: ["astro", "tailwind", "supabase", "javascript", "html", "css"],
          bg: "/public/images/astro.webp",
          page: "https://dev.trycatchfactory.com/"
        },
        {
          title: "Personal Blog (not finished yet)",
          description: "react project with tailwind using Auth0 for passwordless login",
          url: "https://github.com/ZaliWow/Auth0ReactVite",
          type: "frontend",
          tools: ["react", "tailwind", "auth0", "javascript", "html", "css"],
          bg: "/public/images/react.webp",
          page: "https://auth0-example.netlify.app/"
        },
        {
          title: "Restaurant menu management site",
          description: "page created using supabase as a backend as a service and react with materialui ",
          url: "https://github.com/ZaliWow/Administration",
          type: "frontend",
          tools: ["react", "tailwind", "supabase", "javascript", "html", "css"],
          bg: "/public/images/react.webp",
          page: "https://admin-kasa-klaus.netlify.app/login"
        },
        {
          title: "backend of my thesis",
          description: "APIrest created with Nodejs and expressjs to make requests to a database managed by postgresql",
          url: "https://github.com/ZaliWow/pa-graduarme-backend",
          type: "backend",
          tools: ["express", "node", "postgresql", "javascript", "sql"],
          bg: "/public/images/node.webp",
          page: "https://proyecto-backend-william-david-morales.onrender.com/registro/estudiantes"
    
        },
        {
          title: "Mockup TryCatch Factory",
          description: "Complete figma mockup design of the trycatch factory landing page. ",
          url: "https://www.figma.com/design/naTCbwJWexnmBarOBysJQd/TryCatch-Factory-Figma?node-id=1092-492&t=oeSVSJ7j5btjDQMy-0",
          type: "desing",
          tools: ["figma"],
          bg: "/public/images/figma.webp",
          page: "https://www.figma.com/design/naTCbwJWexnmBarOBysJQd/TryCatch-Factory-Figma?node-id=1092-492&t=oeSVSJ7j5btjDQMy-0",
    
        },
    
      ]
    const dictionaryApproach={
      backend:"bg-green-500",
      frontend:"bg-blue-500",
      desing:"bg-violet-400"
    }

    return(
        <VariablesDictionaryContext.Provider value={{dictionaryToolsTheme, LibraryProjects, dictionaryApproach}}>
            {children}
        </VariablesDictionaryContext.Provider>
    )
}