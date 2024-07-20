import React from "react";

import swipeImg from '../assets/img/swipe.jpg'
import massively from '../assets/img/massively.jpg'
import hpImg from '../assets/img/hpproject.jpg'
import RefProject from '../assets/img/React-Ref-Demo-Project.jpeg'

const Portfolio = () => {
    return (<section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <div className="title-box text-center">
                        <h3 className="title-a">
                            Portfolio
                        </h3>
                        <div className="line-mf"></div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="work-box">
                        <div className="work-img">
                            <a href="https://crcravi66.github.io/html-practices/Index.html"><img src={swipeImg} alt=""
                                className="img-fluid" /></a>
                        </div>
                        <div className="work-content">
                            <div className="row">
                                <div className="col-sm-8">
                                    <h2 className="w-title">SWIPE PROJECT</h2>
                                    <div className="w-more">
                                        <span className="w-ctegory">Web Design</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="work-box">
                        <div className="work-img">
                            <a href="https://crcravi66.github.io/html-practices/massively.html"><img src={massively}
                                alt="" className="img-fluid" /></a>
                        </div>
                        <div className="work-content">
                            <div className="row">
                                <div className="col-sm-8">
                                    <h2 className="w-title">MASSIVELY PROJECT</h2>
                                    <div className="w-more">
                                        <span className="w-ctegory">Web Design</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="work-box">
                        <div className="work-img">
                            <a href="https://crcravi66.github.io/hp-project/"><img src={hpImg} alt=""
                                className="img-fluid" /></a>
                        </div>
                        <div className="work-content">
                            <div className="row">
                                <div className="col-sm-8">
                                    <h2 className="w-title">HP Project</h2>
                                    <div className="w-more">
                                        <span className="w-ctegory">Web Design</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div ><h1 className="mb-5 fw-bold fs-3 text-primary w-title ">React Projects :-</h1></div>
                <div className="col-md-6">
                    <div className="work-box">
                        <div className="work-img">
                            <a href="https://crcravi66.github.io/Refs_Demo_Project/"><img src={RefProject} alt=""
                                className="img-fluid" /></a>
                        </div>
                        <div className="work-content">
                            <div className="row">
                                <div className="col-sm-8">
                                    <h2 className="w-title">Ref Demo Project(React.js)</h2>
                                    <div className="w-more">
                                        <span className="w-ctegory">Web Design</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>)
}


export default Portfolio;