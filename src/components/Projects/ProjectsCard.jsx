import { VariablesDictionaryContext } from "../../context/VariablesDictionary";
import { useContext } from "react";
import { useFilterProjects } from "../../hooks/useFilterProjects";


export function ProjectsCards() {
  const { dictionaryToolsTheme, LibraryProjects } = useContext(VariablesDictionaryContext)
  const { handleFilterProjects} = useFilterProjects()
  const filteredProjects = handleFilterProjects(LibraryProjects)



  return (
    <div className="flex flex-wrap  justify-center lg:justify-start">
      {filteredProjects.map(item => {
        return (
          <div className="card  z-0 mx-2 my-10 lg:my-10 max-h-64 min-h-72 lg:max-h-96 lg:min-h-96 max-w-72 min-w-64  lg:max-w-96 lg:min-w-96 bg-base-100 shadow-xl image-full">
            <figure>
              <img className="w-full " src={item.bg} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title text-2xl">{item.title}</h2>
              <p className="text-xl">{item.description}</p>
              <div className="absolute top-0 right-0 mt-[-10px] mr-[20px] ">
                <button className="bg-white p-2 rounded" onClick={e => {
                  window.open(item.url, "_blank");
                }}><svg className="h-5 w-5" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns: xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>github [#142]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]"> </path> </g> </g> </g> </g></svg>
                </button>
                <button className="bg-white p-2 mx-2 rounded" onClick={e => {
                  window.open(item.page, "_blank");
                }}>
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path opacity="0.5" d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
                </button>

              </div>
              <div className="collapse collapse-arrow ">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className=" text-xl font-medium">
                  Tools
                </div>
                <div className=" p-0 m-0 w-full">
                  <div className=" flex flex-wrap ">
                    {item.tools.map((tool) => {
                      return (
                        <span
                          className={`inline-block rounded-full px-2 py-1 text-sm  text-gray-700 mr-2 my-1 ${dictionaryToolsTheme[tool.toLowerCase()] || 'bg-gray-200'}`}

                        > {tool}
                        </span>
                      )



                    })}</div>
                </div>
              </div>

            </div>

          </div>

        )

      })}


    </div>



  )
}