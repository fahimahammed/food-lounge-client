import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const Register = () => {

    const {createUser } = useContext(AuthContext);

    const handleRegister = (event) => {
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password)
        createUser(email, password)
        .then(user =>{
            console.log(user)
        })
        .catch(err => {
            console.log(err)
        })
    }
    return (
        <div>
            <h1 className='text-center font-bold text-2xl'>Register Now</h1>
            <form onSubmit={handleRegister} className='text-center'>
                <div className='my-4'>
                    <input type="email" name="email" placeholder="Enter your email" className="input w-full max-w-xs" />
                </div>
                <div className='my-4'>
                    <input type="password" name="password" placeholder="Enter your password" className="input w-full max-w-xs" />
                </div>
                <div>
                    <button type="submit" value="Register" className="btn w-full max-w-xs" ></button>
                </div>
            </form>
            <div>
                <p className='text-center my-4'>Have an accoutn? <Link to='/login'>Login</Link></p>
            </div>
        </div>
    );
};

export default Register;