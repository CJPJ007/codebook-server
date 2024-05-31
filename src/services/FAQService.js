import useFetch from "../helpers/useFetch"

const apiBaseUrl = process.env.REACT_APP_HOST;
export const useFQA = ()=>{
    return useFetch(`${apiBaseUrl}/fAQs`,"GET",null);
}