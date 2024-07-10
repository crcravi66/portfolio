import React from "react";
import overlayBg from '../assets/img/overlay-bg.jpg'

const Contact = () => {
    return (<section id="contact" className="paralax-mf footer-paralax bg-image sect-mt4 route"
        style={{ backgroundImage: `url(${overlayBg})` }}>
        <div className="overlay-mf"></div>
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <div className="contact-mf">
                        <div id="contact" className="box-shadow-full">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="title-box-2 pt-4 pt-md-0">
                                        <h5 className="title-left">
                                            Get in Touch
                                        </h5>
                                    </div>
                                    <div className="more-info">
                                        <p className="lead">
                                            I'm excited to hear about your project! Whether you have a clear vision or just a spark of
                                            an idea, I'm here to help you bring it to life.
                                        </p>
                                        <ul className="list-ico">
                                            <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                className="bi bi-geo-alt" viewBox="0 0 16 16">
                                                <path
                                                    d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                                                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                                            </svg> 2/199, west street, dhottappanayaicknur, usilampatti, madurai</li>
                                            <li><a href="tel:+918807208076" className="bi bi-phone alter-color"></a><a
                                                href="tel:+918807208076">+91 8807208076</a></li>
                                            <li><a className="bi bi-envelope alter-color" href="mailto:crcravi66@gmail.com"></a><a
                                                href="mailto:crcravi66@gmail.com"> crcravi66@gmail.com</a></li>
                                        </ul>
                                    </div>
                                    <div className="socials">
                                        <ul>
                                            <li><a href="https://www.facebook.com/ravi.c.1694?mibextid=ZbWKwL"><span
                                                className="ico-circle"><i className="bi bi-facebook"></i></span></a></li>
                                            <li><a
                                                href="https://www.instagram.com/dear_buddy_66?utm_source=qr&igsh=dWpqYXVtaTBnYXg="><span
                                                    className="ico-circle"><i className="bi bi-instagram"></i></span></a></li>
                                            <li><a href="https://x.com/Arunpandi66?t=4WOHs_70bnsqGS8AWKiWGA&s=08"><span
                                                className="ico-circle"><i className="bi bi-twitter"></i></span></a></li>
                                            <li><a href="linkedin.com/in/arun-pandi-6a7361284 "><span className="ico-circle"><i
                                                className="bi bi-linkedin"></i></span></a></li>
                                        </ul>
                                    </div>
                                    <p className="lead">
                                        Feel free to tell me about your project goals, challenges, and desired timeline. The more
                                        information you provide, the better I can understand your needs and tailor my services
                                        accordingly.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>)

}
export default Contact;



