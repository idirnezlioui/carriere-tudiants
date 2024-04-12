import "../style/body4.css";

function BodyForth() {
  return (
    <div className="container-fluid bd">
      <div className="row">
        <div className="col-sm-12">
          <h3 className="text-start">Ces entreprises vous attendent</h3>
        </div>
      </div>
      <div className="row">
        <div className="container">
          <div id="carouselExampleIndicators" class="carousel slide">
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="container">
                    <div className="row">
                      <h3 className="col-sm-12">Luxe et cosmétique</h3>
                    </div>
                    <div className="row">
                      <div className="col-sm-2" id="ent1"></div>
                      <div className="col-sm-2" id="ent2"></div>
                      <div className="col-sm-2" id="ent3"></div>
                      <div className="col-sm-2" id="ent4"></div>
                      <div className="col-sm-2" id="ent5"></div>
                      <div className="col-sm-2" id="ent6">
                        
                      </div>
                    </div>
                    <div className="row">
                      <h3 className="col-sm-12">Luxe et cosmétique</h3>
                    </div>
                    <div className="row">
                      <div className="col-sm-2" id="ent1"></div>
                      <div className="col-sm-2" id="ent2"></div>
                      <div className="col-sm-2" id="ent3"></div>
                      <div className="col-sm-2" id="ent4"></div>
                      <div className="col-sm-2" id="ent5"></div>
                      <div className="col-sm-2" id="ent6">
                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div className="container">
                  <div className="row">
                    <h3  className="col-sm-12">Luxe et cosmétique</h3>
                  </div>
                  <div className="row">
                    <div className="col-sm-4" id="ent4"></div>
                    <div className="col-sm-4" id="ent5"></div>
                    <div className="col-sm-4" id="ent6">
                      
                    </div>
                  </div>
                  <div className="row">
                    <h3 className="col-sm-12">Luxe et cosmétique</h3>
                  </div>
                  <div className="row">
                    <div className="col-sm-4" id="ent4"></div>
                    <div className="col-sm-4" id="ent5"></div>
                    <div className="col-sm-4" id="ent6">
                      
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev">
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next">
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BodyForth;
