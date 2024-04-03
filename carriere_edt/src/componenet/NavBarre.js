import { useState, useEffect } from "react";
import "../style/navbar.css"
function NavBarre() {
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Logo</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active acc" aria-current="page" href="#">Acceuil</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Ta voie</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Ton stage</a>
                        </li>
                          
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Ton altérnance</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Ton job</a>
                        </li>
                    </ul>
                    <button className="btn btn-primary aa" type="submit">Button</button>

                </div>
            </div>
        </nav>
    )
}
export default NavBarre;