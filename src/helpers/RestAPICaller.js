export const callApi = async (url,httpMethod,data,setResult)=>{
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
    } catch (error) {
        setResult(null);
    }
}

export const callApiDataReturn = async (url,httpMethod,data)=>{
    try {
        const response = await fetch(url,{
            method:httpMethod,
            body:data,
            headers:{
                "content-type":"application/json"
            }
        });
        if(!response.ok){
            const message = await response.text();
            throw new Error(message);
        }
        const responseData = await response.json();
        console.log("Response received for : ",url," is : ",responseData);
        return responseData;
    } catch (error) {
        return error.message;
    }
}