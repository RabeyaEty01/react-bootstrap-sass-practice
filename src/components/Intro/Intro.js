import React, { useState } from 'react';
import introImg from '../../images/arts/intro-section-illustration.png';
import { IoCloseOutline } from "react-icons/io5";
import { BiLoaderAlt } from "react-icons/bi";

const Intro = () => {
    const [modal, setModal] = useState(false);
    const [videoLoading, setVideoLoading] = useState(true);

    const openModal = () => {
        setModal(!modal);
    };

    const spinner = () => {
        setVideoLoading(!videoLoading);
    };


    return (
        <div>
            <section id="home" className="intro-section">

                <div className="container">
                    {/* start the content for the intro  */}
                    <div className="row align-items-center text-white">
                        <div className="col-md-6 intros text-start">
                            <h1 className="display-2">
                                <span className="display-2--intro">Hey!, <br /> I'm Rabeya</span>
                                <span className="display-2--description lh-base">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Quos, illo? Molestiae nemo facilis, culpa laboriosam
                                    dolore est nostrum earum reiciendis magni sapiente!
                                </span>
                            </h1>

                            <button type="button" class="btn-rounded rounded-pill bg-white border-0 d-flex justify-content-between px-2 py-1">
                                <span className='fw-bold m-2'>Get in Touch</span>
                                <span className='btn-icon rounded-circle p-2 m-1'><i className="fas fa-arrow-right m-1 text-white"></i>
                                </span>
                            </button>
                        </div>


                        {/* start the content for the video  */}
                        <div className="col-md-6 intros text-end">
                            <div onClick={openModal} className="video-box">
                                <img src={introImg} className="img-fluid" alt="video illustration" />
                                <a href="#" className="position-absolute top-50 start-50 translate-middle">
                                    <span >
                                        <i className="fas fa-play-circle">
                                        </i>
                                    </span>
                                    <span className="border-animation border-animation--border-1" />
                                    <span className="border-animation border-animation--border-2" />
                                </a>
                                {modal ? (
                                    <section className="modal__bg">
                                        <div className="modal__align">
                                            <div className="modal__content shadow" modal={modal}>
                                                <IoCloseOutline
                                                    className="modal__close"
                                                    arial-label="Close modal"
                                                    onClick={setModal}
                                                />
                                                <div className="modal__video-align">
                                                    {videoLoading ? (
                                                        <div className="modal__spinner">
                                                            <BiLoaderAlt
                                                                className="modal__spinner-style"
                                                                fadeIn="none"
                                                            />
                                                        </div>
                                                    ) : null}
                                                    <iframe
                                                        className="modal__video-style"
                                                        onLoad={spinner}
                                                        loading="lazy"
                                                        width="800"
                                                        height="500"
                                                        src="https://www.youtube.com/embed/4UZrsTqkcW4"
                                                        title="YouTube video player"
                                                        frameBorder="0"
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                        allowfullscreen
                                                    ></iframe>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                ) : null}
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