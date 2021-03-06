interface TitleProps {
    title: string
    subtitle: string
}

export default function Title(props: TitleProps) {
    return (
        <div>
            <h1 className={`
            font-black text-3xl text-gray-800
            dark:text-gray-200
            `}>{props.title}</h1>

            <h2 className={`
            font-bold text-md text-gray-700
            dark:text-gray-300
            `}>{props.subtitle}</h2>
        </div>
    )
}