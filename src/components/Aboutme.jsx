import React from 'react';
import { Container } from 'react-bootstrap';

export default function Aboutme() {
  return (
    <section className="aboutme">
      <Container>
        <div className="aboutme-text d-flex justify-content-center pt-5">
          <h1>
            About
            <br />
            &#x2501; me
          </h1>
          <img src="https://i.ibb.co/mGS1JXq/hero-bg.jpg" alt="This is me" />
        </div>
        <div className="belovedme aboutme-text d-flex justify-content-evenly pt-5">
          <div className="text">
            <p>A lil bit about me</p>
          </div>
          <div className="description">
            <p>I'm a Frontend Developer, currently based in Indonesia. I'm passionate about improving my experiences in Programming, Design and constantly looking to learn new things everyday. I build things for web and mobile app.</p>
          </div>
        </div>
        <div className="belovedme aboutme-text d-flex justify-content-evenly pt-5">
          <div className="text">
            <p>Techstack</p>
          </div>
          <div className="description">
            <ul className=" pb-5">
              <li>ReactJs</li>
              <li>Javascript</li>
              <li>Git</li>
              <li>Tailwind</li>
              <li>Bootstrap</li>
              <li>SASS</li>
              <li>HTML/CSS</li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
