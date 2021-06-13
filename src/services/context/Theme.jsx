import React, { createContext, useState } from 'react'

export const ThemeContext = createContext()

export function Theme(props) {

    const [theme, setTheme] = useState("light")

    const toggle = () => {
        if (theme === "light"){
            setTheme("dark")
            console.log("bb")
        }
        else{
            setTheme("light")
            console.log("aa")
        }
    }

    return (
        <ThemeContext.Provider value ={{theme , toggle}}>
            {props.children}
        </ThemeContext.Provider>
    )
}
