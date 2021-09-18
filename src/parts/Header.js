import { Navbar, Container, Nav } from 'react-bootstrap';
import { HashLink as Link } from 'react-router-hash-link';

export default function Header() {
  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-nav ms-auto mb-2 mb-lg-0">
            <Link className="nav-item nav-link me-5 " to="/tiaraannelia">
              Home
            </Link>
            <Link className="nav-item nav-link me-5 " to="/about">
              About
            </Link>
            <Link className="nav-item nav-link me-5 " to="/projects">
              Projects
            </Link>
            <Link className="nav-item nav-link me-5 " to="/blog">
              Blog
            </Link>
            <Link className="nav-item nav-link me-5 " to="/contacts">
              Contacts
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    // <nav class="navbar navbar-expand-lg navbar-light navbar-tp">
    //   <div class="container">
    //     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //       <span class="navbar-toggler-icon"></span>
    //     </button>
    //     <div class="collapse navbar-collapse" id="navbarSupportedContent">
    //       <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
    //         <li class="nav-item">
    //           <Link class="nav-link active" aria-current="page" href="#">
    //             Features
    //           </Link>
    //         </li>
    //         <li class="nav-item">
    //           <Link class="nav-link" href="#">
    //             Pricing
    //           </Link>
    //         </li>
    //         <li class="nav-item">
    //           <Link class="nav-link" href="#">
    //             Stories
    //           </Link>
    //         </li>
    //         <li class="nav-item">
    //           <Link class="nav-link" href="#">
    //             Premium
    //           </Link>
    //         </li>
    //         <li class="nav-item">
    //           <Link class="nav-link" href="#">
    //             Contact
    //           </Link>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  );
}
