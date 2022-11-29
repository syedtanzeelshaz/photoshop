import React from 'react'
import {NavLink} from "react-router-dom"
import signuppic from '../images/signuppic.jpg'

const Signup = () => {
    return (
        <>
            <section className='signup'>
                <div className="signup-container mt-5">
                    <div className="signup-form">
                        <div className="signup-tag"><h2>Sign up</h2></div>
                        <form className="register-form" id="register-form">
                            <div className='form-group'>
                                <label htmlFor='name'>
                                    <i className="zmdi zmdi-account-circle material-icons-name"></i>
                                </label>
                                <input className="fill" type="text" name="name" id="name" autoComplete='off' placeholder='Your name' />
                            </div>

                            <div className='form-group'>
                                <label htmlFor="email">
                                <i class="zmdi zmdi-email material-icons-name"></i>
                                </label>
                                <input className="fill" type="text" name="email" id="email" autoComplete='off' placeholder='Your email' />
                            </div>

                            <div className='form-group'>
                                <label htmlFor="phone">
                                    <i className="zmdi zmdi-smartphone-android material-icons-name"></i>
                                </label>
                                <input className="fill" type="text" name="phone" id="phone" autoComplete='off' placeholder='Your phone number' />
                            </div>

                            <div className='form-group'>
                                <label htmlFor="work">
                                    <i className="zmdi zmdi-account-box-mail material-icons-name"></i>
                                </label>
                                <input className="fill" type="text" name="work" id="work" autoComplete='off' placeholder="Profession" />
                            </div>

                            <div className='form-group'>
                                <label htmlFor="password">
                                    <i className="zmdi zmdi-circle-o material-icons-name"></i>
                                </label>
                                <input className="fill" type="text" name="password" id="password" autoComplete='off' placeholder='password' />
                            </div>

                            <div className='form-group'>
                                <label htmlFor="cpassword">
                                    <i className="zmdi zmdi-circle material-icons-name"></i>
                                </label>
                                <input className="fill" type="text" name="cpassword" id="cpassword" autoComplete='off' placeholder='confirm password' />
                            </div>
                        </form>
                        <div>
                            <button id="signup-btn">SUBMIT</button>
                        </div>
                    </div>
                </div>

                <div id="signup-rt">
                <div className="signup-right">
                    <img className="signup-pic" src={signuppic} alt="signupic"></img>
                </div>
                <div><NavLink className="all-reg" to="/login">Already Registered ?</NavLink></div>
                </div>
            </section>
        </>
    )
}

export default Signup