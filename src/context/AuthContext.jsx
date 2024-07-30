import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({children}){
    const [auth , setAuth]= useState({token: null})

    const login = async (credentials) => {
        try {
            const response = await fetch(import.meta.env.VITE_API_LOGIN, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify(credentials)
            })
            const data = await response.json();
            setAuth({ token: data.access_token });
            localStorage.setItem('token', data.access_token);

        } catch (error) {
            console.log(error)
      
        }
      
            
    }

  const logout = () => {
    setAuth({ token: null });
    localStorage.removeItem('token');
  };


    return(
        <AuthContext.Provider value={{auth, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}


