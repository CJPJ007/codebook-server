import { callApiDataReturn } from "../helpers/RestAPICaller"

const apiBaseUrl = process.env.REACT_APP_HOST;
export const registerUser= async (authDetails)=>{
   return  await callApiDataReturn(`${apiBaseUrl}/register`,"POST",JSON.stringify(authDetails));
}

export const loginUser= async (authDetails)=>{
    return  await callApiDataReturn(`${apiBaseUrl}/login`,"POST",JSON.stringify(authDetails));
 }

export const getUser = async(id)=>{
    return await callApiDataReturn(`${apiBaseUrl}/users?id=${id}`,"GET",null);
}