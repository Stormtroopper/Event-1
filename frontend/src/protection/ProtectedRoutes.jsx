import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = ({loggedIn}) => {
    const token = localStorage.getItem('accessToken');
    if (!loggedIn||token) {
        return <Navigate to='/login' />
    }
    return <Outlet />
}

export default ProtectedRoutes