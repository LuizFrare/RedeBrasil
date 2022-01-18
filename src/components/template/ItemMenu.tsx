import Link from 'next/Link'

interface ItemMenuProps {
    url?: string
    text: string
    icon: any
    className?: string
    onClick?: (e: any) => void
}

export default function ItemMenu(props: ItemMenuProps) {
    
    function renderContent() {
        return (
            <a className={`
            flex flex-col justify-center items-center w-20 h-20 text-gray-800 dark:text-gray-100 ${props.className}
            `}>
            {props.icon}
            <span className={`
            text-sm font-light 
            `}>
                {props.text}
            </span>
            </a>
        )
    }
    
    return (
        <li onClick={props.onClick} className={`
        hover:bg-sky-50 cursor-pointer dark:hover:bg-gray-900
        `}>
        {props.url ? (
            <Link href={props.url}>
            {renderContent()}
            </Link>
        ) : (
            renderContent()
        )}
        </li>
    )
}