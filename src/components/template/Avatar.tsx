import Link from "next/link"
import useAuth from "../../data/hook/useAuth"

interface AvatarProps {
    className?: string
}

export default function Avatar(props: AvatarProps) {

    const { user } = useAuth()

    return (
        <div>
            <Link href="/profile">
                <img src={user?.imgUrl ?? '/img/userProfile.png'}
                 alt="Avatar do usuário"
                 className={`
                    h-10 w-10 rounded-full cursor-pointer bg-gray-100 p-0.5 shadow shadow-lg shadow-gray-300 ${props.className}
                 `}
                 />
            </Link>
        </div>
    )
}