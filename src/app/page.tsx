"use client"

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [isSticky, setIsSticky] = useState(false);
  const [showScrollBtn, setShowScrollBtn] = useState(false);
  const [navActive, setNavActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (document.documentElement.scrollTop > 20) {
        setIsSticky(true);
        setShowScrollBtn(true);
      } else {
        setIsSticky(false);
        setShowScrollBtn(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMenuClick = () => {
    setNavActive(true);
    document.body.style.overflowX = 'hidden';
  };

  const handleCancelClick = () => {
    setNavActive(false);
    document.body.style.overflowX = 'auto';
  };

  const handleNavLinkClick = () => {
    setNavActive(false);
    document.body.style.overflowX = 'auto';
  };

  useEffect(() => {
    const navLinks = document.querySelectorAll('.menu li a');
    navLinks.forEach(link => {
      link.addEventListener('click', handleNavLinkClick);
    });

    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', handleNavLinkClick);
      });
    };
  }, []);

  // useEffect(() => {
  //   const animateSkills = () => {
  //     var v1 = $(".i1").attr("data-pg");
  //     $(".i1").animate({ width: v1 }, 2000);
  //     var v2 = $(".i2").attr("data-pg");
  //     $(".i2").animate({ width: v2 }, 2000);
  //     var v3 = $(".i3").attr("data-pg");
  //     $(".i3").animate({ width: v3 }, 2000);
  //   };

  //   animateSkills();
  // }, []);

  return (
    <div>
      {/* Scroll Button */}
      <div className="scroll-button">
        <a href="#home" style={{ display: showScrollBtn ? 'block' : 'none' }}>
          <i className="fas fa-arrow-up"></i>
        </a>
      </div>

      {/* Navigation Menu */}
      <nav className={isSticky ? 'sticky' : ''}>
        <div className="navbar">
          <div className="logo"><a href="#">Portfolio.</a></div>
          <ul className={`menu ${navActive ? 'active' : ''}`}>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
            <div className="cancel-btn" onClick={handleCancelClick}>
              <i className="fas fa-times"></i>
            </div>
          </ul>
          <div className="media-icons">
            <a href="https://www.linkedin.com/in/dipak-kumal-984438204/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
            <a href="https://github.com/Dipak1203" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
            <a href="https://twitter.com/dipakKu41313213" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="https://www.instagram.com/idipakkumal/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="https://www.facebook.com/IDipakKumal" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
          </div>
        </div>
        <div className="menu-btn" onClick={handleMenuClick}>
          <i className="fas fa-bars"></i>
        </div>
      </nav>

      {/* Home Section */}
      <section className="home" id="home">
        <div className="content">
          <div className="home-content">
            <div className="text">
              <div className="text-one">Hello there!</div>
              <div className="text-two">I`&apos;`m DIPAK KUMAL</div>
              <div className="text-three">Full Stack Developer</div>
              <div className="text-four">From Dang</div>
            </div>
            <div className="button">
              <a className="button" href="https://www.linkedin.com/in/dipak-kumal-984438204/" target="_blank" rel="noopener noreferrer">Hire Me</a>
            </div>
          </div>
        </div>
        <div className="image">
          <Image src="/images/dipak-kumal.png" alt="my logo" width={500} height={500} />
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="content">
          <div className="title"><span>About Me</span></div>
          <div className="about-details">
            <div className="left">
              <Image src="/images/dipak kumal.jpg" alt="Dipak Kumal" width={500} height={500} />
            </div>
            <div className="right">
              <div className="topic">Developing Is My Passion</div>
              <p>I am a web developer with a passion for creating beautiful and functional websites. I am proficient in a variety of programming languages and have experience working with both front-end and back-end technologies...</p>
              <div className="button">
                <a href="images/resume.pdf" download><button>Download CV</button></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills" id="skills">
        <div className="content">
          <div className="title"><span>My Skills</span></div>
          <div className="row">
            <div className="col-md-5 col-12 skill__developement skill__developementFront ">
              <h3>Frontend Development</h3>
              <ul>
                <li><i className="fa-solid fa-circle-check"></i>HTML & CSS & BOOTSTRAP</li>
                <li><i className="fa-solid fa-circle-check"></i> MATERIAL UI & TAILWIND & CHAKRA UI</li>
              </ul>
              <ul>
                <li><i className="fa-solid fa-circle-check"></i>REACT JS</li>
                <li><i className="fa-solid fa-circle-check"></i>REDUX</li>
              </ul>
              <ul>
                <li><i className="fa-solid fa-circle-check"></i>RESPONSIVE DESIGN</li>
                <li><i className="fa-solid fa-circle-check"></i>CLIENT SIDE RENDER</li>
              </ul>
            </div>
            <div className="col-md-2 hidden">
              <h5>Hello World</h5>
            </div>
            <div className="col-md-5 col-12 skill__developement skill__developementBack">
              <h3>Backend Development</h3>
              <ul>
                <li><i className="fa-solid fa-circle-check"></i>NODEJS</li>
                <li><i className="fa-solid fa-circle-check"></i>SWIGGER</li>
              </ul>
              <ul>
                <li><i className="fa-solid fa-circle-check"></i>MYSQL & POSTGRESQL</li>
                <li><i className="fa-solid fa-circle-check"></i>MongoDB</li>
              </ul>
              <ul>
                <li><i className="fa-solid fa-circle-check"></i>REST & GRAPHQL</li>
                <li><i className="fa-solid fa-circle-check"></i>EXPRESS & NEST JS</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="services" id="projects">
        <div className="content">
          <div className="title"><span>My Projects</span></div>
          <div className="boxes">
            <div className="box">
              <div className="icon">
                <i className="fas fa-desktop"></i>
              </div>
              <div className="topic">Content Management System</div>
              <p>I have working on building Content Management System many projects for example my portfolio, Immigration System, classes etc.</p>
            </div>
            <div className="box">
              <div className="icon">
                <i className="fa-solid fa-cart-plus"></i>
              </div>
              <div className="topic">E-Commerce</div>
              <p>I have also build ecommerce websites in my personal project and company. Where I worked on multiple team in company where my contribute is both side frontend and backend.</p>
            </div>
            <div className="box">
              <div className="icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <div className="topic">Educational Website</div>
              <p>I have also contribute in Educational website. I have contributed on classes website where student can enroll, enquiry, and purcase the class.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <div className="container mt-3 contactContent">
          <h1 className="text-center">Contact Me</h1>
          <div className="row mt-4">
            <div className="col-lg-6">
              {/* Google Map */}
              <div style={{ maxWidth: '100%', overflow: 'hidden', color: 'red', width: '500px', height: '500px' }}>
                <div id="embedmap-canvas" style={{ height: '100%', width: '100%', maxWidth: '100%' }}>
                  {/* Google Map iframe commented out */}
                  <a className="contact_heading" href="mailto:dipakkumal673@gmail.com">
                    <i className="fa-regular fa-envelope"></i> dipakkumal673@gmail.com
                  </a>
                  <br />
                  <a className="contact_heading" href="https://github.com/Dipak1203" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-github"></i> Dipak1203
                  </a>
                  <br />
                  <a className="contact_heading" href="https://www.linkedin.com/in/dipak-kumal-984438204/" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-linkedin"></i> Linkedin
                  </a>
                </div>
                <a className="googlemaps-html" href="https://www.embed-map.com" id="get-data-forembedmap">https://www.embed-map.com</a>
                <style>
                  {`
                    #embedmap-canvas img {
                      max-width: none !important;
                      background: none !important;
                      font-size: inherit;
                      font-weight: inherit;
                    }
                  `}
                </style>
              </div>
            </div>
            <div className="col-lg-6">
              {/* Contact Form */}
              <form>
                <input type="text" className="form-control form-control-lg" placeholder="Name" />
                <input type="email" className="form-control mt-3" placeholder="Email" />
                <input type="text" className="form-control mt-3" placeholder="Subject" />
                <div className="mb-3 mt-3">
                  <textarea className="form-control" rows={5} id="comment" name="text" placeholder="Project Details"></textarea>
                </div>
              </form>
              <button type="button" className="btn btn-success mt-3">Contact Me</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer>
        <div className="text">
          <span>Created By <a href="https://github.com/dipak1203" target="_blank" rel="noopener noreferrer">DIPAKKUMAL</a> | © 2023 All Rights Reserved.</span>
        </div>
      </footer>
    </div>
  );
}
