import "../style/body3.css";
function Bodytree() {
  return (
    <div className="complet">
      <div className="container">
        <div className="row">
          <h3 className="text-start">Secteures en forte demande</h3>
        </div>
        <div className="row">
          <nav class="navbar navbar-expand-lg ">
            <div class="container-fluid">
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Aéronautique
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Tech
                    </a>
                  </li>

                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Distribution
                    </a>
                  </li>

                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Aliments et boissons
                    </a>
                  </li>

                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Industrie
                    </a>
                  </li>

                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Santé
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
          </div>
          <div class="carousel-item">
            <img src="..." class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="..." class="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
export default Bodytree;
