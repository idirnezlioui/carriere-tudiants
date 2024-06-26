import "../style/body3.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Bodytree() {
  const [sectors, setSectors] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/sectors')
      .then(response => {
        setSectors(response.data);
      })
      .catch(error => {
        console.error('impossible d`obtenire l`api');
      });
  }, []);

  return (
    <div className="container">
      <div className="row">
        <h3 className="text-start">Secteurs en forte demande</h3>
      </div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Aéronautique
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Tech
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Distribution
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Aliments et boissons
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Industrie
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Santé
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          {/* You can iterate over sectors to display data */}
          {sectors.aeronautique && sectors.aeronautique.map((sector, index) => (
            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
              <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-12">
                  <div className="card">
                    <img
                      className="card-img-top"
                      src=""
                      alt="Card image"
                    />
                    <div className="card-body">
                      <h4 className="card-title">{sector.name}</h4>
                      <p className="card-text">{sector.location}</p>
                      <a href="#" className="btn btn-primary">
                        Suivre
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Bodytree;
