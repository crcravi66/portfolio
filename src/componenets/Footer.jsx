import React, { useEffect, useState } from "react";

const Footer = () => {

    useEffect(() => {
        let backtotop = document.querySelector('.back-to-top')
        const toggleBacktotop = () => {
            if (window.scrollY > 100) {
                backtotop.classList.add('active')
            } else {
                backtotop.classList.remove('active')
            }
        }
        // clean up code
        window.removeEventListener('scroll', toggleBacktotop);
        window.addEventListener('scroll', toggleBacktotop, { passive: true });
        return () => window.removeEventListener('scroll', toggleBacktotop);
    }, []);

    return (
        <>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="copyright-box">
                                <p className="copyright">&copy; Copyright <strong>Arunpadi</strong>. All Rights Reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* <div id="preloader"></div> */}
            <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i
                className="bi bi-arrow-up-short"></i></a>

        </>
    )
}


export default Footer