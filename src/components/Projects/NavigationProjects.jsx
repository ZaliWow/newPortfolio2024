import { ProjectsCards } from "./ProjectsCard"

export function NavigationProjects(params) {
    return(
        <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col ">
            
          <label htmlFor="my-drawer-2" className="flex  justify-center items-center bg-primary btn-primary drawer-button lg:hidden"><a className="px-2">Filter</a> <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M5 3H19L8.81562 13.1844C8.65593 12.7689 8.39992 12.4122 8.03751 12.0976C7.80967 11.8998 7.49146 11.7206 6.85504 11.3624L3.94202 9.72255C2.99347 9.18858 2.5192 8.9216 2.2596 8.49142C2 8.06124 2 7.54232 2 6.50448V5.81466C2 4.48782 2 3.8244 2.43934 3.4122C2.87868 3 3.58579 3 5 3Z" fill="#1C274C"></path> <path opacity="0.5" d="M21.9998 6.50448V5.81466C21.9998 4.48782 21.9998 3.8244 21.5605 3.4122C21.1211 3 20.414 3 18.9998 3L8.81543 13.1844C8.86481 13.3129 8.90498 13.447 8.93625 13.5872C8.99981 13.8722 8.99981 14.2058 8.99981 14.8729L8.99981 17.5424C8.99981 18.452 8.99981 18.9067 9.25173 19.2613C9.50366 19.6158 9.95109 19.7907 10.846 20.1406C12.7246 20.875 13.6639 21.2422 14.3319 20.8244C14.9998 20.4066 14.9998 19.4519 14.9998 17.5424V14.8729C14.9998 14.2058 14.9998 13.8722 15.0634 13.5872C15.1957 12.9935 15.4878 12.5095 15.9623 12.0976C16.1901 11.8998 16.5083 11.7206 17.1448 11.3624L20.0578 9.72255C21.0063 9.18858 21.4806 8.9216 21.7402 8.49142C21.9998 8.06124 21.9998 7.54232 21.9998 6.50448Z" fill="#1C274C"></path> </g></svg></label>
          <div className="flex justify-center w-full h-fill   p-2">
            <ProjectsCards></ProjectsCards>
          </div>
        
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
          <ul className="menu p-4 w-80 min-h-full bg-primary text-white text-semibold">
            {/* Sidebar content here */}
            <li><a className="font-semibold text-2xl py-4">Projects Backend</a></li>
            <li><a className="font-semibold text-2xl py-4">Projects Frontend</a></li>
            <li><a className="font-semibold text-2xl py-4">Projects Desing</a></li>
          </ul>
        
        </div>
      </div>
    )
}