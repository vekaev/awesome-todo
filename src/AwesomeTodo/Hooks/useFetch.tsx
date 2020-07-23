import React,{useState, useEffect} from 'react';
import apiClient from '../apiClient';

const useFetch = (path:string) => {
    const [data,setData] = useState([]);
    const[isLoading,setLoading] = useState(false);

    useEffect( () => {
        setLoading(true)
        apiClient.get(path).then( (res) =>{
            setLoading(false);
            setData(res.data)
        } )
    },[path])
   // console.log(23);
    
    return [data,isLoading]
}
export default useFetch;