import "../style/navbar.css";
import Logo from "../images/LOGO_Rond.png";

function NavBarre() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top" id="navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={Logo} className="img-thumbnail" alt="Logo" id="image" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active acc" aria-current="page" href="#">
                  Acceuil
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Ta voie
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Ton stage
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Ton altérnance
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Ton job
                </a>
              </li>
            </ul>
            <button className="btn btn-primary" id="bt1">
              Se connecter
            </button>
            <button type="button" className="btn btn-secondary" id="bt2">
              S'insecrire
            </button>
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-xm-12">
            <h1 id="titre" >
              Carrière étudiant t'accompagne tout au long de ta vie d'étudiant
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBarre;
