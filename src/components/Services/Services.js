import React from 'react';

const Services = () => {
    return (
        <section id="services" className="our-services">
            <div className="container">
                <div className="row text-center">
                    <h1 className="display-3 fw-bold">Our services</h1>
                    <div className="heading-line mb-5"></div>
                </div>
            </div>
            {/* description content  */}
            <div className="container">
                <div className="row pt-2 pb-2 mt-5 mb-3">
                    <div className="col-md-6 border-right">
                        <div className="bg-white p-3">
                            <h2 className="fw-bold text-capitalize text-center">
                                Our Services range From Initial Design To Deployment anywhere anytime
                            </h2>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="bg-white p-4 text-start">
                            <p className="fw-light">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum veritatis impedit vero aut 
                                inventore nemo exercitationem architecto voluptate saepe! 
                                Mollitia fugiat illo reiciendis inventore? Debitis aliquam ipsa velit sed. Recusandae.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* start the content for the services  */}
            <div className="container">

                {/* marketing content  */}
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4">
                        <div className="services__content">
                             <div className="icon fas fa-paper-plane">
                                 <h3 className="display-3--title mt-1">
                                     Marketing
                                 </h3>
                             </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4">
                        <div className="services__content">

                        </div>
                    </div>
                </div>

                {/* start the web development content  */}
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4">
                        <div className="services__content">

                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4">
                        <div className="services__content">

                        </div>
                    </div>
                </div>

                {/* cloud hosting content  */}
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4">
                        <div className="services__content"></div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4">
                        <div className="services__content"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;