import { Fragment, useEffect, useState } from 'react';

import Header from '../shared/layout/Header';
import Footer from '../shared/layout/Footer';
import './Features.css';

function Features() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (!showContent) {
        setShowContent(true);
      }
    });

    return () => {
      window.removeEventListener('scroll', () => {});
    };
  }, []);

  return (
    <Fragment>
      <Header />
      <div className="container-fluid mobilemenu featuredesktop">
        <div className="row">
          <div className="col-md-5 col-sm-5 colmnright2">
            <span className="firsttext"> This is </span>
            <br />
            <span className="secondtext">your show.</span>
            <br />
            <span className="thirdtext">
              Build a business you’re proud of. We’ll keep it growing.
            </span>
          </div>
          <div className="col-md-6 col-sm-6 halfleftcro">
            <div className="container-lg my-3 halfcolmn">
              <div
                id="myCarousel"
                className="carousel slide"
                data-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="uploads/sliderimg1.png"
                      className="resposiveimg1"
                      alt="First Slide"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-1 col-sm-1"></div>
        </div>
      </div>

      <div className="container-fluid DesktopMenu featuredesktop">
        <div className="row">
          <div className="col-md-5 col-sm-5 colmnright2">
            <span className="firsttext"> This is </span>
            <br />
            <span className="secondtext">your show.</span>
            <br />
            <span className="thirdtext">
              Build a business you’re proud of. We’ll keep it growing.
            </span>
          </div>
          <div className="col-md-6 col-sm-6 halfleftcro">
            <div className="container-lg my-3 halfcolmn">
              <div
                id="myCarousel"
                className="carousel slide"
                data-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="uploads/sliderimg1.png"
                      className="resposiveimg1"
                      alt="First Slide"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-1 col-sm-1"></div>
        </div>
      </div>
      <div className="container-fluid featurecont2"></div>

      {/* HIDDEN CONENT */}
      {showContent && (
        <Fragment>
          <div className="container-fluid">
            <div className="spaceh1"></div>
            <div className="row">
              <div className="col-md-5"></div>
              <div className="col-md-2 col-sm-2 featurescod">
                <div className="centertxtfeature">
                  <div className="featuredc">Customization</div>
                </div>
              </div>
              <div className="col-md-5"></div>
              <div className="col-md-12 col-sm-12">
                <div className="headingfeature">
                  <h2 className="clarityheadfeature">Easy as it gets</h2>
                  <p className="innertextfeature">
                    Your online business should look like you so we make
                    customization painless.{' '}
                  </p>
                  <p className="innertextfeature">
                    {' '}
                    Our focus is on easy-to-use features and fewer tech
                    headaches.
                  </p>
                </div>
              </div>
            </div>
            <div className="row thirdrow">
              <div className="col-md-7 col-sm-7">
                <img
                  src="uploads/dashboard.png"
                  className="responsivefeature"
                />
              </div>
              <div className="col-md-5 col-sm-5 featurecolm1">
                <p className="jointextfeature">
                  {' '}
                  Use our domain to connect to your own
                </p>
                <br />
                <p className="innertextfeature">
                  Easily link your existing website to Teachable under a custom
                  domain.
                </p>
                <div className="spacingp">
                  <p className="jointextfeature">
                    {' '}
                    Customize your online school experience
                  </p>
                  <br />
                  <p className="innertextfeature">
                    Use our power editor to create engaging, multimedia
                    lectures, videos, and coaching sessions.
                  </p>
                </div>
                <div className="spacingp">
                  <p className="jointextfeature"> Use tools you want to use </p>
                  <br />
                  <p className="innertextfeature">
                    Think of an integration you want to use… we support it! Our
                    list of partners is exhaustive.
                  </p>
                </div>
              </div>
            </div>
            <div className="row thirdrow">
              <div className="col-md-5 col-sm-5 featurecolm3">
                <p className="jointextfeature"> Know your numbers</p>
                <br />
                <p className="innertextfeature">
                  Track sales and student insights with our comprehensive
                  dashboards.
                </p>
                <div className="spacingp">
                  <p className="jointextfeature"> Sell, sell, sell</p>
                  <br />
                  <p className="innertextfeature">
                    Create gorgeous, money-making sales pages with our flexible
                    page editor.
                  </p>
                </div>
                <div className="spacingp">
                  <p className="jointextfeature"> Make it a team effort</p>
                  <br />
                  <p className="innertextfeature">
                    Bring on the authors, team members, and contributors and
                    customize their permissions and roles; we can support them
                    and pay them for you.
                  </p>
                </div>
              </div>
              <div className="col-md-7 col-sm-7">
                <img src="uploads/thismonth.png" className="resfeaturemonth" />
              </div>
            </div>
            <div className="spaceh1"></div>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12 col-sm-12">
                <div className="fulltxt">
                  <span className="apostr">&ldquo;</span> It was important to us
                  that our courses would look beautiful and that the software
                  would be easy to use by everyone.
                </div>
                <p className="innerfeaturetxt">
                  James Blatch : Self Publishing Formula
                </p>
              </div>
            </div>
          </div>
          <div className="container-fluid thirdteachsec">
            <div className="spaceh1"></div>
            <div className="row">
              <div className="col-md-5"></div>
              <div className="col-md-2 col-sm-2 featurescod">
                <div className="centertxtfeature">
                  <div className="featuredc">Learning Tools</div>
                </div>
              </div>
              <div className="col-md-5"></div>
              <div className="col-md-12 col-sm-12">
                <div className="headingfeature">
                  <h2 className="clarityheadfeature">Teach the way you</h2>
                  <h2 className="clarityheadfeature"> want to learn.</h2>
                  <p className="innertextfeature">
                    Bring your online courses and coaching services to life with
                    student side{' '}
                  </p>
                  <p className="innertextfeature"> features. </p>
                </div>
              </div>
            </div>
            <div className="row thirdrow">
              <div className="col-md-7 col-sm-7">
                <img
                  src="uploads/menwithcamera.png"
                  className="responsiveimgcamera"
                />
              </div>
              <div className="col-md-5 col-sm-5 featurecolm1">
                <div className="spacingp"></div>
                <p className="jointextfeature"> Unlimited everything</p>
                <br />
                <p className="innertextfeature">
                  Anytime you hear unlimited in life, it’s pretty exciting. So
                  let us just say, unlimited video bandwidth, unlimited courses
                  and coaching services, and unlimited students on all paid
                  plans.
                </p>
                <div className="spacingp"></div>
              </div>
            </div>
            <div className="row thirdrow">
              <div className="col-md-5 col-sm-5 featurecolm3">
                <p className="jointextfeature"> Talk to your students live</p>
                <br />
                <p className="innertextfeature">
                  Run one-on-one sessions with easy-to-build milestone, call
                  hosting, and task features.
                </p>
                <div className="spacingp">
                  <p className="jointextfeature"> Schedule and host</p>
                  <br />
                  <p className="innertextfeature">
                    Seamlessly take clients from booking to intake to scheduling
                    and learning with our native integrations with Calendly.
                  </p>
                </div>
                <div className="spacingp">
                  <p className="jointextfeature"> Create success stories</p>
                  <br />
                  <p className="innertextfeature">
                    Engage your students with quizzes and course completion
                    certificates and ensure transformation with course
                    compliance controls that require course completion to move
                    on.
                  </p>
                </div>
              </div>
              <div className="col-md-7 col-sm-7">
                <img
                  src="uploads/coachashley.png"
                  className="resfeaturemonth"
                />
              </div>
            </div>
            <div className="spaceh1"></div>
            <div className="row thirdrow">
              <div className="col-md-7 col-sm-7">
                <img
                  src="uploads/livechat.png"
                  className="responsiveimgcamera"
                />
              </div>
              <div className="col-md-5 col-sm-5 featurecolm5">
                <p className="jointextfeature"> Feedback is fundamental</p>
                <br />
                <p className="innertextfeature">
                  We play nicely with others; use third-party forms and surveys
                  to easily gather student feedback.
                </p>
                <p className="jointextfeature">Spin up support</p>
                <br />
                <p className="innertextfeature">
                  Easily integrate with Zapier to take support to the next level
                  with Zendesk, Olark, Intercom, and others.
                </p>
              </div>
            </div>
            <div className="spaceh1"></div>
          </div>
          <div className="container-fluid">
            <div className="spaceh1"></div>
            <div className="row">
              <div className="col-md-5"></div>
              <div className="col-md-2 col-sm-2 featurescod">
                <div className="centertxtfeature">
                  <div className="featuredc">Monetization</div>
                </div>
              </div>
              <div className="col-md-5"></div>
              <div className="col-md-12 col-sm-12">
                <div className="headingfeature">
                  <h2 className="clarityheadfeature">The small matter </h2>
                  <h2 className="clarityheadfeature"> of getting paid.</h2>
                  <p className="innertextfeature">
                    This is where we really shine. We’ve put in more work than
                    any other courses{' '}
                  </p>
                  <p className="innertextfeature">
                    {' '}
                    and coaching platform to bring you money solutions that make
                    life easier.
                  </p>
                </div>
              </div>
            </div>
            <div className="row thirdrow">
              <div className="col-md-5 col-sm-5 featurecolm6">
                <p className="jointextfeature">Flex your pricing options</p>
                <br />
                <p className="innertextfeature">
                  Offer coupons and advanced pricing options including
                  subscriptions, memberships, one-time payments, bundles, and
                  more.
                </p>
                <div className="spacingp">
                  <p className="jointextfeature"> Get the word out</p>
                  <br />
                  <p className="innertextfeature">
                    Use our affiliate marketing tools to help others spread the
                    word about your business (and pay them, too).
                  </p>
                </div>
                <div className="spacingp">
                  <p className="jointextfeature"> Go global and get paid </p>
                  <br />
                  <p className="innertextfeature">
                    Accept international payment in 130+ currencies. Plus, we
                    offer PayPal and mobile pay for your online school and
                    coaching services.
                  </p>
                </div>
              </div>
              <div className="col-md-7 col-sm-7">
                <img src="uploads/currency.png" className="responsivecurr" />
              </div>
            </div>
            <div className="spaceh1"></div>
            <div className="row thirdrow">
              <div className="col-md-7 col-sm-7">
                <img
                  src="uploads/fewpoints.png"
                  className="responsiveimgcamera"
                />
              </div>
              <div className="col-md-5 col-sm-5 featurecolm5">
                <div className="spaceh1"></div>
                <p className="jointextfeature"> Follow the money</p>
                <br />
                <p className="innertextfeature">
                  Conversions pixel support, author and affiliate payouts, first
                  and last touch attribution—we handle all that.
                </p>
                <br />
                <p className="jointextfeature">No tax troubles</p>
                <br />
                <p className="innertextfeature">
                  When you sell through Teachable's gateways, we take care of EU
                  VAT.
                </p>
              </div>
            </div>
            <div className="spaceh1"> </div>
          </div>
          <div className="container-fluid fullwidsection">
            <div className="spaceh1"> </div>
            <div className="row">
              <div className="col-md-12 col-sm-12">
                <div className="fulltxt">
                  <span className="apostr">“</span> It was important to us that
                  our courses would look beautiful and that the software would
                  be easy to use by everyone.
                </div>
                <p className="innerfeaturetxt">
                  James Blatch : Self Publishing Formula
                </p>
              </div>
            </div>
          </div>
          <div className="container-fluid sixthsec">
            <div className="spaceh1"></div>
            <div className="row">
              <div className="col-md-5"></div>
              <div className="col-md-2 col-sm-2 featurescod">
                <div className="hostingtxtfeature">
                  <div className="featuredc">Hosting & Security</div>
                </div>
              </div>
              <div className="col-md-5"></div>
              <div className="col-md-12 col-sm-12">
                <div className="headingfeature">
                  <h2 className="clarityheadfeature">Let’s talk security. </h2>
                  <p className="innertextfeature">
                    {' '}
                    We take your business seriously. We know it’s a big step to
                    put your passion
                  </p>
                  <p className="innertextfeature">
                    in our hands. That’s why we keep a killer fraud team on
                    staff to fight bad guys{' '}
                  </p>
                  <p className="innertextfeature">
                    {' '}
                    on your behalf. Dark glasses and scowl not included.
                  </p>
                </div>
              </div>
            </div>
            <div className="row thirdrow">
              <div className="col-md-7 col-sm-7">
                <img src="uploads/womenlaptop.png" className="laptopimg" />
              </div>
              <div className="col-md-5 col-sm-5 featurecolm1">
                <ol>
                  <li className="innertextfeature">
                    Seamless hosting to protect your data.
                  </li>
                  <br />
                  <li className="innertextfeature">
                    Speaking of data, you own yours—we don’t. That’s how it
                    should be.
                  </li>
                  <div className="spacingp">
                    <li className="innertextfeature">
                      Seamless hosting to protect your data.
                    </li>
                    <br />
                    <li className="innertextfeature">
                      24/7 monitoring so outages don’t knock you out.
                    </li>
                  </div>
                  <div className="spacingp">
                    <li className="innertextfeature">
                      Instant upgrades—no waiting around for the latest
                      features.
                    </li>
                    <br />
                    <li className="innertextfeature">
                      A 2048-bit SSL certificate keeps your students'
                      information secure during login and checkout.
                    </li>
                    <li className="innertextfeature">
                      We only work with payment providers that are PCI level-1
                      compliant, so your and your students’ data is safe and
                      secure.
                    </li>
                  </div>
                </ol>
              </div>
              <div className="spaceh1"></div>
              <div className="spaceh1"></div>
            </div>
          </div>

          <div className="container-fluid">
            <div className="row awardrow1">
              <div className="col-md-6 col-sm-6 awardrightt">
                <div className="awardrightt1"></div>
                <div className="textaward">
                  Still need help? Reach out to our award-winning customer care
                  team and we’ll find a solution.
                </div>
                <div className="btngetaward">
                  <a href="#" className="awardbtn">
                    {' '}
                    Contact Us{' '}
                  </a>
                </div>
                <div className="awardrightt1"></div>
              </div>
              <div className="col-md-6 col-sm-6 awardleft">
                <div className="awardleft1"></div>
                <div className="imagesection">
                  <img
                    src="uploads/headphone.png"
                    className="quickimagesection"
                  />
                </div>
                <div className="awardleft1"></div>
              </div>
            </div>
          </div>
          <div className="container-fluid signupsec">
            <div className="row signuprow">
              <div className="col-md-12 col-sm-12">
                <div className="textsignup"> Share what you know.</div>
                <div className="textsignup1"> Sign up free today.</div>
                <div className="getstarsign">
                  <button className="submit bttn-primary"> Get Started </button>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      )}
      <Footer />
    </Fragment>
  );
}

export default Features;
