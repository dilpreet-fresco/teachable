import { Fragment, useEffect, useState } from 'react';

import Header from '../shared/layout/Header';
import Footer from '../shared/layout/Footer';
import './Examples.css';

function Examples() {
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
      <div className="container-fluid firstseceg">
        <div className="row signuprow">
          <div className="col-md-12 col-sm-12">
            <div className="textsignupab">
              The best online courses live on Teachable. From passion projects
              to multi-million dollar businesses, entrepreneurs trust us to help
              build and grow their knowledge businesses. Ready to join?
            </div>

            <div className="getstarsignab">
              <button className="submit bttn-primarygreen">
                {' '}
                Get started{' '}
              </button>
            </div>
          </div>
        </div>
      </div>

      {showContent && (
        <Fragment>
          <div className="container-fluid">
            <ul
              className="nav nav-tabs nav nav-tabs nav-justified3"
              role="tablist"
            >
              <li className="active">
                <a href="#Arts" role="tab" data-toggle="tab">
                  Arts
                </a>
              </li>
              <li>
                <a href="#Health" role="tab" data-toggle="tab">
                  Health
                </a>
              </li>
              <li>
                <a href="#Niche" role="tab" data-toggle="tab">
                  Niche
                </a>
              </li>
              <li>
                <a href="#Academics" role="tab" data-toggle="tab">
                  Academics
                </a>
              </li>
              <li>
                <a href="#Membership" role="tab" data-toggle="tab">
                  Membership
                </a>
              </li>
              <li>
                <a href="#Business" role="tab" data-toggle="tab">
                  Business
                </a>
              </li>
            </ul>

            <div className="tab-content">
              <div className="tab-pane fade active in" id="Arts">
                <div className="container">
                  <div className="artsterxt">
                    <h1 className="artsheading"> Arts</h1>
                    <div className="texteasyartss">
                      {' '}
                      Share your artistic skills and build a business doing what
                      you love—whether it be
                    </div>
                    <div className="texteasyartss">
                      {' '}
                      watercolor, lettering, cake decoration, or anything else
                      you can dream up
                    </div>
                  </div>
                  <div className="row colmnfourcont">
                    <div className="col-md-4 col-sm-4 contentbox2">
                      <div className="contentbox">
                        <div className="imagebox">
                          <img src="uploads/fstcol.png" className="colmimg" />
                        </div>
                        <h1 className="texteasyarts">
                          <a href="#" className="texteasyarts">
                            {' '}
                            Watercolor Painting
                          </a>{' '}
                        </h1>
                        <p className="paraearts1">
                          {' '}
                          Jump into the vibrant world of watercolor! After
                          getting her start on youTube, Angela has infused her
                          love of watercolor into an online course membership
                          program.{' '}
                        </p>
                        <span className="contentp">
                          <img src="uploads/fstp.png" className="person" />
                          <p className="paraearts1"> Angela Fehr </p>
                        </span>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-4 contentbox2">
                      <div className="contentbox">
                        <div className="imagebox">
                          <img src="uploads/sec.png" className="colmimg" />
                        </div>

                        <h1 className="texteasyarts">
                          <a href="#" className="texteasyarts">
                            {' '}
                            Hand Lettering{' '}
                          </a>{' '}
                        </h1>
                        <p className="paraearts1">
                          {' '}
                          What started out as a hobby grew into a freelance
                          career in illustration and lettering. Today, Lauren
                          not only works with big clients, she also teaches her
                          skills online{' '}
                        </p>
                        <span className="contentp">
                          <img src="uploads/secp.png" className="person" />
                          <p className="paraearts1"> Lauren Hom </p>
                        </span>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-4 contentbox2">
                      <div className="contentbox">
                        <div className="imagebox">
                          <img src="uploads/thirdcol.png" className="colmimg" />
                        </div>
                        <h1 className="texteasyarts">
                          <a href="#" className="texteasyarts">
                            {' '}
                            Acrylic Pouring{' '}
                          </a>{' '}
                        </h1>
                        <p className="paraearts2">
                          {' '}
                          Deby’s love for acrylic pouring has inspired her to
                          not only create as an artist, but also to share it
                          with others via her blog, community groups, books and
                          an online course.{' '}
                        </p>
                        <span className="contentp">
                          <img src="uploads/thirdp.png" className="person" />
                          <p className="paraearts1"> Deby Coles </p>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="row colmnfourcont">
                    <div className="col-md-4 col-sm-4 contentbox2">
                      <div className="contentbox">
                        <div className="imagebox">
                          <img
                            src="uploads/fourthcol.png"
                            className="colmimg"
                          />
                        </div>
                        <h1 className="texteasyarts">
                          <a href="#" className="texteasyarts">
                            {' '}
                            Sketch Master{' '}
                          </a>{' '}
                        </h1>
                        <p className="paraearts1">
                          {' '}
                          Peter realized the need for professional training on
                          the design tool he uses everyday. So, he created an
                          online training course himself.{' '}
                        </p>
                        <span className="contentp">
                          <img src="uploads/fourthp.png" className="person" />
                          <p className="paraearts1"> Peter Nowell </p>
                        </span>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-4 contentbox2">
                      <div className="contentbox">
                        <div className="imagebox">
                          <img src="uploads/fifthcol.png" className="colmimg" />
                        </div>

                        <h1 className="texteasyarts">
                          <a href="#" className="texteasyarts">
                            {' '}
                            Make Fabulous Cakes{' '}
                          </a>{' '}
                        </h1>
                        <p className="paraearts1">
                          {' '}
                          Darlene’s cake decorating adventure started when she
                          first became a mom. Now, she's a pastry chef, blogger,
                          and online course creator.{' '}
                        </p>
                        <span className="contentp">
                          <img src="uploads/fifthp.png" className="person" />
                          <p className="paraearts1"> Darlene Abarquez </p>
                        </span>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-4 contentbox2">
                      <div className="contentbox">
                        <div className="imagebox">
                          <img src="uploads/sixthcol.png" className="colmimg" />
                        </div>
                        <h1 className="texteasyarts">
                          <a href="#" className="texteasyarts">
                            {' '}
                            Paper flower{' '}
                          </a>{' '}
                        </h1>
                        <p className="paraearts2">
                          {' '}
                          With a passion to spread the love and joy of paper
                          flowers, Catherine launched her online school Studio
                          BOUQ to offer courses in creating realistic flowers.{' '}
                        </p>
                        <span className="contentp">
                          <img src="uploads/sixthp.png" className="person" />
                          <p className="paraearts1"> Catherine Oxley </p>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tab-pane fade" id="Health">
                <div className="container">
                  <div className="artsterxt">
                    <h1 className="artsheading"> Health</h1>
                    <div className="texteasyartss">
                      {' '}
                      Bring your in-person studio or health practice online so
                      your clients can work out,
                    </div>
                    <div className="texteasyartss">
                      {' '}
                      get nutrition advice, and more anytime, anywhere. Plus,
                      reach new audiences around the world.
                    </div>
                  </div>
                  <div className="row colmnfourcont">
                    <div className="col-md-4 col-sm-4 contentbox2">
                      <div className="contentbox">
                        <div className="imagebox">
                          <img
                            src="uploads/healthfrst.png"
                            className="colmimg"
                          />
                        </div>
                        <h1 className="texteasyarts">
                          <a href="#" className="texteasyarts">
                            {' '}
                            Fitness Bootcamp{' '}
                          </a>{' '}
                        </h1>
                        <p className="paraearts1">
                          {' '}
                          Greg started out as a personal trainer, but knew he
                          didn’t want to stop there. With his experience as a
                          trainer and researcher, he launched a fitness course
                          online.{' '}
                        </p>
                        <span className="contentp">
                          <img src="uploads/healthp.png" className="person" />
                          <p className="paraearts1"> Greg O’Gallagher </p>
                        </span>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-4 contentbox2">
                      <div className="contentbox">
                        <div className="imagebox">
                          <img
                            src="uploads/healthsec.png"
                            className="colmimg"
                          />
                        </div>

                        <h1 className="texteasyarts">
                          <a href="#" className="texteasyarts">
                            {' '}
                            Yoga{' '}
                          </a>{' '}
                        </h1>
                        <p className="paraearts1">
                          {' '}
                          Rachel teaches online courses on the transformative
                          power of yoga for backcare and scoliosis.{' '}
                        </p>
                        <span className="contentp">
                          <img src="uploads/healthp2.png" className="person" />
                          <p className="paraearts1"> Rachel Jesien </p>
                        </span>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-4 contentbox2">
                      <div className="contentbox">
                        <div className="imagebox">
                          <img
                            src="uploads/healththird.png"
                            className="colmimg"
                          />
                        </div>
                        <h1 className="texteasyarts">
                          <a href="#" className="texteasyarts">
                            {' '}
                            Nutrition{' '}
                          </a>{' '}
                        </h1>
                        <p className="paraearts2">
                          {' '}
                          Susan is a dietitian and an owner of a thriving
                          coaching business. After many years of experience, she
                          has transformed most frequently asked questions into
                          online courses.{' '}
                        </p>
                        <span className="contentp">
                          <img src="uploads/healthp3.png" className="person" />
                          <p className="paraearts1"> Susan Watson, RD </p>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="row colmnfourcont">
                    <div className="col-md-4 col-sm-4 contentbox2">
                      <div className="contentbox">
                        <div className="imagebox">
                          <img
                            src="uploads/healthfourth.png"
                            className="colmimg"
                          />
                        </div>
                        <h1 className="texteasyarts">
                          <a href="#" className="texteasyarts">
                            {' '}
                            Sketch Master{' '}
                          </a>{' '}
                        </h1>
                        <p className="paraearts1">
                          {' '}
                          Peter realized the need for professional training on
                          the design tool he uses everyday. So, he created an
                          online training course himself.{' '}
                        </p>
                        <span className="contentp">
                          <img src="uploads/healthp4.png" className="person" />
                          <p className="paraearts1"> Peter Nowell </p>
                        </span>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-4 contentbox2">
                      <div className="contentbox">
                        <div className="imagebox">
                          <img
                            src="uploads/healthfifth.png"
                            className="colmimg"
                          />
                        </div>

                        <h1 className="texteasyarts">
                          <a href="#" className="texteasyarts">
                            {' '}
                            Make Fabulous Cakes{' '}
                          </a>{' '}
                        </h1>
                        <p className="paraearts1">
                          {' '}
                          Darlene’s cake decorating adventure started when she
                          first became a mom. Now, she's a pastry chef, blogger,
                          and online course creator.{' '}
                        </p>
                        <span className="contentp">
                          <img src="uploads/healthp5.png" className="person" />
                          <p className="paraearts1"> Darlene Abarquez </p>
                        </span>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-4 contentbox2">
                      <div className="contentbox">
                        <div className="imagebox">
                          <img
                            src="uploads/healthsixth.png"
                            className="colmimg"
                          />
                        </div>
                        <h1 className="texteasyarts">
                          <a href="#" className="texteasyarts">
                            {' '}
                            Paper flower{' '}
                          </a>{' '}
                        </h1>
                        <p className="paraearts2">
                          {' '}
                          With a passion to spread the love and joy of paper
                          flowers, Catherine launched her online school Studio
                          BOUQ to offer courses in creating realistic flowers.{' '}
                        </p>
                        <span className="contentp">
                          <img src="uploads/healthp6.png" className="person" />
                          <p className="paraearts1"> Catherine Oxley </p>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="Niche">
                <div className="container">
                  <div className="artsterxt">
                    <h1 className="artsheading"> Niche</h1>
                    <div className="texteasyartss">
                      {' '}
                      Ever feel like your ideal course topic is too specific?
                      There are hundreds of creators
                    </div>
                    <div className="texteasyartss">
                      {' '}
                      making money with niche topics on Teachable. Showcase and
                      monetize your unique
                    </div>
                    <div className="texteasyartss">
                      {' '}
                      expertise in any field with online courses.
                    </div>
                  </div>
                  <div className="row colmnfourcont">
                    <div className="col-md-4 col-sm-4 contentbox2">
                      <div className="contentbox">
                        <div className="imagebox">
                          <img
                            src="uploads/Nichefirst.png"
                            className="colmimg"
                          />
                        </div>
                        <h1 className="texteasyarts">
                          <a href="#" className="texteasyarts">
                            {' '}
                            Alec Steele Blacksmith{' '}
                          </a>{' '}
                        </h1>
                        <p className="paraearts1">
                          {' '}
                          Alec teaches everything you need to know about
                          blacksmithing, from setting up your first forge to
                          making your own tools.{' '}
                        </p>
                        <span className="contentp">
                          <img src="uploads/Niche1.png" className="person" />
                          <p className="paraearts1"> Alec Steele </p>
                        </span>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-4 contentbox2">
                      <div className="contentbox">
                        <div className="imagebox">
                          <img src="uploads/Nichesec.png" className="colmimg" />
                        </div>

                        <h1 className="texteasyarts">
                          <a href="#" className="texteasyarts">
                            {' '}
                            Home Cooking{' '}
                          </a>{' '}
                        </h1>
                        <p className="paraearts1">
                          {' '}
                          From the popular Pro Home Cooks YouTube channel, Mike
                          has expanded into a series of online courses on how to
                          make sourdough and brew kombucha from your own home.{' '}
                        </p>
                        <span className="contentp">
                          <img src="uploads/Niche2.png" className="person" />
                          <p className="paraearts1"> Mike Greenfield </p>
                        </span>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-4 contentbox2">
                      <div className="contentbox">
                        <div className="imagebox">
                          <img
                            src="uploads/Nichethird.png"
                            className="colmimg"
                          />
                        </div>
                        <h1 className="texteasyarts">
                          <a href="#" className="texteasyarts">
                            {' '}
                            UAV Coach{' '}
                          </a>{' '}
                        </h1>
                        <p className="paraearts2">
                          {' '}
                          With a community of 20,000+ drone pilots, UAV Coach
                          offers online training in drone flight,
                          cinematography, and more.{' '}
                        </p>
                        <span className="contentp">
                          <img src="uploads/Niche3.png" className="person" />
                          <p className="paraearts1"> Alan Perlman </p>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="row colmnfourcont">
                    <div className="col-md-4 col-sm-4 contentbox2">
                      <div className="contentbox">
                        <div className="imagebox">
                          <img
                            src="uploads/Nichefourth.png"
                            className="colmimg"
                          />
                        </div>
                        <h1 className="texteasyarts">
                          <a href="#" className="texteasyarts">
                            {' '}
                            Houseplant Care{' '}
                          </a>{' '}
                        </h1>
                        <p className="paraearts1">
                          {' '}
                          After getting the same questions on her social media,
                          Summer validated her idea via a Kickstarter and
                          decided to build her course{' '}
                        </p>
                        <span className="contentp">
                          <img src="uploads/Niche4.png" className="person" />
                          <p className="paraearts1"> Summer Rayne Oakes </p>
                        </span>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-4 contentbox2">
                      <div className="contentbox">
                        <div className="imagebox">
                          <img
                            src="uploads/Nichefifth.png"
                            className="colmimg"
                          />
                        </div>

                        <h1 className="texteasyarts">
                          <a href="#" className="texteasyarts">
                            {' '}
                            Minute Physics{' '}
                          </a>{' '}
                        </h1>
                        <p className="paraearts1">
                          {' '}
                          With 3.6M+ subscribers, Henry Reich created an online
                          course that distills how the world works into 60
                          bite-size lessons.{' '}
                        </p>
                        <span className="contentp">
                          <img src="uploads/Niche5.png" className="person" />
                          <p className="paraearts1"> Henry Reich </p>
                        </span>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-4 contentbox2">
                      <div className="contentbox">
                        <div className="imagebox">
                          <img
                            src="uploads/Nichesixth.png"
                            className="colmimg"
                          />
                        </div>
                        <h1 className="texteasyarts">
                          <a href="#" className="texteasyarts">
                            {' '}
                            Shoemaking{' '}
                          </a>{' '}
                        </h1>
                        <p className="paraearts2">
                          {' '}
                          Based in London, Amanda wanted to create a safe place
                          for people to learn the craft of shoemaking from the
                          comfort of their homes. 10 years on, she has thousands
                          of students all over the world.{' '}
                        </p>
                        <span className="contentp">
                          <img src="uploads/Niche6.png" className="person" />
                          <p className="paraearts1"> Amanda Overs </p>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="Academics">
                <div className="container">
                  <div className="artsterxt">
                    <h1 className="artsheading"> Academics</h1>
                    <div className="texteasyartss">
                      Turn one-on-one tutoring and coaching into guided online
                      courses students can
                    </div>
                    <div className="texteasyartss">
                      {' '}
                      take from the comfort of their living rooms.
                    </div>
                  </div>
                  <div className="row colmnfourcont">
                    <div className="col-md-4 col-sm-4 contentbox2">
                      <div className="contentbox">
                        <div className="imagebox">
                          <img src="images/acadfirst.png" className="colmimg" />
                        </div>
                        <h1 className="texteasyarts">
                          <a href="#" className="texteasyarts">
                            {' '}
                            A-Levels Tutoring{' '}
                          </a>{' '}
                        </h1>
                        <p className="paraearts1">
                          {' '}
                          Why confine learning to in-person classNamees that
                          require upfront rental costs for classNameroom space?
                          With online courses, Tailored Tutors helps students
                          ace your A-level exams from anywhere; and you can do
                          the same.{' '}
                        </p>
                        <span className="contentp">
                          <img src="uploads/acadp.png" className="person" />
                          <p className="paraearts1"> Tailored Tutors </p>
                        </span>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-4 contentbox2">
                      <div className="contentbox">
                        <div className="imagebox">
                          <img src="uploads/acadsec.png" className="colmimg" />
                        </div>

                        <h1 className="texteasyarts">
                          <a href="#" className="texteasyarts">
                            {' '}
                            Languages{' '}
                          </a>{' '}
                        </h1>
                        <p className="paraearts1">
                          {' '}
                          Mark is a high school language teacher turned language
                          podcaster. In his search to provide the best medium
                          for others to learn languages, Mark expanded his
                          podcasts into online courses.{' '}
                        </p>
                        <span className="contentp">
                          <img src="uploads/acadp2.png" className="person" />
                          <p className="paraearts1"> Coffee Break Languages </p>
                        </span>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-4 contentbox2">
                      <div className="contentbox">
                        <div className="imagebox">
                          <img
                            src="uploads/acadthird.png"
                            className="colmimg"
                          />
                        </div>
                        <h1 className="texteasyarts">
                          <a href="#" className="texteasyarts">
                            {' '}
                            3D Design{' '}
                          </a>{' '}
                        </h1>
                        <p className="paraearts2">
                          {' '}
                          Zacharias is a 3D designer who started a freelance
                          career, he shifted his focus into helping others
                          interested in 3D design achieve new levels of learning
                          online.{' '}
                        </p>
                        <span className="contentp">
                          <img src="uploads/acadp3.png" className="person" />
                          <p className="paraearts1"> Zacharias Reinhardt </p>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="row colmnfourcont">
                    <div className="col-md-4 col-sm-4 contentbox2">
                      <div className="contentbox">
                        <div className="imagebox">
                          <img
                            src="uploads/acadfourth.png"
                            className="colmimg"
                          />
                        </div>
                        <h1 className="texteasyarts">
                          <a href="#" className="texteasyarts">
                            {' '}
                            Self-Published Authors{' '}
                          </a>{' '}
                        </h1>
                        <p className="paraearts1">
                          {' '}
                          Mark turned his own experience as a successful
                          self-published author into a course for authors on
                          self publishing and advertising.{' '}
                        </p>
                        <span className="contentp">
                          <img src="uploads/acad4.png" className="person" />
                          <p className="paraearts1"> Mark Dawson </p>
                        </span>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-4 contentbox2">
                      <div className="contentbox">
                        <div className="imagebox">
                          <img
                            src="uploads/acadfifth.png"
                            className="colmimg"
                          />
                        </div>

                        <h1 className="texteasyarts">
                          <a href="#" className="texteasyarts">
                            {' '}
                            E-learning Courses{' '}
                          </a>{' '}
                        </h1>
                        <p className="paraearts1">
                          {' '}
                          With 3.6M+ subscribers, Henry Reich created an online
                          course that distills how the world works into 60
                          bite-size lessons.{' '}
                        </p>
                        <span className="contentp">
                          <img src="uploads/acad6.png" className="person" />
                          <p className="paraearts1"> Henry Reich </p>
                        </span>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-4 contentbox2">
                      <div className="contentbox">
                        <div className="imagebox">
                          <img
                            src="uploads/acadsixth.png"
                            className="colmimg"
                          />
                        </div>
                        <h1 className="texteasyarts">
                          <a href="#" className="texteasyarts">
                            {' '}
                            Music Production{' '}
                          </a>{' '}
                        </h1>
                        <p className="paraearts2">
                          {' '}
                          Every week, IO Music Academy hosts livestream courses
                          with some of the world's best music producers.
                          Students can interact and ask questions live or watch
                          recordings at their own pace.{' '}
                        </p>
                        <span className="contentp">
                          <img src="uploads/acadp7.png" className="person" />
                          <p className="paraearts1"> IO Music Academy </p>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="Membership">
                <div className="container">
                  <div className="artsterxt">
                    <h1 className="artsheading"> Memberships</h1>
                    <div className="texteasyartss">
                      Create your own membership course on Teachable. Whether
                      it’s a hobby or a
                    </div>
                    <div className="texteasyartss">
                      professional training, some topics are better suited as a
                      subscription-based membership.
                    </div>
                  </div>
                  <div className="row colmnfourcont">
                    <div className="col-md-4 col-sm-4 contentbox2">
                      <div className="contentbox">
                        <div className="imagebox">
                          <img
                            src="uploads/memberfirst.png"
                            className="colmimg"
                          />
                        </div>
                        <h1 className="texteasyarts">
                          <a href="#" className="texteasyarts">
                            {' '}
                            Harmonica School{' '}
                          </a>{' '}
                        </h1>
                        <p className="paraearts1">
                          {' '}
                          Tomlin ran an in-person and online harmonica school.
                          When he found himself strapped for time, he decided to
                          focus on his reaching more students with online
                          memberships{' '}
                        </p>
                        <span className="contentp">
                          <img src="uploads/acadp.png" className="person" />
                          <p className="paraearts1"> Tomlin Leckie </p>
                        </span>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-4 contentbox2">
                      <div className="contentbox">
                        <div className="imagebox">
                          <img
                            src="uploads/membersec.png"
                            className="colmimg"
                          />
                        </div>

                        <h1 className="texteasyarts">
                          <a href="#" className="texteasyarts">
                            {' '}
                            Trading Skills{' '}
                          </a>{' '}
                        </h1>
                        <p className="paraearts1">
                          {' '}
                          Sean Jantz created a stock market education community
                          and subscription course to help those interested in
                          learning about trading.{' '}
                        </p>
                        <span className="contentp">
                          <img src="uploads/acadp2.png" className="person" />
                          <p className="paraearts1"> Sean Jantz </p>
                        </span>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-4 contentbox2">
                      <div className="contentbox">
                        <div className="imagebox">
                          <img
                            src="uploads/memberthird.png"
                            className="colmimg"
                          />
                        </div>
                        <h1 className="texteasyarts">
                          <a href="#" className="texteasyarts">
                            {' '}
                            Jewelry{' '}
                          </a>{' '}
                        </h1>
                        <p className="paraearts2">
                          {' '}
                          Jessica started the London Jewellery School over 10
                          years ago, and has brought her knowledge online with
                          Jewellers Academy.{' '}
                        </p>
                        <span className="contentp">
                          <img src="uploads/acadp3.png" className="person" />
                          <p className="paraearts1"> Jessica Rose </p>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="row colmnfourcont">
                    <div className="col-md-4 col-sm-4 contentbox2">
                      <div className="contentbox">
                        <div className="imagebox">
                          <img
                            src="uploads/memberfourth.png"
                            className="colmimg"
                          />
                        </div>
                        <h1 className="texteasyarts">
                          <a href="#" className="texteasyarts">
                            {' '}
                            Coding ClassNamees{' '}
                          </a>{' '}
                        </h1>
                        <p className="paraearts1">
                          {' '}
                          Learning to master the JavaScript ecosystem won’t
                          happen overnight. Subscribe to Tyler’s membership for
                          as long as you’re learning.{' '}
                        </p>
                        <span className="contentp">
                          <img src="uploads/acad4.png" className="person" />
                          <p className="paraearts1"> Tyler McGinnis </p>
                        </span>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-4 contentbox2">
                      <div className="contentbox">
                        <div className="imagebox">
                          <img
                            src="uploads/memberfifth.png"
                            className="colmimg"
                          />
                        </div>

                        <h1 className="texteasyarts">
                          <a href="#" className="texteasyarts">
                            {' '}
                            Photoshop Training{' '}
                          </a>{' '}
                        </h1>
                        <p className="paraearts1">
                          {' '}
                          Dave has been teaching Photoshop and related programs
                          for more than 25 years. He has created hundreds of
                          courses which you can subscribe to.{' '}
                        </p>
                        <span className="contentp">
                          <img src="uploads/acad6.png" className="person" />
                          <p className="paraearts1"> Dave Cross </p>
                        </span>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-4 contentbox2">
                      <div className="contentbox">
                        <div className="imagebox">
                          <img
                            src="uploads/membersixth.png"
                            className="colmimg"
                          />
                        </div>
                        <h1 className="texteasyarts">
                          <a href="#" className="texteasyarts">
                            {' '}
                            Marketing{' '}
                          </a>{' '}
                        </h1>
                        <p className="paraearts2">
                          {' '}
                          Learn proven sales and marketing strategies at your
                          own pace with mentorship by coach Edward Zia.{' '}
                        </p>
                        <span className="contentp">
                          <img src="uploads/acadp7.png" className="person" />
                          <p className="paraearts1"> Edward Zia </p>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="Business">
                <div className="container">
                  <div className="artsterxt">
                    <h1 className="artsheading"> Teachable for business</h1>
                    <div className="texteasyartss">
                      Use Teachable within your organization to provide value to
                      your customers, train
                    </div>
                    <div className="texteasyartss">
                      employees, or sell courses to the general public.
                    </div>
                  </div>
                  <div className="row colmnfourcont">
                    <div className="col-md-4 col-sm-4 contentbox2">
                      <div className="contentbox">
                        <div className="imagebox">
                          <img
                            src="uploads/busifirst.png"
                            className="colmimg"
                          />
                        </div>
                        <h1 className="texteasyarts">
                          <a href="#" className="texteasyarts">
                            {' '}
                            StackSkills{' '}
                          </a>{' '}
                        </h1>
                        <p className="paraearts1">
                          {' '}
                          Backed by 500Startups and Tim Draper, StackSkills
                          distributes over 475 courses to over 100,000 students.{' '}
                        </p>
                        <span className="contentp">
                          <img src="uploads/busp1.png" className="person" />
                          <p className="paraearts1"> StackSkills </p>
                        </span>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-4 contentbox2">
                      <div className="contentbox">
                        <div className="imagebox">
                          <img src="uploads/busisec.png" className="colmimg" />
                        </div>

                        <h1 className="texteasyarts">
                          <a href="#" className="texteasyarts">
                            {' '}
                            The New York Times{' '}
                          </a>{' '}
                        </h1>
                        <p className="paraearts1">
                          {' '}
                          The New York Times offers courses to both pre-college
                          and professional audiences to teach them what the
                          Times knows best: telling brand stories through video.{' '}
                        </p>
                        <span className="contentp">
                          <img src="uploads/busip2.png" className="person" />
                          <p className="paraearts1"> The New York Times </p>
                        </span>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-4 contentbox2">
                      <div className="contentbox">
                        <div className="imagebox">
                          <img
                            src="uploads/busithird.png"
                            className="colmimg"
                          />
                        </div>
                        <h1 className="texteasyarts">
                          <a href="#" className="texteasyarts">
                            {' '}
                            GSN3 Academy{' '}
                          </a>{' '}
                        </h1>
                        <p className="paraearts2">
                          {' '}
                          Software for networking professionals with 2M+
                          downloads. By creating online courses, GSN3 expanded
                          its revenue streams.{' '}
                        </p>
                        <span className="contentp">
                          <img src="uploads/busip3.png" className="person" />
                          <p className="paraearts1"> GSN3 </p>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="row colmnfourcont">
                    <div className="col-md-4 col-sm-4 contentbox2">
                      <div className="contentbox">
                        <div className="imagebox">
                          <img
                            src="uploads/busifourth.png"
                            className="colmimg"
                          />
                        </div>
                        <h1 className="texteasyarts">
                          <a href="#" className="texteasyarts">
                            {' '}
                            GetResponse{' '}
                          </a>{' '}
                        </h1>
                        <p className="paraearts1">
                          {' '}
                          Email marketing company GetResponse use Teachable to
                          power their branded certification program worldwide.{' '}
                        </p>
                        <span className="contentp">
                          <img src="uploads/busp4.png" className="person" />
                          <p className="paraearts1"> GetResponse </p>
                        </span>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-4 contentbox2">
                      <div className="contentbox">
                        <div className="imagebox">
                          <img
                            src="uploads/busififth.png"
                            className="colmimg"
                          />
                        </div>

                        <h1 className="texteasyarts">
                          <a href="#" className="texteasyarts">
                            {' '}
                            Product Marketing Alliance{' '}
                          </a>{' '}
                        </h1>
                        <p className="paraearts1">
                          {' '}
                          To elevate the role of product marketing, PMA was
                          created to offer people in the industry a community
                          and educate others on how to transition in.{' '}
                        </p>
                        <span className="contentp">
                          <img src="uploads/busp5.png" className="person" />
                          <p className="paraearts1">
                            {' '}
                            Product Marketing Alliance{' '}
                          </p>
                        </span>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-4 contentbox2">
                      <div className="contentbox">
                        <div className="imagebox">
                          <img
                            src="uploads/busisixth.png"
                            className="colmimg"
                          />
                        </div>
                        <h1 className="texteasyarts">
                          <a href="#" className="texteasyarts">
                            {' '}
                            Cover Insurance{' '}
                          </a>{' '}
                        </h1>
                        <p className="paraearts2">
                          {' '}
                          Cover insurance company offers a free defensive
                          driving course to educate users and to offer discount
                          incentives for their product.{' '}
                        </p>
                        <span className="contentp">
                          <img src="uploads/busip6.png" className="person" />
                          <p className="paraearts1"> Cover Insurance </p>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12 fethirdtext">
                <span className="fethirdtext">
                  Market leaders use Teachable to enrich their brands and
                  businesses.
                </span>
              </div>
              <div className="fethirdimg">
                <img src="uploads/newtimes.png" className="fimage" />{' '}
                <img src="uploads/inuit.png" className="fimage" />{' '}
                <img src="uploads/shopify.png" className="fimage" />
                <br />
                <img src="uploads/pearson.png" className="fimage" />{' '}
                <img src="uploads/pennlaw.png" className="fimage" />
              </div>
            </div>
          </div>
          <div className="container-fluid signupsec">
            <div className="row signuprow">
              <div className="col-md-12 col-sm-12">
                <div
                  className="ftextsignup1"
                  style={{
                    fontSize: '58px',
                    textAlign: 'center',
                    lineHeight: '133%',
                    fontWeight: '200',
                    letterSpacing: '0',
                    color: '#222',
                  }}
                >
                  {' '}
                  Start now and turn you knowledge
                </div>
                <div
                  className="ftextsignup1"
                  style={{
                    fontSize: '58px',
                    textAlign: 'center',
                    lineHeight: '133%',
                    fontWeight: '200',
                    letterSpacing: '0',
                    color: '#222',
                  }}
                >
                  {' '}
                  into a profitable online course
                </div>
                <div className="getstarsign">
                  <button className="submit bttn-primary"> Get Started </button>
                </div>
              </div>
            </div>
          </div>

          <Footer />
          <script>
            {`$(document).ready(function(){
          $("#myModal").on("hidden.bs.modal",function(){
            $("#iframeYoutube").attr("src","#");
          })
        })

        function changeVideo(vId){
          var iframe=document.getElementById("iframeYoutube");
          iframe.src="https://www.youtube.com/embed/"+vId;

          $("#myModal").modal("show");
        }`}
          </script>
          <script>
            {`
          $("#tile-1 .nav-tabs a").click(function() {
            var position = $(this).parent().position();
            var width = $(this).parent().width();
              $("#tile-1 .slider").css({"left":+ position.left,"width":width});
          });
          var actWidth = $("#tile-1 .nav-tabs").find(".active").parent("li").width();
          var actPosition = $("#tile-1 .nav-tabs .active").position();
          $("#tile-1 .slider").css({"left":+ actPosition.left,"width": actWidth});
        `}
          </script>
        </Fragment>
      )}
    </Fragment>
  );
}

export default Examples;
