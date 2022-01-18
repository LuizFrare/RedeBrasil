import { createContext, useEffect, useState } from "react";

type Theme = 'dark' | ''

interface AppContextProps {
    theme: string
    switchTheme: () => void 
}

const AppContext = createContext<AppContextProps>({
    theme: null,
    switchTheme: null
})

export function AppProvider(props) {

    const [theme, setTheme] = useState('')

    function switchTheme() {
        const newTheme = theme === '' ? 'dark' : ''
        setTheme(newTheme)
        localStorage.setItem('theme', newTheme)
    }

    useEffect(() => {
       const savedTheme = localStorage.getItem('theme')
       setTheme(savedTheme)
    }, [])

    return(
        <AppContext.Provider value={{
            theme,
            switchTheme
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext