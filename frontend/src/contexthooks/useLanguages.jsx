import {createContext, useContext, useEffect, useState} from "react";
import translations from "../../translations.json"

const LanguageContext = createContext();

// eslint-disable-next-line react/prop-types
export const LanguageProvider =(props)=>{
    const [dictionary,setDictionary] = useState(translations["English"]);

    const getLanguage=()=>{
        return dictionary;
    }

    const setLanguage=(lang)=>{
        setDictionary(translations[lang])
    }

    useEffect(()=>{
        // eslint-disable-next-line react/prop-types
        if(props.language){
            // eslint-disable-next-line react/prop-types
            return()=>setDictionary(translations[props.language])
        }
        setDictionary(translations["English"])
    },[])

    // useEffect(()=>{
    //     console.log(dictionary)
    // },[dictionary])
    return (
        <LanguageContext.Provider value={
            {
                getLanguage,
                setLanguage
            }
        }>
            {/* eslint-disable-next-line react/prop-types */}
            {props.children}
        </LanguageContext.Provider>
    )
}

export const useLanguage = ()=>{
    return useContext(LanguageContext)
}