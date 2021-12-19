import React from 'react';
import img1 from '../../images/campanies/campany-1.png';
import img2 from '../../images/campanies/campany-2.png';
import img3 from '../../images/campanies/campany-3.png';
import img4 from '../../images/campanies/campany-4.png';
import img5 from '../../images/campanies/campany-5.png';
import img6 from '../../images/campanies/campany-6.png';

const Companies = () => {
    return (
        <section id="comapnies" className="companies">
            <div className="container">
                <div className="row text-center">
                    <h4 className="fw-bold lead mb-3">Trusted by comapnies like</h4>
                    <div className="heading-line mb-5"></div>
                </div>
            </div>
            {/* companies logo  */}
            <div className="container">
                <div className="row g-3">
                    <div className="col-6 col-md-4 col-lg-2">
                        <div className='card shadow-sm border-0 mw-100 '>
                            <img src={img1} alt="Company 1 logo" className="img-fluid m-1" />
                        </div>

                    </div>
                    <div className="col-6 col-md-4 col-lg-2">
                        <div className='card shadow-sm border-0 mw-100 '>
                            <img src={img2} alt="Company 1 logo" className="img-fluid m-1" />
                        </div>

                    </div>
                    <div className="col-6 col-md-4 col-lg-2">
                        <div className='card shadow-sm border-0 mw-100 '>
                            <img src={img3} alt="Company 1 logo" className="img-fluid m-1" />
                        </div>

                    </div>
                    <div className="col-6 col-md-4 col-lg-2">
                        <div className='card shadow-sm border-0 mw-100 '>
                            <img src={img4} alt="Company 1 logo" className="img-fluid m-1" />
                        </div>

                    </div>
                    <div className="col-6 col-md-4 col-lg-2">
                        <div className='card shadow-sm border-0 mw-100 '>
                            <img src={img5} alt="Company 1 logo" className="img-fluid m-1" />
                        </div>

                    </div>
                    <div className="col-6 col-md-4 col-lg-2">
                        <div className='card shadow-sm border-0 mw-100 '>
                            <img src={img6} alt="Company 1 logo" className="img-fluid m-1" />
                        </div>

                    </div>


                </div>
            </div>
        </section>
    );
};

export default Companies;