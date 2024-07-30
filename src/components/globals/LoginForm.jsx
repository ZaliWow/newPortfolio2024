
import { useState, useContext } from "react"
import {AuthContext} from "../../context/AuthContext"

export function LoginForm(params) {

const {login} = useContext(AuthContext)
const [credentials, setCredentials] = useState({email: '', password: ''})
const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
  };

const handleLogin = (event) => {
    event.preventDefault()
    login(credentials)
}

    return (
        <div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn btn-outline mr-2 btn-primary" onClick={() => document.getElementById('my_modal_4').showModal()}>Login</button>
            <dialog id="my_modal_4" className="modal">
                <div className="modal-box ">
                    <h3 className=" text-center text-3xl font-bold text-black">Welcome!</h3>
                    <div className="flex w-full justify-center mt-10">
                        <div className="  avatar">
                            <div className="w-24 rounded-full">
                                <img src="images/Avatar.webp"  />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center my-10 px-10 ">
{/* Suggested code may be subject to a license. Learn more: ~LicenseLog:1800581898. */}
                        <input 
                        type="text" 
                        placeholder="Email" 
                        name="email"
                        onChange={handleChange}
                        className="input border-b-4 w-full border-x-0 border-t-0 border-gray-500 mt-10" />

                        <input 
                        type="text"
                        placeholder="Password" 
                        name="password"
                        onChange={handleChange}
                        className="input border-b-4 w-full border-x-0 border-t-0 border-gray-500  mt-10" />
                        <button 
                        className="btn btn-primary mt-10 w-full mx-10"
                        onClick={handleLogin}
                        >Login</button>
                        <a href="">{
                            credentials.email
                          
                        }</a>
                        <a href="">{
                              credentials.password
                        }</a>
                    </div>
                </div>
              
            </dialog>
        </div>
    )


}