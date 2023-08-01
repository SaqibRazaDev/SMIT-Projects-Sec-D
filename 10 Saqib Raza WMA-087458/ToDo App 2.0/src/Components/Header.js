import React from 'react';

export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-mint-cream mb-3">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold" href="/">TaskWise</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item mx-2">
                <a className="nav-link" aria-current="page" href="/">About</a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="/">Features</a>
              </li>
              <li className="nav-item mx-2">
                <button className="btn btn-primary">Buy Pro</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <hr />
      <div className='row mt-5'>
        <div className='col-'>
          <h1>To Do List App</h1>
          <p>
            Designed & Developed by <span className='fw-bold'>Saqib Raza</span>
          </p>
        </div>
      </div>


    </>

  );
}
