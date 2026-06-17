import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = ({ loggedIn, setLoggedIn }) => {
  const handleLogout = () => {
    setLoggedIn(false);
    localStorage.removeItem("token");
  };
    return (

        <div>

            <nav className="flex items-center justify-between px-8 py-5 border-b border-slate-800">
                <h1 className="text-2xl font-bold text-blue-400">
                    PDF Extractor
                </h1>
                {!loggedIn ? (
                    <div className="flex gap-4">
                        <Link
                            to="/login"
                            className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white"
                        >
                            Login
                        </Link>

                        <Link
                            to="/register"
                            className="px-4 py-2 text-sm font-medium bg-blue-600 rounded-lg hover:bg-blue-700 transition"
                        >
                            Register
                        </Link>
                    </div>
                ) : (
                    <button
                        onClick={handleLogout}
                        className="px-4 py-2 text-sm font-medium bg-red-600 rounded-lg hover:bg-red-700 transition"
                    >
                        Logout
                    </button>
                )}
            </nav>
        </div>
    )
}

export default NavBar