import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left"><b>

        <p>Quicksell Assignment</p>
        <p>Made by Parikshit Patil 21BIT0208</p>
      </b>
      </div>
      <div className="footer-right">
        <a href="https://github.com/Frankenstein707/" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/parikshit-patil-5495972b3/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
}

export default Footer;