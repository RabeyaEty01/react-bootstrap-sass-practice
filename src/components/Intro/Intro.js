import React from 'react';
import introImg from '../../images/arts/intro-section-illustration.png';

const Intro = () => {
    return (
        <div>
            <section id="home" className="intro-section">
                <div className="container">
                    {/* start the content for the intro  */}
                    <div className="row align-items-center text-white">
                        <div className="col-md-6 intros text-start">
                            <h1 className="display-2">
                                <span className="display-2--intro">Hey!, I'm Rabeya</span>
                                <span className="display-2--description lh-base">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Quos, illo? Molestiae nemo facilis, culpa laboriosam
                                    dolore est nostrum earum reiciendis magni sapiente!
                                </span>
                            </h1>
                            <button type="button" class="rounded-pill btn-rounded">Get in Touch
                                <span>
                                    <i className="fas fa-arrow-right"></i>
                                </span>
                            </button>

                        </div>

                        {/* start the content for the video  */}
                        <div className="col-md-6 intros text-end">
                            <div className="video-box">
                                <img src={introImg} className="img-fluid" alt="video illustration" />
                                <a href="#" className="position-absolute top-50 start-50 translate-middle">
                                    <span>
                                        <i className="fas fa-play-circle"></i>
                                    </span>
                                    <span className="border-animation border-animation--border-1"/>
                                    <span className="border-animation border-animation--border-2"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,160L48,176C96,192,192,224,288,202.7C384,181,480,107,576,117.3C672,128,768,224,864,224C960,224,1056,128,1152,101.3C1248,75,1344,117,1392,138.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg> 
            </section>
        </div>
    );
};

export default Intro;