import { Fragment, useEffect, useState } from 'react';

import './login.css';

function Register() {

  return (
    <Fragment>
        <div className="container-fluid background-light">
        <div className="container bg-cont">
          <div className="space1" />
          <div className="row main-row">
            <div className="col-md-5 leftside">
              <div className="space" />
              <div className="signuptxt">Sign Up to Teachable</div>
            </div>
            <div className="col-sm-7 rightside">
              <div className="space2" />
              <form action="/action_page.php">
                <div className="form-group">
                  <label htmlFor="name">Full Name:</label>
                  <input type="name" className="form-control" id="name" />
                </div>
                <div className="form-group">
                  <label htmlFor="pwd">Email Address:</label>
                  <input type="email" className="form-control" id="pwd" />
                </div>
                <div className="half-divided">
                  <div className="form-group1">
                    <label htmlFor="pwd">Password:</label>
                    <input type="email" className="form-control" id="pwd" />
                  </div>
                  <div className="form-group2">
                    <label htmlFor="pwd">Confirm Password:</label>
                    <input type="email" className="form-control" id="pwd" />
                  </div>
                </div>
                <div className="form-group form-check">
                  <label className="form-check-label">
                    <input className="form-check-input" type="checkbox" /> I agree to the<span className="terms-txt"> Terms of Use </span>and <span className="terms-txt">Privacy Policy</span>
                  </label>
                </div>
                <div className="cntrbtn">
                  <button type="submit" className="btn btn-primary">Create Account</button>
                </div>
              </form>
            </div>
          </div>
          <div className="row secrowsign">
            <div className="col-md-5">
            </div>
            <div className="col-md-7 colmsevn">
              <div className="form-groupacc">
                <label className="form-acc-label">
                  Already have an account?<span className="terms-txt1"><a href="#" className="terms-txt1"> Log In</a> </span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

    </Fragment>
  );
}

export default Register;
