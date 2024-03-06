import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from './authSlice';

//checking authentication
//if there is a token then return the outlet, if no token then navigated back to the login
const RequireAuth = () => {
    const token = useSelector(selectCurrentToken)
    const location = useLocation();
    return (
        token? 
        <Outlet /> 
        : <Navigate to="/login" state={{ from: location }} replace/>

    )
 }

export default RequireAuth

