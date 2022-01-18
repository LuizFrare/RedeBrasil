import useAppData from "../../data/hook/useAppData";
import Avatar from "./Avatar";
import SwitchThemeBtn from "./SwitchThemeBtn";
import Title from "./Title";

interface HeaderProps {
    title: string
    subtitle: string
}

export default function Header(props: HeaderProps) {

    const {theme, switchTheme} = useAppData()

    return (
        <div className={`flex`}>
            <Title title={props.title} subtitle={props.subtitle}/>
            <div className={`flex flex-grow justify-end items-center`}>
                <SwitchThemeBtn theme={theme} switchTheme={switchTheme} />
                <Avatar className="ml-3"/>
            </div>
        </div>
    )
}