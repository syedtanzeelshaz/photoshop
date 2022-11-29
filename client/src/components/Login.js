import React from 'react'
import {NavLink} from "react-router-dom"
 
const Login = () => {
    return (
        <>
            <section className='signin'>
                <div className="signin-container mt-5">
                    <div className="signin-form">
                        <div className="signin-tag"><h2>Sign In</h2></div>
                        <form className="signin-form" id="signin-form">
                            <div className='form-group'>
                                <label htmlFor="email">
                                <i class="zmdi zmdi-email material-icons-name"></i>
                                </label>
                                <input className="fill" type="text" name="email" id="email" autoComplete='off' placeholder='Your email' />
                            </div>

                            <div className='form-group'>
                                <label htmlFor="password">
                                    <i className="zmdi zmdi-circle-o material-icons-name"></i>
                                </label>
                                <input className="fill" type="text" name="password" id="password" autoComplete='off' placeholder='password' />
                            </div>
                        </form>

                        <div className="signin-btns">
                            <button className='signin-btn'>Sign In</button>
                            <button className='signin-reset'>Reset</button>
                        </div>

                        <div id="not-yet-reg">
                            <NavLink className="all-reg" to="/signup">Not yet registered !</NavLink>
                        </div>
                    </div>

                
                </div>

                
                {/* <div className="signup-right">
                    <img className="signup-pic" src={signuppic} alt="signupic"></img>
                    <div><NavLink className="all-reg" to="/login">Already Registered ?</NavLink></div>
                </div> */}
                
            </section>
        </>
    )
}

export default Login