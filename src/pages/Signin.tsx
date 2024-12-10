import { useRef } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { useNavigate } from "react-router-dom";

function Signin() {
    const usernameRef=useRef<HTMLInputElement>()
    const passwordRef=useRef<HTMLInputElement>()
    const navigate = useNavigate();

    async function signin() {
        const username = usernameRef.current?.value;
        console.log(usernameRef.current)
        const password = passwordRef.current?.value;
        const response=await axios.post(BACKEND_URL + "/api/v1/signin", {
            username,
            password
        })
        navigate("/dashboard")
        const jwt = response.data.token;
        localStorage.setItem("token",jwt)
    }
  return (
    <div className="bg-gray-100 flex h-screen items-center justify-center p-4">
    <div className="w-full max-w-md">
        <div className="bg-white shadow-md rounded-md p-8">

            <img className="mx-auto h-12 w-auto" src="https://www.svgrepo.com/show/499664/user-happy.svg" alt="" />

            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                Sign in to your account
            </h2>


            <div className="space-y-6 mt-4">
                <div>
                    <label  className="block text-sm font-medium text-gray-700">Email</label>
                    <div className="mt-1">
                    <Input reference={usernameRef} placeholder="Username"/>

                        {/* <input name="email" type="email-address" autoComplete="email-address" required
                            className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" /> */}
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Password</label>
                    <div className="mt-1">
                    <Input reference={passwordRef} placeholder="Password"/>

                        {/* <input id="password" name="password" type="password" autoComplete="password" required
                            className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" /> */}
                    </div>
                </div>

                <div>
                <Button onClick={signin} 
                        size="md" variant="primary" title="Signin" 
                        fullWidth={true}/>
                    {/* <button type="submit"
                        className="flex w-full justify-center rounded-md border border-transparent bg-sky-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2">Sign
                        In
                    </button> */}
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Signin