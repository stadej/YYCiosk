import {createContext, useContext, useEffect, useState} from "react";

const LocationContext = createContext()
// eslint-disable-next-line react/prop-types
export const LocationProvider =({children})=>{
    const [location, setLocation] = useState([51.0268101, -114.058521])

    let options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
    };
    const error = (err)=>{
        console.log(err)
    }
    const success =(pos)=>{
        // console.log(pos)
        setLocation([pos.coords.latitude,pos.coords.longitude])
    }
    const getLocation=()=>{
        return location;
    }
    useEffect(() => {
        if(navigator.geolocation){
            navigator.permissions.query(
                {name:"geolocation"}
            ).then(
                (result)=>{
                    switch(result.state){
                        case "granted":
                            navigator.geolocation.getCurrentPosition(
                                success,
                                error,
                                options
                                )
                            break
                        case "prompt":
                            navigator.geolocation.getCurrentPosition(
                                success,
                                error,
                                options
                            )
                            break
                        case "denied":
                            break
                    }
                }
            )
        }else{
            console.log("Geolocation is not supported by this browser")
        }
    }, []);

    return(
        <LocationContext.Provider value={
            {
                getLocation
            }
        }>
            {children}
        </LocationContext.Provider>
    )
}

export const useLocation=()=>{
    return(useContext(LocationContext))
}