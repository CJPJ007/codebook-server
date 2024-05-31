import useFetch from "../helpers/useFetch"

const apiBaseUrl = process.env.REACT_APP_HOST;
export const useFetchReviews = () => {
    return useFetch(`${apiBaseUrl}/reviews`,"GET",null);
}