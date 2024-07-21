export function LoginForm(params) {
    // Suggested code may be subject to a license. Learn more: ~LicenseLog:268408431.
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
                                <img src="public/images/Avatar.webp"  />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center my-10 px-10 ">
{/* Suggested code may be subject to a license. Learn more: ~LicenseLog:1800581898. */}
                        <input type="text" placeholder="Username" className="input border-b-4 w-full border-x-0 border-t-0 border-gray-500 mt-10" />
                        <input type="text" placeholder="Password" className="input border-b-4 w-full border-x-0 border-t-0 border-gray-500  mt-10" />
                        <button className="btn btn-primary mt-10 w-full mx-10">Login</button>



                    </div>

                </div>
            </dialog>
        </div>
    )


}