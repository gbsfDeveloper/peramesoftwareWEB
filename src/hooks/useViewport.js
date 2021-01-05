import {useEffect,useState} from 'react';
const useViewport = () => {
    const [Width,setWidth] = useState(window.innerWidth);
    const [Height,setHeight] = useState(window.innerHeight);
    useEffect(() => {
        const handleWindowResize = () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        };
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);
    return {Width,Height}
}

export default useViewport;