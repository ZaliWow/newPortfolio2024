import { useNavigate } from "react-router-dom";

export function HeroAbout (){
  const navigate = useNavigate();
  const handleDownloadCV = () =>{
    const pdfUrl = "/achives/CV William David Morales Pineda.pdf"
    const link = document.createElement('a')
    link.href= pdfUrl;
    link.setAttribute('download', 'CV - William David Morales Pineda')
    document.body.appendChild(link)
    link.click();
    document.body.removeChild(link)
 }

    return(
        <div className="hero min-h-screen lg:px-16 bg-white">
        <div className="hero-content flex-col lg:flex-row">
          <img src="images/perfil.webp" className="max-w-sm w-3/4 lg:h-1/2 rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">William David Morales Pineda</h1>
            <p className="py-6 text-xl" >Systems engineer, focused on web software development, with knowledge in Backend as a service, Frontend development and design, sql language and APIrest.</p>
            <button className="btn m-2 btn-primary text-xl" onClick={handleDownloadCV}>Download CV</button>
            <button className="btn bg-white border-solid border-2 border-indigo-600 text-xl" onClick={() => navigate('/projects')} >View Projects</button>

          </div>
        </div>
      </div>
    )
}