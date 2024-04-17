import { Navigate } from "react-router";
import React from "react";
import { useUserAuth } from "../Context/UserAuthContext";


function ProtectedRoute({ children }){
    let { user } = useUserAuth();
    if(!user){
        return <Navigate to="/login"/>
    }

    return children ;
}

export default ProtectedRoute;