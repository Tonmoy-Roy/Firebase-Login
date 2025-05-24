import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef, useState } from 'react';
import auth from '../Firebase/Firebase.init';

const Login = () => {
    const [user, setUser] = useState(false);
    const [error1, setError1] = useState(false);
    const emailRef = useRef();
    function login(e) {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(email, password);
        setUser('');
        setError1('');
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(true);
            })
            .catch((error) => {
                setError1(true);
            })
    }
    function forgetpass() {
        const email = emailRef.current.value;
        sendPasswordResetEmail(auth, email)
            .then((result) => {
                alert('Reset email sent, please check your email');
             })
            .catch((error) => {

             })
    }

    return (
        <div>
            <p className='mb-5 text-2xl font-bold'>Login Page</p>
            <form onSubmit={login}>
                <div className="hero bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                            <div className="card-body">
                                {
                                    user && <p className='text-green-600'>Login is Succesfull.</p>
                                }
                                {
                                    error1 && <p className='text-red-600'>Please enter corret email & Password!</p>
                                }
                                <fieldset className="fieldset">
                                    <label className="label">Email</label>
                                    <input name="email" type="email" className="input" placeholder="Email" ref={emailRef} />
                                    <label className="label">Password</label>
                                    <input name="password" type="password" className="input" placeholder="Password" />
                                    <label onClick={forgetpass} className="label" >
                                        <a href="#" className="label-text-alt linklink- hover">Forgot password?</a>
                                    </label >
                                    <button className="btn btn-neutral mt-4">Login</button>
                                </fieldset>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;
