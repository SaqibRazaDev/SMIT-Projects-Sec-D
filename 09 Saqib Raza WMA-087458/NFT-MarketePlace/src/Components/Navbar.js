import React from 'react'
import logo from './Assets/logo.png';
import signup from './Assets/signup.png';

export default function Navbar() {
    return (

        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand  text-white" href="/"><img src={logo} alt="logo" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <a className="nav-link text-white active" aria-current="page" href="/">Marketplace</a>
                        <a className="nav-link text-white f-large" href="/">Rankings</a>
                        <a className="nav-link text-white" href="/">Connect a wallet</a>
                        <a className="n" href="/"><img className='img-fluid' src={signup} alt="signup" /></a>
                    </div>
                </div>
            </div>
        </nav>
    )
}
