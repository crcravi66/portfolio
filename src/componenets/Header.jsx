import React, { useEffect, useState } from "react";
// import ressumePDF from '../assets/img/Arun+Pandi+Resume.pdf'

const Header = () => {

    const [scrollY, setScrollY] = useState(0);
    const [headerClasses, setHeaderClasses] = useState('fixed-top')

    const scrollto = (el) => {
        let header = document.querySelector('#header')
        let offset = header.offsetHeight

        if (!header.classList.contains('header-scrolled')) {
            offset -= 16
        }

        let elementPos = el.offsetTop
        window.scrollTo({
            top: elementPos - offset,
            behavior: 'smooth'
        })
    }

    function handleMobileToggle(e) {
        const navbarEl = document.querySelector('#navbar');
        navbarEl.classList.toggle('navbar-mobile')
        e.target.classList.toggle('bi-list')
        e.target.classList.toggle('bi-x')
    }

    function handleMobileNavigation(e) {
        const elHash = document.querySelector(e.target.hash)
        if (elHash) {
            e.preventDefault()

            let navbar = document.querySelector('#navbar')
            if (navbar.classList.contains('navbar-mobile')) {
                navbar.classList.remove('navbar-mobile')
                let navbarToggle = document.querySelector('.mobile-nav-toggle')
                navbarToggle.classList.toggle('bi-list')
                navbarToggle.classList.toggle('bi-x')
            }
            scrollto(elHash)
        }
    }

    useEffect(() => {
        const onScroll = () => {
            let navbarlinks = document.querySelectorAll('#navbar .scrollto')
            let position = window.scrollY + 200

            setHeaderClasses((prevClasses) => {
                if (window.scrollY > 100) {
                    return prevClasses.includes('header-scrolled') ? prevClasses : `${prevClasses} header-scrolled`
                } else {
                    return 'fixed-top'
                }
            })


            navbarlinks.forEach(navbarlink => {
                if (!navbarlink.hash) return
                let section = document.querySelector(navbarlink.hash)
                if (!section) return
                if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
                    navbarlink.classList.add('active')
                } else {
                    navbarlink.classList.remove('active')
                }
            })
        };
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <header id="header" className={headerClasses}>
            <div className="container d-flex align-items-center justify-content-between">

                <h1 className="logo"><a href="index.html">ARUNPANDI</a></h1>
                <nav id="navbar" className="navbar">
                    <ul>
                        <li><a onClick={handleMobileNavigation} className="nav-link scrollto active" href="#hero">Home</a></li>
                        <li><a onClick={handleMobileNavigation} className="nav-link scrollto" href="#about">About</a></li>
                        <li><a onClick={handleMobileNavigation} className="nav-link scrollto " href="#work">Work</a></li>
                        <li><a onClick={handleMobileNavigation} className="nav-link scrollto " href="https://drive.google.com/file/d/1BcS1K3laEaCnAp8gobipfPRsXrdrRvmW/view?usp=sharing">Resume / CV</a></li>
                        <li><a onClick={handleMobileNavigation} className="nav-link scrollto" href="#contact">Contact</a></li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle" onClick={handleMobileToggle}></i>
                </nav>
            </div>
        </header>

    )
}


export default Header