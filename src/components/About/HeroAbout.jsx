export function HeroAbout (){
    return(
        <div className="hero min-h-screen lg:px-16 bg-white">
        <div className="hero-content flex-col lg:flex-row">
          <img src="images/perfil.webp" className="max-w-sm w-3/4 lg:h-1/2 rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">William David Morales Pineda</h1>
            <p className="py-6">Systems engineer, focused on web software development, with knowledge in Backend as a service, Frontend development and design, sql language and APIrest.</p>
            <button className="btn m-2 btn-primary">Download CV</button>
            <button className="btn bg-white border-solid border-2 border-indigo-600">View Projects</button>

          </div>
        </div>
      </div>
    )
}