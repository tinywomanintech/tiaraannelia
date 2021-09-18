import React from 'react';
import { Container } from 'react-bootstrap';

export default function Projectsme() {
  return (
    <section className="aboutme">
      <Container>
        <div className="aboutme-text d-flex pt-5 pb-5">
          <h1>Projects</h1>
        </div>
        <div className="belovedme aboutme-text d-flex justify-content-evenly pt-5">
          <div className="text">
            <p>My works</p>
          </div>
          <div className="description">
            <p>You can see my project here.</p>
          </div>
        </div>
        <div className="belovedme aboutme-text d-flex justify-content-evenly pt-5">
          <div className="text">
            <p>soon</p>
          </div>
          <div className="description pb-5">
            <p>soon</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
