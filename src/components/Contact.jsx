import React from 'react';
import { Container } from 'react-bootstrap';

export default function Contact() {
  return (
    <section className="aboutme">
      <Container>
        <div className="aboutme-text d-flex pb-5 pt-5">
          <h1>
            Contact
            <br />
            with me
          </h1>
        </div>
        <div className="belovedme aboutme-text d-flex justify-content-evenly pt-5">
          <div className="text">
            <p>My contact</p>
          </div>
          <div className="description">
            <p>My social networks</p>
          </div>
        </div>
        <div className="belovedme aboutme-text d-flex justify-content-evenly pt-5">
          <div className="text">
            <p>&nbsp;</p>
          </div>
          <div className="description">
            <p>Here you can write to me wherever it is convenient for you and I will try to answer you as soon as possible. I hope our cooperation will be fruitful.</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
