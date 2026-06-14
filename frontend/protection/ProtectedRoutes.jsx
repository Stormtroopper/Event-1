import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {
    const token = localStorage.getItem('accessToken');
    if (!token) {
        return <Navigate to='/login' />
    }
    return <Outlet />
}

export default ProtectedRoutes