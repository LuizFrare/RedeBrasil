import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";
import { WarningIcon } from "../components/icons";
import useAuth from "../data/hook/useAuth";

export default function Autentication() {

    const { register, login, loginGoogle } = useAuth()
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const [state, setState] = useState<'login' | 'cadastro'>('login')

    function showEror(msg, time =5) {
        setError(msg)
        setTimeout(() => setError(null), time * 1000)
    }

    async function submit() {
        try {
            if(state === 'login') {
               await login(email, password)
            } else {
                register(email, password)
            }
        } catch(e) {
            showEror(e?.message ?? 'Erro desconhecido!')
        }
    }

    return (
        <div className={`
            flex items-center justify-center h-screen 
        `}>
            <div className={`w-1/2 hidden md:block lg:w-2/3`}>
                <img src="/img/post2.jpeg" alt="Imagem da tela de autenticação" className={`h-screen w-full object-cover`} />
            </div>
            <div className={`md:w-1/2 w-full m-10 lg:w-1/3`}>
            <h1 className={`
            text-3xl font-semibold mb-5 text-gray-700 
            `}>
                {state == 'login' ? 'Entre com a sua conta' : 'Cadastre-se na plataforma'}
            </h1>

            {error ? (
                <div className={`
                flex items-center bg-red-500 text-white py-3 px-5 my-2 border-2 border-red-700 rounded-xl
                `}>
                 {WarningIcon()}
                 <span className={`
                     ml-3
                 `}>{error}</span>
                </div>
            ) : false}

            <AuthInput
            label="E-mail"
            type={"email"}
            value={email}
            valueChanged={setEmail}
            required
            />
            
            <AuthInput
            label="Senha"
            type={"password"}
            value={password}
            valueChanged={setPassword}
            required
            />

            <div className={`flex flex-col items-center justify-center `}>
                <button onClick={submit} className={`
                    w-60 bg-sky-500 hover:bg-sky-400 text-white rounded-lg px-4 py-3 mt-6 shadow-lg shadow-blue-500/50 hover:shadow-sky-500/50
                `}>
                {state == 'login' ? 'Entrar' : 'Cadastrar'}
                </button>

                <hr className={`
                    my-6 border-gray-300 w-60
                `} />

                <button onClick={loginGoogle} className={`
                flex w-60 bg-amber-500 hover:bg-amber-400 text-white rounded-lg px-3 py-2 shadow-lg shadow-yellow-700/50 hover:shadow-amber-500/50
                `}>
                    <svg className={`w-8 h-10 mr-4`} fill="#ffffff" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="100px" height="100px"><path d="M 26 2 C 13.308594 2 3 12.308594 3 25 C 3 37.691406 13.308594 48 26 48 C 35.917969 48 41.972656 43.4375 45.125 37.78125 C 48.277344 32.125 48.675781 25.480469 47.71875 20.9375 L 47.53125 20.15625 L 46.75 20.15625 L 26 20.125 L 25 20.125 L 25 30.53125 L 36.4375 30.53125 C 34.710938 34.53125 31.195313 37.28125 26 37.28125 C 19.210938 37.28125 13.71875 31.789063 13.71875 25 C 13.71875 18.210938 19.210938 12.71875 26 12.71875 C 29.050781 12.71875 31.820313 13.847656 33.96875 15.6875 L 34.6875 16.28125 L 41.53125 9.4375 L 42.25 8.6875 L 41.5 8 C 37.414063 4.277344 31.960938 2 26 2 Z M 26 4 C 31.074219 4 35.652344 5.855469 39.28125 8.84375 L 34.46875 13.65625 C 32.089844 11.878906 29.199219 10.71875 26 10.71875 C 18.128906 10.71875 11.71875 17.128906 11.71875 25 C 11.71875 32.871094 18.128906 39.28125 26 39.28125 C 32.550781 39.28125 37.261719 35.265625 38.9375 29.8125 L 39.34375 28.53125 L 27 28.53125 L 27 22.125 L 45.84375 22.15625 C 46.507813 26.191406 46.066406 31.984375 43.375 36.8125 C 40.515625 41.9375 35.320313 46 26 46 C 14.386719 46 5 36.609375 5 25 C 5 13.390625 14.386719 4 26 4 Z"/></svg>
                <span className={`mt-2`}>Entrar com o Google</span> 
                </button>

                {state === 'login' ? (
                    <p className={`mt-8`}> Não tem um registro? 
                        <a onClick={() => setState('cadastro')}
                        className={`text-sky-500 hover:text-sky-700 font-semibold ml-1 cursor-pointer`}
                        >
                             Crie uma conta gratuitamente
                            </a>
                    </p>
                ) : (
                    <p>
                        <p className={`mt-8`}> Já conhece a plataforma? 
                        <a onClick={() => setState('login')}
                        className={`text-sky-500 hover:text-sky-700 font-semibold ml-1 cursor-pointer`}
                        >
                             Entre com as suas credenciais 
                            </a>
                    </p>
                    </p>
                )}

                </div>   
            </div>
            
        </div>
    )
}