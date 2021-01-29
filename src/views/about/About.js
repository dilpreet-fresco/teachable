import { Fragment, useEffect, useState } from 'react';

import Footer from '../shared/layout/Footer';
import Header from '../shared/layout/Header';
import './About.css';

function About() {
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

      <div className="container-fluid  mobilemenu aboutdesktop">
        <div className="row">
          <div className="mobilespace"></div>
          <div className="col-md-4 col-sm-4"></div>
          <div className="col-md-8 col-sm-8">
            <div className="spaceabout"></div>
            <span className="abfirsttext">There had to</span>
            <br />
            <span className="abfirsttext">be a better way.</span>
            <br />
            <span className="abfirsttext"> So we built it.</span>
            <br />
          </div>

          <div className="col-md-7 col-sm-7 imageabtcolmn">
            <div className="mobilespace1"></div>
            <img
              src="uploads/aboutfirst.png"
              className="aboutfirstimg"
              alt="First Slide"
            />
          </div>

          <div className="col-md-5 col-sm-5"></div>
        </div>
      </div>

      <div className="container-fluid DesktopMenu aboutdesktop">
        <div className="row">
          <div className="col-md-4 col-sm-4 "></div>
          <div className="col-md-8 col-sm-8 aboutfstcolm">
            <div className="spaceabout"></div>
            <span className="abfirsttext">There had to</span>
            <br />
            <span className="abfirsttext">be a better way.</span>
            <br />
            <span className="abfirsttext"> So we built it.</span>
            <br />
          </div>

          <div className="col-md-7 col-sm-7 imageabtcolmn">
            <img
              src="uploads/aboutfirst.png"
              className="aboutfirstimg"
              alt="First Slide"
            />
          </div>
          <div className="col-md-5 col-sm-5"></div>
        </div>
      </div>

      {showContent && (
        <Fragment>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-4 col-sm-4"></div>

              <div className="col-md-6 col-sm-6">
                <div className="space"></div>
                <div className="centertxtfeature">
                  <div className="featuredc">Chapter One</div>
                </div>
                <h2 className="clarityheadfeature">
                  Where else to start but at the beginning
                </h2>
                <p className="innertextfeature">
                  We believe in the transformative power of knowledge. We
                  believe it, because we’ve experienced and seen it first hand.
                  How those 10,000 hours of expertise can swiftly turn into
                  $10,000. Or even $100,000. And how empires can be built on
                  goat milk, podcasting, and VR roller coasters.
                </p>
                <p className="innertextfeature">
                  From the Bay area to Brooklyn, Fedora to Teachable, one person
                  to over 150–our story is one of transformation too.
                </p>
                <div className="space"></div>
              </div>
              <div className="col-md-2 col-sm-2"></div>
            </div>
          </div>

          <div className="container-fluid textcenter">
            <div className="row awardrow1">
              <div className="col-md-6 col-sm-6 aboutleft">
                <div className="aboutleft1"></div>
                <div className="fulltxtabout1">
                  <span className="apostr">“</span> In the future, entrepreneurs
                  will sell
                  <br />
                  knowledge over products.
                </div>
                <div className="space"></div>
                <div className="textaboutdiv">Ankur Nagpal : Founder / CEO</div>

                <div className="aboutleft1"></div>
              </div>
              <div className="col-md-6 col-sm-6 aboutrightt">
                <div className="aboutrightt1"></div>
                <div className="imagesection">
                  <img
                    src="uploads/founder.png"
                    className="quickimagesection"
                  />
                </div>

                <div className="aboutrightt1"></div>
              </div>
            </div>
          </div>

          <div className="container-fluid">
            <div className="spaceh1"></div>
            <div className="row">
              <div className="col-md-12 col-sm-12">
                <div className="headingfeature">
                  <p className="jointextfeature">
                    Studio apartment beginnings{' '}
                  </p>
                </div>
              </div>
              <div className="col-md-4"></div>
              <div className="col-md-6">
                <p className="innertextfeature">
                  {' '}
                  Late one night in 2013, our founder and CEO Ankur Nagpal, put
                  the finishing touches to what would become the predecessor of
                  Teachable. A recent graduate of UC Berkeley and the newest
                  resident of New York, Ankur had been instructing a course in
                  marketing created through another course platform, when he
                  decided that he could build something better. Something with
                  more customization tools and a more profitable payment system.
                </p>
                <p className="innertextfeature">
                  It was called Fedora. And as soon as its homepage was open for
                  business, we started to welcome scores of experts in feng
                  shui, handpanning, email marketing, coding, and sourdough
                  baking, ready to craft their knowledge into beautiful courses.
                </p>
              </div>
              <div className="col-md-2"></div>
            </div>
            <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-6">
                <div className="space"></div>
                <p className="jointextfeature">
                  The art of building a business{' '}
                </p>

                <p className="innertextfeature">
                  {' '}
                  Just two years later, our team of one in a studio apartment in
                  Williamsburg had grown to a team of 15 coders, marketers, and
                  finance experts in an office in Manhattan. Valued at 8 million
                  dollars, and growing each day in sign-ups and knowledge, it
                  was time for a new name. And Teachable, became Teachable.
                </p>
              </div>
              <div className="col-md-2"></div>
              <div className="container desktopslider">
                <div className="row">
                  <div className="space"></div>
                </div>
                <ul className="nav nav-tabs">
                  <li className="active">
                    <a href="#tab1" data-toggle="tab"></a>
                  </li>
                  <li>
                    <a href="#tab2" data-toggle="tab"></a>
                  </li>
                  <li>
                    <a href="#tab3" data-toggle="tab"></a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div className="tab-pane active" id="tab1">
                    <div className="row" style={{ margin: '0 0 0 0' }}>
                      <div className="col-md-6">
                        <img src="uploads/sliding1.png" className="reslide" />
                      </div>
                      <div className="col-md-6">
                        <img src="uploads/sliding2.png" className="reslide" />
                      </div>
                    </div>
                    <a className="btn btn-primary btnNext">Next</a>
                  </div>
                  <div className="tab-pane" id="tab2">
                    <div className="col-md-6">
                      <img src="uploads/sliding2.png" className="reslide" />
                    </div>
                    <div className="col-md-6">
                      <img src="uploads/sliding3.png" className="reslide" />
                    </div>
                    <a className="btn btn-primary btnNext">Next</a>
                    <a
                      className="btn btn-primary btnPrevious"
                      style={{
                        position: 'relative',
                        top: '-358px',
                        float: 'left',
                        left: '-574px',
                      }}
                    >
                      Previous
                    </a>
                  </div>
                  <div className="tab-pane" id="tab3">
                    <div className="col-md-6">
                      <img src="uploads/sliding3.png" className="reslide" />
                    </div>
                    <div className="col-md-6">
                      <img src="uploads/sliding4.png" className="reslide" />
                    </div>
                    <a
                      className="btn-primary btnPrevious"
                      style={{
                        position: 'relative',
                        float: 'left',
                        left: '-565px',
                        top: '-56px',
                      }}
                    >
                      Previous
                    </a>
                  </div>
                  <div className="space"></div>
                </div>
              </div>

              <div className="container mobileslider">
                <ul className="nav nav-tabs">
                  <li className="active">
                    <a href="#tab11" data-toggle="tab"></a>
                  </li>
                  <li>
                    <a href="#tab22" data-toggle="tab"></a>
                  </li>
                  <li>
                    <a href="#tab33" data-toggle="tab"></a>
                  </li>
                  <li>
                    <a href="#tab44" data-toggle="tab"></a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div className="tab-pane active" id="tab11">
                    <div className="row" style={{ margin: '0 0 0 0' }}>
                      <div className="col-md-12">
                        <img src="uploads/sliding1.png" className="reslide" />
                      </div>
                    </div>
                    <a
                      className="btn btn-primary btnNext"
                      style={{
                        float: 'right',
                        position: 'relative',
                        top: '-119px',
                        left: '14px',
                      }}
                    >
                      Next
                    </a>
                  </div>
                  <div className="tab-pane" id="tab22">
                    <div className="col-md-12">
                      <img src="uploads/sliding2.png" className="reslide" />
                    </div>

                    <a
                      className="btn btn-primary btnNext"
                      style={{
                        float: 'right',
                        position: 'relative',
                        top: '-232px',
                        left: '14px',
                      }}
                    >
                      Next
                    </a>
                    <a className="btn btn-primary btnPrevious">Previous</a>
                  </div>
                  <div className="tab-pane" id="tab33">
                    <div className="col-md-6">
                      <img src="uploads/sliding3.png" className="reslide" />
                    </div>

                    <a
                      className="btn btn-primary btnNext"
                      style={{
                        float: 'right',
                        position: 'relative',
                        top: '-232px',
                        left: '14px',
                      }}
                    >
                      Next
                    </a>
                    <a className="btn btn-primary btnPrevious">Previous</a>
                  </div>
                  <div className="tab-pane" id="tab44">
                    <div className="col-md-6">
                      <img src="uploads/sliding4.png" className="reslide" />
                    </div>

                    <a
                      className="btn btn-primary btnPrevious"
                      style={{ position: 'relative', top: '-164px' }}
                    >
                      Previous
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 col-sm-12">
                <div className="headingfeature">
                  <p className="jointextfeature">
                    Studio apartment beginnings{' '}
                  </p>
                </div>
              </div>
              <div className="col-md-4"></div>
              <div className="col-md-6">
                <p className="innertextfeature">
                  {' '}
                  Late one night in 2013, our founder and CEO Ankur Nagpal, put
                  the finishing touches to what would become the predecessor of
                  Teachable. A recent graduate of UC Berkeley and the newest
                  resident of New York, Ankur had been instructing a course in
                  marketing created through another course platform, when he
                  decided that he could build something better. Something with
                  more customization tools and a more profitable payment system.
                </p>
                <p className="innertextfeature">
                  It was called Fedora. And as soon as its homepage was open for
                  business, we started to welcome scores of experts in feng
                  shui, handpanning, email marketing, coding, and sourdough
                  baking, ready to craft their knowledge into beautiful courses.
                </p>
              </div>
              <div className="col-md-2"></div>
            </div>
          </div>

          <div className="container-fluid">
            <div className="spaceh1"></div>
            <div className="row partionedrow">
              <div className="col-md-12 col-sm-12 mobilemegbtm">
                <div className="fulltxt">
                  <span className="apostr">&ldquo;</span> Transparency is one of
                  the four core internal values at Teachable. We believe in
                  making every single aspect of our business transparent
                  internally.
                </div>
                <p className="innerfeaturetxtab">
                  Ankur Nagpal : Founder / CEO
                </p>
              </div>
              <div className="col-md-12 col-sm-12 colmnnine">
                <section className="text-center">
                  <a onClick={"changeVideo('e80BbX05D7Y')"}>
                    <img src="uploads/videosec.png" />
                  </a>
                </section>
                <div
                  className="modal fade"
                  id="myModal"
                  tabIndex="-1"
                  role="dialog"
                  aria-labelledby="myModalLabel"
                >
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-body">
                        <iframe
                          id="iframeYoutube"
                          width="560"
                          height="315"
                          src="https://www.youtube.com/embed/e80BbX05D7Y"
                          frameBorder="0"
                          allowFullScreen
                          style={{ maxWidth: '-webkit-fill-available' }}
                        ></iframe>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btnclose btn-default"
                          data-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
          <div className="container-fluid thirdteachsecab">
            <div className="spaceh1"></div>
            <div className="spaceh1"></div>
          </div>

          <div className="container-fluid thirdteachsec">
            <div className="spaceh1"></div>
            <div className="row">
              <div className="col-md-12 col-sm-12">
                <p className="innertextfeature">
                  6 years in the making. Learn what makes Teachable unique.{' '}
                </p>
                <div className="spaceh1"></div>
              </div>
              <div className="col-md-4"></div>
              <div className="col-md-2 col-sm-2 featurescod">
                <div className="centertxtfeature">
                  <div className="featuredc">Chapter Two</div>
                </div>
              </div>
              <div className="col-md-6"></div>
              <div className="col-md-4 col-sm-4"></div>
              <div className="col-md-6 col-sm-6">
                <h2 className="clarityheadfeature">Actions speak louder</h2>
                <p className="innertextfeature">
                  We’re a team of over 150 makers, doers, designers, chefs,
                  coders, marketers, writers, and learning devotees, who show up
                  everyday to make Teachable better. Together we share, laugh,
                  work hard, cocktail hour hard, and continue to learn from the
                  world and one another—united by our curiosity and our quest
                  for knowledge. These are the values we hold strong, and what
                  you can expect when you partner with Teachable to build a
                  business.{' '}
                </p>
                <p className="innertextfeature"> features. </p>
              </div>
              <div className="col-md-2 col-sm-2"></div>
            </div>
            <div className="row thirdrow">
              <div className="col-md-7 col-sm-7">
                <img
                  src="uploads/leftaboutimg.png"
                  className="responsiveimgabout"
                />
              </div>
              <div className="col-md-5 col-sm-5 featurecolmab">
                <div className="spacingp"></div>
                <p className="jointextfeature">Never not learning</p>
                <br />
                <p className="innertextfeature">
                  Like our members, we are always learning. We seek ways to grow
                  our knowledge every day, and everything we build encourages
                  our members to take the same path. We know that knowledge is
                  transformative and more learning always leads to a better way
                  of doing things.
                </p>
                <div className="spacingp"></div>
                <p className="jointextfeature">Opt for optimism</p>
                <br />
                <p className="innertextfeature">
                  Leading with optimism means assuming the best of your
                  coworkers, collaborators, partners, and members. For us,
                  optimism doesn’t mean rose-colored glasses, it means facing
                  the future with confidence and hope, and treating obstacles as
                  lessons to be learned.
                </p>
                <div className="spacingp"></div>
                <p className="jointextfeature">Worth the work</p>
                <br />
                <p className="innertextfeature">
                  Building a business takes persistence and that enduring focus
                  on meaningful growth is one we share with our members. We
                  don’t shy away from the hard work because that work brings
                  growth of its own. Just like our members, we have a vision of
                  a better future and that’s what drives us.
                </p>
              </div>
            </div>

            <div className="row thirdrow">
              <div className="col-md-7 col-sm-7 featurecolmab1">
                <p className="jointextfeature"> Choose integrity</p>
                <br />
                <p className="innertextfeature">
                  We display our integrity every day as we operate with care,
                  empathy, transparency, and truthfulness. The trust of our
                  customers is essential. They put their faith in us to
                  transform their business, and we deliver on that trust every
                  single day.
                </p>
                <div className="spacingp">
                  <p className="jointextfeature"> Together is better</p>
                  <br />
                  <p className="innertextfeature">
                    It takes some serious creativity and expertise from people
                    in every part of our community to reach our goals and help
                    our customers realize theirs. We are at our best when we
                    work together, learn from each other, and support one
                    another.
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
              <div className="col-md-5 col-sm-5">
                <img
                  src="uploads/teachablebullimg.png"
                  className="resfeaturemonth"
                />
              </div>
              <div className="col-md-6 col-sm-6">
                <img
                  src="uploads/ladywithboy.png"
                  className="resfeaturemonthimg1"
                />
              </div>
              <div className="col-md-6 col-sm-6">
                <img
                  src="uploads/groupmem.png"
                  className="resfeaturemonthimg"
                />
              </div>
            </div>
          </div>

          <div className="container-fluid thirdteachsec"></div>

          <div className="container-fluid">
            <div className="spaceh1"></div>
            <div className="spaceh1"></div>
            <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-2 col-sm-2 featurescod">
                <div className="centertxtfeature">
                  <div className="featuredc">Chapter Three</div>
                </div>
              </div>
              <div className="col-md-6"></div>
              <div className="col-md-4 col-sm-4"></div>
              <div className="col-md-6 col-sm-6">
                <h2 className="clarityheadfeature">Meet our wonderful team</h2>
                <p className="innertextfeature">
                  We're a tight-knit group of curious creatures, always
                  learning, and constantly seeking out new perspectives and
                  ideas. Kevin and Kaivona are getting a grip on this whole
                  parenting thing, Haleigh is studying the stars, Nellie is
                  teaching the next generation about the great outdoors, and
                  Igor is mastering the perfect serve. Get to know our team -
                  they're what makes Teachable, well, Teachable.
                </p>
              </div>
              <div className="col-md-2 col-sm-2"></div>
            </div>

            <div className="spaceh1"> </div>
          </div>

          <div className="container-fluid fullwidthabimg">
            <div className="row">
              <div className="col-sm-12 col-md-12">
                <img src="uploads/team.png" className="responsivteam" />
                <p className="innertextfeatureab">
                  Teachable summer camp, 2019
                </p>
              </div>
            </div>
          </div>

          <div className="container-fluid fullwidthabackgd">
            <div className="row">
              <div className="col-md-6 col-sm-6">
                <div className="spaceabout"> </div>
                <img src="uploads/lady.png" className="responsivteamcol" />
                <p className="innertextfeatureabsm">Haleigh Fullilove</p>
                <p className="innertextfeatureabh">
                  Haleigh sees stories everywhere she looks. Our resident expert
                  in social media strategy, she has a knack for telling the
                  tales of our creators. Her latest learning obsession is
                  reading the stars, demystifying Mercury’s retrogrades, baking,
                  and tarot card reading.
                </p>

                <img
                  src="uploads/nellie_vigneron.png"
                  className="responsivteamcol4"
                />
                <p className="innertextfeatureabsmbn">Nellie Vigneron</p>
                <p className="innertextfeatureabhbn">
                  “If you can concentrate always on the present, you’ll be a
                  happy man.” Nellie’s personal motto comes from the book, The
                  Alchemist. She brings that positivity in the present to her
                  role as keeper of all tax knowledge and numbers know-how at
                  Teachable. In her free time you can find her outside leading
                  nature tours and working on scholarship funds for women and
                  girls to buy outdoor equipment.
                </p>
              </div>
              <div className="col-md-6 col-sm-6">
                <div className="spaceh1"> </div>
                <img
                  src="uploads/girlwithbaby.png"
                  className="responsivteamcol"
                />
                <p className="innertextfeatureabsm">Kaivona Parker</p>
                <p className="innertextfeatureab">
                  If you think you can turn your expertise into a knowledge
                  empire, chances are Kaivona can help you make it happen. Our
                  sales manager and master talent scouter has a knack for
                  spotting the next big course creator or coach. When she’s not
                  recruiting superstars, she’s learning more about maternal
                  health and child development or plotting her next home
                  improvement project.
                </p>

                <img src="uploads/haleigh.png" className="responsivteamcol3" />
                <p className="innertextfeatureabsmb">Budi Sugianto</p>
                <p className="innertextfeatureabhb">
                  If you had to name a theme for the things that bring senior QA
                  automation engineer Budi joy, it would be: home. From
                  perfecting the art of making tempeh to drum up memories of his
                  childhood in Indonesia to spending his free time with his wife
                  and daughter—home is where the happy is. In his quiet moments
                  you can also find him playing guitar and learning about
                  aquaponics.
                </p>
                <img
                  src="uploads/Kevin_Stafford.png"
                  className="responsivteamcol5"
                />
                <p className="innertextfeatureabsmbnk">Kevin Stafford</p>
                <p className="innertextfeatureabhbnk">
                  First time dad and long-time technical operations guru Kevin
                  works on systems design and manages projects for the Customer
                  Education team at Teachable. He’s also currently learning
                  Danish and how to change diapers at lightning speed—all while
                  digging into bicycle repair when he has a spare minute.
                </p>

                <div className="spaceabout"> </div>
              </div>
            </div>
          </div>

          <div className="container-fluid signupsecab">
            <div className="row signuprow">
              <div className="col-md-12 col-sm-12">
                <div className="textsignupab">
                  {' '}
                  Spear fishing tips, wine pairings, or payment gateway FAQs—ask
                  us anything.
                </div>

                <div className="getstarsignab">
                  <button className="submit bttn-primary"> Contact Us </button>
                </div>
              </div>
            </div>
          </div>

          <Footer />

          <script>
            {`
          function myFunction() {
            var x = document.getElementById("myTopnav");
            if (x.className === "topnav") {
            x.className += " responsive";
            } else {
            x.className = "topnav";
            }
          }
        `}
          </script>
          <script>
            {`
          $(document).ready(function(){
            $("#myModal").on("hidden.bs.modal",function(){
              $("#iframeYoutube").attr("src","#");
            })
          })

          function changeVideo(vId){
            var iframe=document.getElementById("iframeYoutube");
            iframe.src="https://www.youtube.com/embed/"+vId;

            $("#myModal").modal("show");
          }
        `}
          </script>
          <script>
            {`
        $('.#mycarousel').carousel({
          if (carousel-item py-5  != active) {
                next = i + 2;
                $(this).append("<a class="carousel-control-prev text-dark" href="#myCarousel" role="button" data-slide="prev">");
            }
            
            if (i != 0) {
                prev = i;
                $(this).append("<a href='#' class='prev-tab mover' rel='" + prev + "'>&#171; Prev Page</a>");
            }
        })
      `}
          </script>
          <script>
            {`
          $('.btnNext').click(function(){
            $('.nav-tabs > .active').next('li').find('a').trigger('click');
          });

            $('.btnPrevious').click(function(){
            $('.nav-tabs > .active').prev('li').find('a').trigger('click');
          });
        `}
          </script>
        </Fragment>
      )}
    </Fragment>
  );
}

export default About;
