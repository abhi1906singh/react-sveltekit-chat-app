import { Navigate, Outlet } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
 
const PrivateRoute = () => {
    const token = localStorage.getItem('token');
      let isAuthenticated = false;
    if (token) {
        try {
            const decoded = jwtDecode(token);
            isAuthenticated = decoded.exp * 1000 > Date.now();
            if (!isAuthenticated) {
                localStorage.removeItem('token');
            }
        } catch (error) {
            isAuthenticated = false
            localStorage.removeItem('token');
        }
    }
    console.log(isAuthenticated,'isAuthenticated')

    return isAuthenticated ? <Outlet /> : <Navigate to='/login' replace />;
}

export default PrivateRoute;