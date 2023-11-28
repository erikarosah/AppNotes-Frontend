import { createContext, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';
export const AuthContext = createContext({});

function AuthProvider({children}){
    const [ data, setData ] = useState({})

    async function signIn({email, password}){
        try {
            const response = await api.post("/sessions", {email, password})
            const { user, token} = response.data

            localStorage.setItem("@appNotes:user", JSON.stringify(user))
            localStorage.setItem("@appNotes:token", token)

            api.defaults.headers.common["Authorization"] = `Bearer ${token}`
            setData({user, token})
            
        } catch (error) {
            if(error.response){
                return alert(error.response.data.message)
            } else {
                alert("Não foi possível entrar")
            }
        }
    }

    function signOut(){
        localStorage.removeItem("@appNotes:user")
        localStorage.removeItem("@appNotes:token")
        setData({})
    }

    async function updateProfile({user, avatarFile}){
        try {
            if(avatarFile){
                const fileUploadForm = new FormData()
                fileUploadForm.append("avatar", avatarFile)

                const response = await api.patch("/users/avatar", fileUploadForm)

                user.avatar = response.data.avatar
            }

            await api.put("/users", user)

            localStorage.setItem("@appNotes:user", JSON.stringify(user))
            setData({user, token: data.token})

           alert("Perfil atualizado com sucesso")

        } catch (error) {
            if(error.response){
                return alert(error.response.data.message)
            } else {
                alert("Não foi possível atualizar o perfil")
            }
        }
    }

    useEffect(()=>{
       const user = localStorage.getItem("@appNotes:user")
       const token = localStorage.getItem("@appNotes:token")

       if(user && token){
            api.defaults.headers.common["Authorization"] = `Bearer ${token}`

            setData({
                token,
                user: JSON.parse(user)
            })
        }

    },[])

    return(
        <AuthContext.Provider value={{user: data.user, signIn, signOut, updateProfile}}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth(){
    const context = useContext(AuthContext)
    return context
}
export {AuthProvider, useAuth}