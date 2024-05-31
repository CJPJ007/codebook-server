import { callApi } from "../helpers/RestAPICaller";
import useFetch from "../helpers/useFetch"

const apiBaseUrl = process.env.REACT_APP_HOST;

export const useGetProductList = (productFilterValue) =>{
    const url = `${apiBaseUrl}/eBooks/${productFilterValue?'?name_like='+productFilterValue:''}`;
    return useFetch(url,"GET",null);
}

export const useFeaturedProductList = () =>{
    const url = `${apiBaseUrl}/eBooks/?featured=true`;
    return useFetch(url,"GET",null);
}

export const useGetProductDetails = (id) =>{
    const url = `${apiBaseUrl}/eBooks/?id=${id}`;
    const [,result] = useFetch(url,"GET",null);
    return result && result.length!==0 && result[0]?result[0]:{};
}

export const filterProducts = (filterType,filterInfo,setResult) =>{

    switch(filterType){
        case "SORT":
            const url = `${apiBaseUrl}/eBooks?_sort=${filterInfo==="L2H"?"price":"-price"}`;
            callApi(url,"GET",null,setResult);
            break;
        default:
            throw new Error("No filter type available");

    }
    
}