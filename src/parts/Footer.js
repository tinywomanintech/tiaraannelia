import React from 'react';
import { ImLinkedin, ImGithub, ImTwitter } from 'react-icons/im';
import { AiFillGitlab } from 'react-icons/ai';
import { SiInstagram } from 'react-icons/si';
import { Container } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer className="">
      <Container>
        <div className="d-flex justify-content-end  ">
          <a className="me-5 text-decoration-none link-dark" href="https://www.linkedin.com/in/tiaraannelia/" target="_blank" rel="noreferrer">
            <ImLinkedin />
          </a>
          <a className="me-5 text-decoration-none link-dark" href="https://github.com/tinywomanintech" target="_blank" rel="noreferrer">
            <ImGithub />
          </a>
          <a className="me-5 text-decoration-none link-dark" href="https://twitter.com/tiaraanneliac" target="_blank" rel="noreferrer">
            <ImTwitter />
          </a>
          <a className="me-5 text-decoration-none link-dark" href=" https://gitlab.com/tinywomanintech" target="_blank" rel="noreferrer">
            <AiFillGitlab />
          </a>
          <a className="me-5 text-decoration-none link-dark" href="https://gitlab.com/tinywomanintech" target="_blank" rel="noreferrer">
            <SiInstagram />
          </a>
          <p className="mb-0 ms-auto p-2 bd-highlight"> tiarannelia@gmail.com</p>
        </div>
      </Container>
    </footer>
  );
}
