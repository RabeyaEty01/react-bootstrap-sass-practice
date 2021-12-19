import React from 'react';
import img1 from '../../images/services/service-1.png';
import img2 from '../../images/services/service-2.png';
import img3 from '../../images/services/service-3.png';

const Services = () => {
    return (
        <section id="services" className="services my-5">
            <div className="container">
                <div className="row text-center">
                    <h1 className="display-3 fw-bold">Our services</h1>
                    <div className="heading-line"></div>
                </div>
            </div>
            {/* description content  */}
                <div className="row pt-2 pb-2 mt-0 mb-3">
                    <div className="col-12 col-md-6 col-lg-6 border-right">
                        <div className="bg-white p-3">
                            <h2 className="fw-bold text-capitalize text-center">
                                Our Services range From Initial Design To Deployment anywhere anytime
                            </h2>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6">
                        <div className="bg-white p-4 text-start">
                            <p className="fw-light">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum veritatis impedit vero aut
                                inventore nemo exercitationem architecto voluptate saepe!
                                Mollitia fugiat illo reiciendis inventore? Debitis aliquam ipsa velit sed. Recusandae.
                            </p>
                        </div>
                    </div>
                </div>
            
            {/* start the content for the services  */}
            <div className="container">

                {/* marketing content  */}
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-6  services mt-4">
                        <div className="services__content">
                            <div className="text-primary fs-1 d-block  fas fa-paper-plane"></div>
                                <h3 className="display-3--title mt-1">
                                    Marketing
                                </h3>
                                <p className="lh-lg">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum veritatis impedit vero aut
                                    inventore nemo exercitationem architecto voluptate saepe!
                                    Mollitia fugiat illo reiciendis inventore? Debitis aliquam ipsa velit sed. Recusandae.
                                </p>

                                <button type="button" class="btn-rounded rounded-pill bg-white border-primary d-flex justify-content-between px-2 py-1">
                                <span className='fw-bold m-2'>Learn More</span>
                                <span className='btn-icon rounded-circle p-2 m-1'><i className="fas fa-arrow-right m-1 text-white"></i>
                                </span>
                            </button>
                        
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 services mt-4 text-end">
                        <div className="services__pic">
                           <img src={img1} className='img-fluid' alt="" />
                        </div>
                    </div>
                </div>

                {/* start the web development content  */}
                <div className="row flex-column-reverse flex-lg-row">
                    <div className="col-12 col-md-6 col-lg-6 services mt-4 text-start  ">
                        <div className='text-center'>
                        <img src={img2} className='img-fluid' alt="" />
                        </div>
                    </div>
                    <div className="col-12 col-md-5 col-lg-6  services mt-4 ">
                        <div className="services__content">
                            <div className="text-primary fs-1 d-block fas fa-code"></div>
                                <h3 className="display-3--title mt-1">
                                    Web development
                                </h3>
                                <p className="lh-lg">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum veritatis impedit vero aut
                                    inventore nemo exercitationem architecto voluptate saepe!
                                    Mollitia fugiat illo reiciendis inventore? Debitis aliquam ipsa velit sed. Recusandae.
                                </p>

                                <button type="button" class="btn-rounded rounded-pill bg-white border-primary d-flex justify-content-between px-2 py-1">
                                <span className='fw-bold m-2'>Learn More</span>
                                <span className='btn-icon rounded-circle p-2 m-1'><i className="fas fa-arrow-right m-1 text-white"></i>
                                </span>
                                </button>
                            </div>
                        </div>
                    </div>
                

                {/* cloud hosting content  */}
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4">
                        <div className="services__content">
                            <div className="text-primary fs-1 d-block fas fa-cloud-upload-alt"></div>
                                <h3 className="display-3--title mt-1">
                                    Cloud hosting
                                </h3>
                                <p className="lh-lg">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum veritatis impedit vero aut
                                    inventore nemo exercitationem architecto voluptate saepe!
                                    Mollitia fugiat illo reiciendis inventore? Debitis aliquam ipsa velit sed. Recusandae.
                                </p>

                                <button type="button" class="btn-rounded rounded-pill bg-white btn-outline-primary d-flex justify-content-between px-2 py-1">
                                <span className='fw-bold m-2'>Learn More</span>
                                <span className='btn-icon rounded-circle p-2 m-1'><i className="fas fa-arrow-right m-1 text-white"></i>
                                </span>
                            </button>
                            
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4 text-end">
                        <div className="services__content">
                        <img src={img3} className='img-fluid' alt="" />
                        </div>
                    </div>
                </div>
            </div>


        </section>
    );
};

export default Services;