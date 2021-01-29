import { Fragment, useEffect, useState } from 'react';

import './login.css';

function Login() {

  return (
    <Fragment>
        <div className="container-fluid background-light">
        <div className="container bg-cont">
          <div className="space1" />
          <div className="row main-row">
            <div className="col-md-5 leftside">
              <div className="space" />
              <div className="signuptxt">Log Into Teachable</div>
            </div>
            <div className="col-sm-7 rightside">
              <div className="space2" />
              <form action="/action_page.php">
                <div className="form-group">
                  <label htmlFor="pwd">Email Address:</label>
                  <input type="email" className="form-control" id="pwd" />
                </div>
                <div className="form-group">
                  <label htmlFor="Password">Password:</label>
                  <input type="Password" className="form-control" id="Password" />
                </div>
                <div className="cntrbtnfg">
                  <button type="submit" className="btn btn-primary1">Log Into Teachable</button>
                </div>
                <div className="cntrbtnfg">
                  <a className="link-below-button" href="#">Forgot Password?</a>
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
                  Don't have an account? <span className="terms-txt1"><a href="#" className="terms-txt1"> Sign Up</a> </span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Login;
