import {useEffect,useState} from 'react';
const useViewport = () => {
    const [Width,setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleWindowResize);
        // console.log(Width);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);
    return {Width}
}

export default useViewport;