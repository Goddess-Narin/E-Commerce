import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
const title = 'Register';
const socialTitle = 'Register with Social Media';
const btnText = 'Signup Now';

const SignUp = () => {
    const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login form submitted');
  };

  const handleRegister = (event) => {
    event.preventDefault();
    const form =event.target;
    const email= form.email.value 
    const password = form.password.value 
    const confirmpassword = form.confirmpassword.value
    console.log(email, password,confirmpassword)
  };
  return (
    <div className="mt-4 mx-4">
      <div className="login-section padding-tb section-bg">
        <div className="container">
          <div className="account-wrapper">
            <h3 className="title">{title}</h3>
            <form className="account-form" onSubmit={handleLogin}>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email Address *"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Your Password *"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="confirmpassword"
                  name="password"
                  id="password"
                  placeholder="Your Password *"
                  required
                />
              </div>
              <div className="form-group">
                <div className="d-flex justify-content-between flex-wrap pt-sm-2">
                  <div className="checkgroup">
                    <input type="checkbox" name="remember" id="remember" />
                    <label htmlFor="remember">Remember Me</label>
                  </div>
                  <Link to="/forgetpass">Forget Password</Link>
                </div>
              </div>
              <div className="form-group">
                <button type="submit" className="d-block lab-btn">
                  <span>{btnText}</span>
                </button>
              </div>
            </form>

            {/* Account Bottom */}
            <div className="account-bottom">
              <span className="d-block cate pt-10">
                Already Have an Account Yet?{' '}<Link to="/login">Sign Up</Link>
                <button
                  onClick={handleRegister}
                  style={{ background: 'none', border: 'none', color: 'blue', cursor: 'pointer' }}
                >
                  Sign Up
                </button>
              </span>
            </div>
              
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
