import React ,{useState , createContext} from "react"

export const LanguageContext = createContext()

export function Language (props) {
    
    const [language , setLanguage] = useState("english")
    
    const toggleLanguage = () => {
        if(language=== "english")
            setLanguage("farsi")
        else  
            setLanguage("english")
    }

    return (
        <LanguageContext.Provider value = {{language , toggleLanguage}}>
            {props.children}
        </LanguageContext.Provider>
    )
}