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
        <div className="row">
            <div className="col-md-4 col-lg-2">
                <div className="companies__logo-box shadow-sm"><img src={img1} alt="Company 1 logo" title="Company 1 Logo" className="img-fluid" /></div>
            </div>
            <div className="col-md-4 col-lg-2">
                <div className="companies__logo-box shadow-sm"><img src={img2} alt="Company 2 logo" title="Company 2 Logo" className="img-fluid" /></div>
            </div>
            <div className="col-md-4 col-lg-2">
                <div className="companies__logo-box shadow-sm"><img src={img3}alt="Company 3 logo" title="Company 3 Logo" className="img-fluid" /></div>
            </div>
            <div className="col-md-4 col-lg-2">
                <div className="companies__logo-box shadow-sm"><img src={img4} alt="Company 4 logo" title="Company 4 Logo" className="img-fluid" /></div>
            </div>
            <div className="col-md-4 col-lg-2">
                <div className="companies__logo-box shadow-sm"><img src={img5} alt="Company 5 logo" title="Company 5 Logo" className="img-fluid" /></div>
            </div>
            <div className="col-md-4 col-lg-2">
                <div className="companies__logo-box shadow-sm"><img src={img6} alt="Company 6 logo" title="Company 6 Logo" className="img-fluid" /></div>
            </div>
        </div>
    </div>
</section>
    );
};

export default Companies;