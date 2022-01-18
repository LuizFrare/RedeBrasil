import useAuth from "../../data/hook/useAuth";
import { BellIcon, HomeIcon, LogoutIcon, SettingIcon } from "../icons/index"
import ItemMenu from "./ItemMenu";
import Logo from "./Logo";

export default function LeftMenu() {

    const { logout } = useAuth()

    return (
        <aside className={`
        flex flex-col dark:bg-gray-800
        `}>
            <div className={`
                flex flex-col items-center justify-center h-20 w-20 bg-gradient-to-r from-yellow-200 to-yellow-500
            `}>
                <Logo />
            </div>
            <ul className={`flex-1`}>
                <ItemMenu url="/" text="Início" icon={HomeIcon}/>
                <ItemMenu url="/news" text="Novidades" icon={BellIcon}/>
                <ItemMenu url="/settings" text="Ajustes" icon={SettingIcon}/>
            </ul>
            <ul>
               <ItemMenu text="Sair" icon={LogoutIcon} className={`
               text-red-700 hover:bg-red-500 hover:text-white
               dark:text-red-200 dark:hover:bg-red-700
               `} 
               onClick={logout}
               />
            </ul>
        </aside>
    )
}