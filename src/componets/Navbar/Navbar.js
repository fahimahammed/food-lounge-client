import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext);
    console.log(user);
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/foods'>Foods</Link></li>
                    
                    {
                        user?.email ? <li onClick={logOut}><a>Log out</a></li> 
                        : <li><Link to='/login'>Login</Link></li> 
                    }
                </ul>
            </div>
        </div>
    );
};

export default Navbar;