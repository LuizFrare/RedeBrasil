import Router from "next/router";
import { createContext, useEffect, useState } from "react"
import firebase from "../../firebase/config"
import User from "../../model/User"
import Cookies from 'js-cookie'

interface AuthContextProps {
    user: User
    loading?: boolean
    register?: (email: string, password: string) => Promise<void>
    loginGoogle?: () => Promise<void>
    login?: (email: string, password: string) => Promise<void>
    logout?: () => Promise<void>
}


const AuthContext = createContext<AuthContextProps>({})

async function normalizedUser(userFirebase: firebase.User): Promise<User> {
    const token = await userFirebase.getIdToken
    return {
        uid: userFirebase.uid,
        name: userFirebase.displayName,
        email: userFirebase.email,
        token,
        provider: userFirebase.providerData[0].providerId,
        imgUrl: userFirebase.photoURL
    }
}

function manageCookie(logged: boolean) {
    if(logged) {
        Cookies.set('admin-template-auth-projectNextJs', logged, {
            expires: 7
        })
    } else {
        Cookies.remove('admin-template-auth-projectNextJs')
    }
}

export function AuthProvider(props) {

    const [user, setUser] = useState<User>(null)
    const [loading, setLoading] = useState(true)

    async function setSession(userFirebase) {
        if(userFirebase?.email) {
            const user = await normalizedUser(userFirebase)
            setUser(user)
            manageCookie(true)
            setLoading(false)
            return user.email
        } else {
            setUser(null)
            manageCookie(false)
            setLoading(false)
            return false
        }
    }

    useEffect(() => {
        if(Cookies.get('admin-template-auth-projectNextJs')) {
        const cancel = firebase.auth().onIdTokenChanged(setSession)
        return () => cancel()
        } else {
            setLoading(false)
        }
    }, [])

    async function login(email, password) {

        try {
            setLoading(true)
         const resp = await firebase.auth().signInWithEmailAndPassword(email, password)
 
         await setSession(resp.user)
         Router.push('/')
         } finally {
             setLoading(false)
         }   
     }

     async function register(email, password) {

        try {
            setLoading(true)
         const resp = await firebase.auth().createUserWithEmailAndPassword(email, password)
         await setSession(resp.user)
         Router.push('/')
         } finally {
             setLoading(false)
         }   
     }

    async function loginGoogle() {

       try {
           setLoading(true)
        const resp = await firebase.auth().signInWithPopup(
        new firebase.auth.GoogleAuthProvider()
        )

        await setSession(resp.user)
        Router.push('/')
        } finally {
            setLoading(false)
        }   
    }

    async function logout() {
        try {
        setLoading(true)
        await firebase.auth().signOut()
        await setSession(null)
        Router.push('/autentication')
        } finally {
            setLoading(false)
        }

    }

    return(
        <AuthContext.Provider value={{
            user,
            loading,
            loginGoogle,
            login,
            logout,
            register
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext