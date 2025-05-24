import React, { useState } from 'react';
import auth from '../Firebase/Firebase.init';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';

const Register = () => {

    // function Signup(event) {
    //     event.preventDefault();
    //     console.log(event.target.name);
    //     // console.log(event.target.password.value);
    // }
    const [error, setError] = useState();
    const [success, setSuccess] = useState(false);


    function handleRegister(e) {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        setError('');
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user);
                sendEmailVerification(auth.currentUser)
                    .then(() => {
                        console.log('verification mail sent');
                    })
                    if(!result.user.emailVerified) setError('please verify your email');
                    else setSuccess(true);

            })
            .catch((error) => {
                setError(error.message);
                setSuccess(false);
            })
    }
    //     
    return (
        <div>
            <p className='mb-5 text-2xl font-bold'>Registration Page</p>
            <form onSubmit={handleRegister}>
                <div className='flex md:justify-center md:items-center'>
                    {

                        error && <p className='text-red-600 md:w-[17vw]'>this email is already in use !</p>
                    }
                    {
                        success && <p className='text-green-600'>sign up is successfull.</p>
                    }

                </div>
                <label className="input input-bordered gap-2 mb-5">
                    <div className='flex md:items-center md:justify-center'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70 mr-3">
                            <path
                                d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                            <path
                                d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                        </svg>
                        <input name="email" type="email" className="grow" placeholder="Email" />
                    </div>
                </label>

                <br />
                <label className="input input-bordered gap-2 mb-5">
                    <div className='flex md:items-center md:justify-center'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70 mr-3">
                            <path
                                fillRule="evenodd"
                                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                clipRule="evenodd" />
                        </svg>
                        <input name="password" type="password" className="grow" placeholder="Password" />
                    </div>
                </label>
                <br />
                <button className='btn btn-primary'>Sign Up</button>

            </form >
        </div >
    );
};

export default Register;