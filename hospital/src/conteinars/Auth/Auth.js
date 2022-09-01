import React, { useState } from 'react';

function Auth(props) {

    const [userType, setUserType] = useState('login/singup')

    return (


        <section id="appointment" className="appointment">
            <div className="container">
                <div className="section-title">
                    {
                        userType === 'Login'?
                        <h2>Login</h2>
                        :
                        <h2>singup</h2>

                    }
                    

                </div>

                <div role="form" className="php-email-form">
                    {
                        userType ==='Login'?
                        null:
                        <div className="row">
                        <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                        <div className="validate" />
                    </div>
                    }
                    
                        <div className="col-md-4 form-group">
                            
                        <div className="row">
                            <div className="col-md-4 form-group mt-3 mt-md-0">
                                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                                <div className="validate" />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-4 form-group mt-3 mt-md-0">
                                <input type="email" className="form-control" name="password" id="password" placeholder="Your password" data-rule="password" data-msg="Please enter a valid password" />
                                <div className="validate" />
                            </div>
                        </div>
                    </div>
                    <div className="row">


                    </div>

                    <div className="mb-3">
                        <div className="loading">Loading</div>
                        <div className="error-message" />
                        <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
                    </div>
                    {
                        userType === 'Login' ?
                            <div className="text-center"><button type="submit">Signup</button></div>
                            :
                            <div className="text-center"><button type="submit">Login</button></div>


                    }
                    {/* {
                        userType === 'Login' ?
                            <div>Create a new Account<button type="submit">Signup</button></div>
                            :
                            <div>Already Have Account<button type="submit">Login</button></div>
                    } */}
                    {
                        userType === 'Login' ?
                            <div>Create a new Account<button onClick={() => setUserType('Signup')}>Signup</button></div>
                            :
                            <div>Already Have Account<button onClick={() => setUserType('Login')}>Login</button></div>
                    }
                </div>
            </div>
        </section>

    );
}

export default Auth;