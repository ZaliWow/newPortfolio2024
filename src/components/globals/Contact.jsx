import { useState, useEffect } from "react";
import { useApiStatus } from "../../hooks/useApiStatus";

export function Contact(params) {

  const [dataContactSubmission, setDataContactSubmission] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const { handleApiStatus, status, setStatus } = useApiStatus();
 


  const handlePostRequest = async (e) => {
    e.preventDefault()
    try {
      handleApiStatus('Enviando...')
      const response = await fetch(import.meta.env.VITE_API_CONTACT_SUBMISSION, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataContactSubmission)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }


      handleApiStatus('enviado')
    } catch (error) {
      handleApiStatus(error.message)
      console.log(error.message);
    }
  };


  const handleChange = (event) => {
    const { name, value } = event.target;
    setDataContactSubmission({ ...dataContactSubmission, [name]: value });
  };





  return (
    <div>
      <div className="divider divider-neutral py-10">              
        <a className="text-3xl lg:text-5xl font-bold">CONTACT ME</a>
      </div>


      <div className="flex items-center justify-center min-h-screen mb-10">
        <div className="w-3/4 bg-white rounded-lg shadow-md overflow-hidden md:flex">
          <div className="md:w-full flex items-center justify-center ">
            <img src="https://images.unsplash.com/photo-1528747045269-390fe33c19f2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29udGFjdHxlbnwwfHwwfHx8MA%3D%3D" alt="Contact Us" className="object-cover h-full w-full rounded-lg" />
          </div>
          <div className="md:w-full p-8 bg-gray-100">
            <h2 className="mb-6 text-3xl font-bold text-center text-gray-800">Contact information</h2>
            <form className="space-y-4">
              <div>
                <label className="block mb-2 text-xl font-medium text-gray-600" htmlFor="name">Full Name</label>
                <input
                  className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                  type="text"
                  id="name"
                  name="name"
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-xl font-medium text-gray-600" htmlFor="email">E-mail</label>
                <input
                  className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                  type="email"
                  id="email"
                  name="email"
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-xl font-medium text-gray-600" htmlFor="subject">Phone</label>
                <input
                  className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                  type="number"
                  id="phone"
                  name="phone"
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-xl font-medium text-gray-600" htmlFor="message">Message</label>
                <textarea
                  className="w-full h-32 px-3 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                  id="message"
                  name="message"
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  disabled={status ? true : false}
                  className="mt-10 lg:mt-24 bg-black text-white py-4 px-8"
                  onClick={handlePostRequest}
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>



  )
}