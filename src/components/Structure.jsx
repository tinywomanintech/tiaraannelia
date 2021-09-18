import React from 'react';
import { Container } from 'react-bootstrap';
import { HashLink as Link } from 'react-router-hash-link';

export default function Structure() {
  return (
    <section className="hero-structure">
      <Container>
        <div className="structure-title d-flex">
          <p>About the project</p>
          <p>
            Hello everyone, here I have posted the
            <br />
            design concept of my first portfolio site. <br />
            in this project you will see the structure
            <br />
            of the site and all its main pages
          </p>
        </div>
        <div className="structure-title-2 d-flex ">
          <p>Site structure</p>
          <div className="btn-structure ">
            <div className="btn-site">
              <Link to="/about">About</Link>
            </div>
            <div className="btn-site">
              <Link to="/projects">Projects</Link>
            </div>
            <di className="btn-site">
              <Link to="/blog">Blog</Link>
            </di>
            <div className="btn-site">
              <Link to="/contacts">Contacts</Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
