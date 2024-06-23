export function Contact(params) {
    return (
        <div>
            <div className="divider divider-neutral py-10">                <a className="text-3xl lg:text-5xl font-bold">CONTACT ME</a>
                </div>
<div className="flex items-center justify-center min-h-screen ">
      <div className="w-3/4 bg-white rounded-lg shadow-md overflow-hidden md:flex">
        <div className="md:w-full flex items-center justify-center ">
          <img src="https://plus.unsplash.com/premium_photo-1687362298502-1881385c786f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxsYW1hbmRvfGVufDB8fDB8fHww" alt="Contact Us" className="object-cover h-full w-full rounded-lg" />
        </div>
        <div className="md:w-full p-8">
          <h2 className="mb-6 text-3xl font-bold text-center text-gray-800">Contact information</h2>
          <form className="space-y-4">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-600" htmlFor="name">Full Name</label>
              <input
                className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                type="text"
                id="name"
                name="name"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-600" htmlFor="email">E-mail</label>
              <input
                className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                type="email"
                id="email"
                name="email"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-600" htmlFor="subject">Subject</label>
              <input
                className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                type="text"
                id="subject"
                name="subject"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-600" htmlFor="message">Message</label>
              <textarea
                className="w-full h-32 px-3 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                id="message"
                name="message"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="px-4 py-2 font-semibold text-white bg-primary rounded-lg hover:bg-black focus:outline-none focus:ring focus:ring-blue-200"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
</div>


       
    )}