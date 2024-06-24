import { createContext, useEffect, useState } from "react";

export const Theme = createContext()

export const ThemeProvider = ({ children }) => {


    const [isDark, setIsDark] = useState(false)
    useEffect(() => {
        document.getElementById("root").setAttribute("data-theme-mode", isDark ? 'dark' : 'light')
    }, [isDark])

    const toggleTheme = () => {
        setIsDark(prev => !prev)
    }
    const theme = isDark ? 'dark' : 'light'
    return <Theme.Provider value={{ theme, toggleTheme }}>
        {children}
    </Theme.Provider>
}

