import { useApiStatus } from "../../hooks/useApiStatus";
import { useEffect } from "react"
export function Charging(params) {
  const { handleApiStatus, status } = useApiStatus();

  const closeAlert = () => {
    handleApiStatus(null)
  }
  // sin enviar
  if (status === null) return (
    <div></div>
  )
  // enviando
  else if (status === 'Enviando...') return (
    <div role="alert" className="alert  lg:w-72 lg:p-8  sticky z-20 top-5 float-right right-10 ">
      <span className="loading loading-spinner text-primary"></span>
      <span>Loading...</span>

    </div>
  )
  // enviado satisfactoriamente
  else if (status === 'enviado') return (
    <div role="alert" className="alert alert-success lg:w-72 lg:p-8  z-20 sticky top-5 float-right right-10 ">

      <svg
      onClick={closeAlert}
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 shrink-0 stroke-current"
        fill="none"
        viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <span>Informacion enviada.</span>
    
    </div>
  )
  //errores
  else return (
    <div role="alert" className="alert bg-violet-500 z-20  lg:w-72 lg:p-8 sticky top-5 float-right right-10 ">

      <svg
       onClick={closeAlert}
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 shrink-0 stroke-current"
        fill="none"
        viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <span>Algo ha salido mal.</span>
    
    </div>
  )


}