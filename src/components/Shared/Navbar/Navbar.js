import React from 'react';

const Navbar = () => {
    return (
      <nav class="navbar navbar-expand-lg navbar-dark menu shadow fixed-top">
        <div class="container container-fluid">
          <a class="navbar-brand" href="#">DotOnline</a>
         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul class="navbar-nav  mb-2 mb-lg-0 px-2">
              <li class="nav-item">
                <a className="nav-link active text-capitalize" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Services</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Testimonial</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">FAQ</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Portfolio</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Contact</a>
              </li>
            </ul>
            <button type="button" class="btn-rounded rounded-pill bg-white border-0 d-flex justify-content-between px-2 py-1">
            <span className='fw-bold m-2 py-1'>+1 72843512</span>
            <span className='btn-icon rounded-circle p-2 m-1'><i className="fas fa-phone-alt m-1 text-white"></i>
            </span>
            </button>
            
          </div>
        </div>
      </nav>

    );
};

export default Navbar;