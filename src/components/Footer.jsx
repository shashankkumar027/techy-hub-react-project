import React from "react";

const Footer = () => {
  return (
    <footer>
      <div>
        <h1>TechyHUB</h1>
        <p>Copyright © 2023:</p> <p> @all rights reserved.</p>
      </div>

      <div>
        <h5>Follow Us</h5>
        <div>
          <a href="#home" target={"blank"}>
            Youtube
          </a>
          <a href="#about" target={"blank"}>
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/in/shashankkumar27/"
            target={"blank"}
          >
            Linkedin
          </a>
          <a
            href="https://github.com/shashankkumar027?tab=repositories"
            target={"blank"}
          >
            Github
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
