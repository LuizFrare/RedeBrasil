interface AuthInputProps {
    label: String
    value: any
    type: 'text' | 'email' | 'password'
    required: boolean
    notRenderWhen?: boolean
    valueChanged: (newValue: any) => void
}

export default function AuthInput(props: AuthInputProps) {
    return props.notRenderWhen ? null : (
        <div className={`
            flex flex-col mt-4
        `}>
            <label> {props.label} </label>
            <input 
            value={props.value}
            type={props.type ?? 'text'}
            onChange={e => props.valueChanged?.(e.target.value)}
            required={props.required}
            className={`
                px-4 py-3 rounded-lg bg-gray-200 mt-2 border
                focus:border-blue-300 focus:outline-none focus:bg-white
            `}
            />
        </div>
    )
}