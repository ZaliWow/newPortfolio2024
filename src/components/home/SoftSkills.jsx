export function SoftSkills(params) {
    
    return(
        <div className="flex flex-col items-center w-full h-screen mt-10"> 
   <div className="divider divider-neutral py-10">                <a className="text-3xl lg:text-5xl font-bold ">SOFT SKILLS</a>
</div>
      <div className="diff aspect-[16/9] ">
  <div className="diff-item-1">
    <div className="bg-TeamWork bg-cover  text-white text-3xl lg:text-9xl font-black grid place-content-center"> <a className="bg-black/50 p-2" >TEAMWORK</a></div>
  </div>
  <div className="diff-item-2">
    <div className="bg-white  text-3xl lg:text-9xl font-black grid place-content-center"><a className="bg-white/50 p-2" >LEADERSHIP</a></div>
  </div>
  <div className="diff-resizer"></div>
</div>     
        </div>
    )
}