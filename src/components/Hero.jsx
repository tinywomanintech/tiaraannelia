import React from 'react';
import { Container } from 'react-bootstrap';

export default function Hero() {
  return (
    <section className="hero">
      <Container className=" d-flex justify-content-start">
        <div className="hero-text">
          <h1>
            Tiara's
            <br />
            Portfolio <span>&#174;</span>
            <br />
            Website
          </h1>
        </div>
        <div className="hero-image">
          <img src="https://i.ibb.co/mGS1JXq/hero-bg.jpg" alt="This is me" />
        </div>
      </Container>
    </section>
  );
}
