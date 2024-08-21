// Costom hook for getting location of user;
import { useState, useEffect } from "react";


const useLocation = () => {
    const [geoLocation, setGeoLocation] = useState('');
    const [err, setErr] = useState('');

    const success = (position) => {
        setGeoLocation(position);
    };

    const failed = () => { setErr('Error : ! Permition denied !') };

    const loc = async () => {
        navigator.geolocation.getCurrentPosition(success, failed);
    }

    useEffect(() => { loc() }, [])
    if (geoLocation) {
        return geoLocation;
    } else return '';
};

export default useLocation;