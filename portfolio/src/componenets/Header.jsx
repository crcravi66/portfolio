import React from "react";


const Header = () => {
    return (

        <header id="header" class="fixed-top">
            <div class="container d-flex align-items-center justify-content-between">

                <h1 class="logo"><a href="index.html">ARUNPANDI</a></h1>
                {/* <!-- Uncomment below if you prefer to use an image logo -->
      <!-- <a href="index.html" class="logo"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->*/}
                <nav id="navbar" class="navbar">
                    <ul>
                        <li><a class="nav-link scrollto active" href="#hero">Home</a></li>
                        <li><a class="nav-link scrollto" href="#about">About</a></li>
                        <li><a class="nav-link scrollto " href="#work">Work</a></li>
                        <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
                    </ul>
                    <i class="bi bi-list mobile-nav-toggle"></i>
                </nav>
            </div>
        </header>
    )
}


export default Header