import { useEffect, useState } from 'react';

export default function useFetch(url,httpMethod,data) {
    const [loading,setLoading] = useState(false);
    const [result,setResult] = useState([]);

    const callApi = async (url,httpMethod,data)=>{
        setLoading(true)
        try {
            const response = await fetch(url,{
                method:httpMethod,
                body:data
            });
            if(!response.ok){
                throw new Error(response.text);
            }
            const responseData = await response.json();
            console.log("Response received for : ",url," is : ",responseData);
            setResult(responseData);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setResult(null);
        }
    }

    useEffect(()=>{
        callApi(url,httpMethod,data);
    },[url,data,httpMethod]);

  return [loading,result];
}
