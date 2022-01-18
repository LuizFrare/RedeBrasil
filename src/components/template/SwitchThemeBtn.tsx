import { MoonIcon, SunIcon } from "../icons";

interface SwitchThemeBtn {
    theme: string
    switchTheme: () => void
}

export default function SwitchThemeBtn(props: SwitchThemeBtn) {
    return props.theme === 'dark' ? (
        <div onClick={props.switchTheme} className={`
          sm:flex items-center w-14 lg:w-24 h-8  bg-gradient-to-r from-yellow-200 to-yellow-500
         cursor-pointer p-1 rounded-full ml-2
        `}>
            <div className={`
                flex rounded-full items-center justify-center bg-white text-yellow-500 w-6 h-6
            `}>
                {SunIcon(6)}
            </div>

            <div className={`
                hidden lg:flex items-center ml-3 text-gray-50
            `}>
                <span>Claro</span>
            </div>  
        </div>
    ) : (
        
        <div onClick={props.switchTheme} className={`
          sm:flex items-center w-14 lg:w-24 h-8  bg-gradient-to-r from-sky-900 to-gray-900
         cursor-pointer p-1 rounded-full ml-2
        `}>
            <div className={`
                hidden lg:flex items-center ml-2 text-gray-200
            `}>
                <span>Escuro</span>
            </div> 

            <div className={`
                flex rounded-full items-center justify-center sm:ml-1 bg-white text-sky-900 w-6 h-6 md:ml-6 ml-6 xl:ml-1
            `}>
                {MoonIcon(6)}
            </div> 
        </div>
    )
}