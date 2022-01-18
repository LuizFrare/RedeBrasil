import Image from "next/image"
import Head from "next/head"
import Router from "next/router"
import Loading from '../../public/img/loading.gif'
import useAuth from "../data/hook/useAuth"

export default function ForceAuthentication(jsx) {

    const { user, loading } = useAuth()
    
    function renderContent() {
        return(
            <>
            <Head>
                <script dangerouslySetInnerHTML={{
                    __html: `
                    if(!document.cookie?.includes('admin-template-auth-projectNextJs')) {
                        window.location.href = '/autentication'
                    }
                    `
                }} />
            </Head>
                {jsx}
            </>
        )
    }

    function renderLoading() {
        return(
            <div className={`flex justify-center items-center h-screen`}>
                <Image src={Loading} />
            </div>
        )
    }
    
    if(!loading && user?.email) {
        return renderContent()
    } else if(loading) {
        return renderLoading()
    } else {
        Router.push('/autentication')
        return null
    }
}