export function RegisterForm(params) {
    return (
        <div>
            <button className="btn btn-outline mr-2 btn-accent" onClick={() => document.getElementById('my_modal_5').showModal()}>Sign in</button>
            <dialog id="my_modal_5" className="modal">
                <div className="modal-box ">
                    <h3 className=" text-center text-3xl font-bold text-black">Creat your account</h3>
                    <div className="flex w-full justify-center mt-10">
                        <div className="  avatar">
                            <div className="w-24 rounded-full">
                                <img src="public/images/Avatar.webp" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center my-10 px-10 ">
                        <input type="text" placeholder="Username" className="input border-b-4 w-full border-x-0 border-t-0 border-gray-500 mt-10" />
                        <input type="text" placeholder="Email" className="input border-b-4 w-full border-x-0 border-t-0 border-gray-500 mt-10" />
                        <input type="text" placeholder="Password" className="input border-b-4 w-full border-x-0 border-t-0 border-gray-500  mt-10" />
                        <button className="btn btn-primary mt-10 w-full mx-10">Sign in</button>
                       



                    </div>

                </div>
            </dialog>
        </div>
    )
}