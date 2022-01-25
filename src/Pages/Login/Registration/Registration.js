import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import "../Login/Login.css";

const Registration = () => {
    const { error, signInUsingGoogle,
        handleNameChange, handleEmailChange, handlePasswordChange, handleOnSubmit, message } = useAuth();
    return (
        // Display the registration form
        <div className="App container ">
            <div className="row">
                <div className="login-area col-md-6 mt-4 mb-5">
                    <div>
                        <div className="login-box d-flex align-items-center justify-content-center">
                            <div className="login">
                                <div className="login-box">
                                    <h2 className="text-danger"><i className="fas fa-user-plus"></i> Pease Register </h2>
                                    {/* <p>{message}</p> */}
                                    <form onSubmit={handleOnSubmit}>
                                        <input
                                            onChange={handleNameChange}
                                            className="input-felid"
                                            type="text"
                                            name="name"
                                            placeholder="Enter your Name"
                                        />
                                        <br />
                                        <input
                                            onChange={handleEmailChange}
                                            className="input-felid"
                                            type="email"
                                            name="email"
                                            placeholder="Enter your Email"
                                        />
                                        <br />
                                        <input
                                            onChange={handlePasswordChange}
                                            className="input-felid"
                                            type="password"
                                            name="password"
                                            placeholder="Enter your Password"
                                        />
                                        <p className="text-danger">{error}</p>
                                        <input
                                            className="mt-3 w-75 btn btn-danger m-auto rounded-3"
                                            type="submit"
                                            value="Register"
                                        />
                                    </form>
                                </div>
                                <button className="me-2 btn btn-primary text-white" onClick={signInUsingGoogle}>
                                    <i className="fab fa-google"></i> Signup with Google
                                </button>
                                <br /><br />
                                <Link to="/login" className="text-danger">Already have an account?</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;