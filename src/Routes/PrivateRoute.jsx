
import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../Components/Hooks/UseAuth";


const PrivateRoute = ({children}) => {
    const {user, loading} = UseAuth()
    const location = useLocation()
    
if(loading){
    return <span className="loading loading-spinner text-error"></span>
}

if(user) 
{
    return children
}
    return (
        <Navigate to='/login' state={{from: location}} replace>
            
        </Navigate>
    );
};

export default PrivateRoute;