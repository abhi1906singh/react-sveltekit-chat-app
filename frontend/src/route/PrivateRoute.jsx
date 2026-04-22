import { Navigate, Outlet } from "react-router-dom";
 
const PrivateRoute = () => {
    const isAuthenticated = localStorage.getItem('token') != null;
    console.log(isAuthenticated,'isAuthenticated')

    return isAuthenticated ? <Outlet /> : <Navigate to='/login' replace />;
}

export default PrivateRoute;