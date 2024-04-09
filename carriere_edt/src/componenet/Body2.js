import "../style/secondbody.css";
function SecondBody() {
  return (
    <>
      <div className="container-fluid mt-5 secod-body">
        <div className="row">
          <div className="col-sm-4" id="voi">
            <h3>Column 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris...
            </p>
            <button type="button" className="btn btn-primary">
              Primary
            </button>
          </div>
          <div className="col-sm-4" id="entreprise">
            <h3>Column 2</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris...
            </p>
            <button type="button" className="btn btn-primary">
              Primary
            </button>
          </div>
          <div className="col-sm-4" id="emploi">
            <h3>Column 3</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris...
            </p>
            <button type="button" className="btn btn-primary">
              Primary
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default SecondBody;
