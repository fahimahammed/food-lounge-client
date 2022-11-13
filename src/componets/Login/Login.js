import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const Login = () => {
    const {loginUser } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    console.log(from);

    const handleLogin = (event) => {
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password)
        loginUser(email, password)
        .then(user =>{
            navigate(from, {replace: true});
            // navigate('/checkout')
            console.log(user)
        })
        .catch(err => {
            console.log(err)
        })
    }
    return (
        <div>
            <h1 className='text-center font-bold text-2xl'>Login Now</h1>
            <form onSubmit={handleLogin} className='text-center'>
                <div className='my-4'>
                    <input type="email" name="email" placeholder="Enter your email" className="input w-full max-w-xs" />
                </div>
                <div className='my-4'>
                    <input type="password" name="password" placeholder="Enter your password" className="input w-full max-w-xs" />
                </div>
                <div>
                    <input type="submit" value="Login" className="btn w-full max-w-xs" />
                </div>
            </form>
            <div>
                <p className='text-center my-4'>Create accout? <Link to='/register'>Register</Link></p>
            </div>
        </div>
    );
};

export default Login;