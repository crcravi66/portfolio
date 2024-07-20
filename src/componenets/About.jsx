import React from "react";
import profileImg from '../assets/img/profile.jpg'


const About = () => {
    return (<section id="about" className="about-mf sect-pt4 route">
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <div className="box-shadow-full">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-sm-6 col-md-5">
                                        <div className="about-img">
                                            <img src={profileImg} className="img-fluid rounded b-shadow-a"
                                                style={{ filter: "brightness(99%)" }} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-7">
                                        <div className="about-info">
                                            <p><span className="title-s">Name: </span> <span>Arun pandi</span></p>
                                            <p><span className="title-s">Profile: </span> <span>Front End Developer</span></p>
                                            <p><span className="title-s">Email: </span> <span><a
                                                href="mailto:crcravi66@gmail.com">arunravi166@gmail.com</a></span></p>
                                            <p><span className="title-s">Phone: </span> <span><a href="tel:+918807208076">+91
                                                8807208076</a></span></p>

                                        </div>
                                    </div>
                                </div>
                                <div className="skill-mf">
                                    <p className="title-s">Skill</p>
                                    <span>HTML</span> <span className="pull-right">85%</span>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{ width: "85%" }} aria-valuenow="85"
                                            aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <span>CSS3</span> <span className="pull-right">80%</span>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{ width: "80%" }} aria-valuenow="75"
                                            aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <span>JAVASCRIPT</span> <span className="pull-right">80%</span>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{ width: "80%" }} aria-valuenow="90"
                                            aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="about-me pt-4 pt-md-0">
                                    <div className="title-box-2">
                                        <h5 className="title-left">
                                            About me
                                        </h5>
                                    </div>
                                    <p className="lead">
                                        I'm <strong>Arunpandi</strong>, a passionate and creative UI developer with a strong understanding
                                        of both design principles and front-end development. I'm driven by a desire to translate
                                        user-centric concepts into intuitive and visually appealing interfaces that bridge the gap between
                                        user needs and business goals.
                                    </p>
                                    <p className="lead">
                                        Fresher of a UI developer, I've learn for <strong><i>HTML,CSS,JS</i></strong> and devloped my
                                        coding knoladge
                                    </p>
                                    <p className="lead">
                                        <strong>Visual Design:</strong> adept at crafting user interfaces that are both visually appealing
                                        and easy to navigate. I understand the importance of color theory, typography, and layout in
                                        creating a seamless user experience.
                                    </p>
                                    <p className="lead">
                                        <strong>Front-End Development :</strong> I'm proficient in various front-end technologies,
                                        including HTML, CSS, and JavaScript. I have a solid grasp of web development best practices and
                                        can write clean, efficient, and maintainable code to bring design mockups to life.
                                    </p>
                                    <p className="lead">
                                        <strong>Adaptability :</strong> I'm constantly learning and adapting to the evolving landscape of
                                        UI development.
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
export default About;