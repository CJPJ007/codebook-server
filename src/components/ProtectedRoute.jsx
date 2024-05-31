import React from 'react'
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({children}) {

    const token = localStorage.getItem("user") && localStorage.getItem("user").length!==0?true:false;
    return token?children:<Navigate to={"/login"} />
}
