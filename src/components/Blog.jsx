import React from 'react';
import { Container } from 'react-bootstrap';

export default function Blogs() {
  return (
    <section className="aboutme">
      <Container>
        <div className="aboutme-text d-flex pb-5 pt-5">
          <h1>Blog</h1>
        </div>
        <div className="belovedme aboutme-text d-flex justify-content-evenly pt-5">
          <div className="text">
            <p>soon</p>
          </div>
          <div className="description">
            <p>soon.</p>
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
