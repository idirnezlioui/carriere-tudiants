
import "../style/body.css"

function Body() {
    return(
        <div className="container-fluid">
            <div className="row" id="bd">
                <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                    <div className="card" id="im1">
                        <div className="card-body">
                            <h2 className="card-title" id="tit2">Ta voie</h2>
                            <p className="card-text" id="par">Ton cursus</p>
                            <p className="card-text" id="par">Ton école</p>
                            <button type="button" className="btn btn-warning" id="bt">Rechercher</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                    <div className="card" id="im2">
                        <div className="card-body">
                            <h2 className="card-title" id="tit2">Ta entreprise</h2>
                            <p className="card-text" id="par">Stage</p>
                            <p className="card-text" id="par">Altérnanace</p>
                            <button type="button" className="btn btn-warning" id="bt">Rechercher</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 mb-4">
                    <div className="card" id="im3">
                        <div className="card-body">
                            <h2 className="card-title" id="tit2">Ton emploi</h2>
                            <p className="card-text" id="par">Job d'étudiant</p>
                            <p className="card-text" id="par">Premier Emploi</p>
                            <p className="card-text" id="par">Job d'été</p>
                            <button type="button" className="btn btn-warning" id="bt">Rechercher</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body;
