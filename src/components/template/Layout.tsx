import useAppData from "../../data/hook/useAppData";
//import ForceAuthentication from "../auth/forceAuthentication";
import ForceAuthentication from "../../functions/ForceAuthentication";
import Content from "./Content";
import Header from "./Header";
import LeftMenu from "./LeftMenu";

interface LayoutProps {
    title: string
    subtitle: string
    children?: any
}

export default function Layout(props: LayoutProps) {
    const {theme} = useAppData()

    ForceAuthentication
    return ForceAuthentication(
            <div className={`
            flex h-screen w-screen overflow-x-hidden ${theme}
            `}>
                <LeftMenu />
                        <div className={`
                        flex flex-col w-full p-7 bg-gray-100 dark:bg-gray-900
                        `}>
                        <Header title={props.title} subtitle={props.subtitle} />
                        <Content>
                            {props.children}  
                        </Content> 
                    </div>
                </div>
        )
}