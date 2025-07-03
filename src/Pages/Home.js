import React, { useState, useEffect, useRef } from 'react';
import './Home.css';
import emailjs from '@emailjs/browser';
import {
  FaBars, FaTimes, FaMoon, FaSun,
  FaReact, FaNodeJs, FaCss3Alt, FaHtml5, FaJs
} from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';

const NAME = "Isuru Anuraga Sri Kuruppu";
const PROFESSION = "Cloud Enthusiast";
const GITHUB = "https://github.com/yourusername";
const LINKEDIN = "https://linkedin.com/in/yourusername";
const TWITTER = "https://x.com/yourusername";

const Navbar = ({ toggleTheme, darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          {['About', 'Projects', 'Skills', 'Education', 'Contact'].map((item) => (
            <li key={item} onClick={() => setIsOpen(false)}>
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </li>
          ))}
        </ul>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
          <button className="hamburger" onClick={toggleTheme} aria-label="Toggle dark mode">
            {darkMode ? <FaSun size={22} /> : <FaMoon size={22} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => (
  <section id="about" className="hero-section">
    <div className="container center">
      <h1 className="fade-in">
        Hi, I'm <span style={{ color: '#3b82f6' }}>{NAME}</span>
        <br />
        <span>
          <Typewriter
            words={['Fronted Developer ','Cloud Enthusiast', 'DeVops Enthusiast ', 'Problem Solver']}
            loop
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h1>
      <p>A passionate {PROFESSION} building modern web applications</p>
      <div className="btn-group">
        <a href="#contact" className="btn btn-primary">Get in Touch</a>
        <a href="/your-cv.pdf" download className="btn btn-success">Download My CV</a>
      </div>
    </div>
  </section>
);

const ProjectCard = ({ title, description, link }) => (
  <div className="project-card">
    <h3>{title}</h3>
    <p>{description}</p>
    <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
  </div>
);

const Projects = () => {
  const projectList = [
    { title: "Project One", description: "A modern web app built with React and Tailwind CSS.", link: "https://example.com" },
    { title: "Project Two", description: "students managemnt system using docker azure", link: "https://example.com" },
    { title: "Project Three", description: "A portfolio website showcasing my skills.", link: "https://example.com" },
    { title: "Project Four", description: "A portfolio website showcasing my skills.", link: "https://example.com" },
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2>My Projects</h2>
        <div className="project-grid">
          {projectList.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const skills = [
    { name: 'React', icon: <FaReact /> },
    { name: 'JavaScript', icon: <FaJs /> },
    { name: 'Tailwind CSS', icon: <FaCss3Alt /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'HTML', icon: <FaHtml5 /> },
    { name: 'CSS', icon: <FaCss3Alt /> },
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <h2>Technical Skills</h2>
        <div className="skill-grid">
          {skills.map(({ name, icon }) => (
            <div key={name} className="skill-card">
              <div className="skill-icon">{icon}</div>
              <p>{name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Education = () => {
  const educationList = [
    {
      degree: "MSc in Computer Science (Reading)",
      institution: "Staffordshire University",
      year: "2024",
    },
    {
      degree: "BSc in Software Engineering ",
      institution: "University of Plymouth",
      year: "2022",
    },
  ];

  const certifications = [
    { name: "Microsoft Certified: Azure Fundamentals (AZ-900)", year: "2024" },
    { name: "AWS Certified Cloud Practitioner", year: "2024" },
    { name: "Docker Essentials", year: "2023" },
    { name: "DevOps on Azure (In Progress)", year: "2025" },
  ];

  return (
    <section id="education" className="section education-section">
      <div className="container">
        <h2>Education & Certifications</h2>
        <div className="education-grid">
          <div className="edu-block">
            <h3>🎓 Education</h3>
            {educationList.map((edu, index) => (
              <div key={index} className="edu-card">
                <h4>{edu.degree}</h4>
                <p>{edu.institution}</p>
                <span className="edu-year">{edu.year}</span>
              </div>
            ))}
          </div>

          <div className="cert-block">
            <h3>📜 Certifications</h3>
            {certifications.map((cert, index) => (
              <div key={index} className="cert-card">
                <h4>{cert.name}</h4>
                <span className="cert-year">{cert.year}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_k2l2z5r',
      'template_v85z4gy',
      form.current,
      'K3D-4EwZv0zrX6XM3'
    ).then(() => {
      setStatus({ success: true, message: "Message sent successfully!" });
      e.target.reset();
    }).catch(() => {
      setStatus({ success: false, message: "Failed to send message. Please try again." });
    });
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2>Contact Me</h2>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="user_name" placeholder="Your Name" required />
          <input type="email" name="user_email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required />
          <button type="submit">Send Message</button>
        </form>
        {status && (
          <p style={{ marginTop: '1rem', color: status.success ? 'green' : 'red', fontWeight: 'bold' }}>
            {status.message}
          </p>
        )}
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="social-links">
        {[{ href: GITHUB, label: 'GitHub' }, { href: LINKEDIN, label: 'LinkedIn' }, { href: TWITTER, label: 'Twitter' }].map((social, idx) => (
          <a key={idx} href={social.href} target="_blank" rel="noopener noreferrer">{social.label}</a>
        ))}
      </div>
      <p>© {new Date().getFullYear()} {NAME}. All rights reserved.</p>
    </div>
  </footer>
);

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => setVisible(window.scrollY > 300);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`scroll-to-top ${visible ? 'visible' : ''}`}
      aria-label="Scroll to top"
    >
      ↑
    </button>
  );
};

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : '';
  }, [darkMode]);

  return (
    <div className="App">
      <Navbar toggleTheme={() => setDarkMode(!darkMode)} darkMode={darkMode} />
      <Hero />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Home;
