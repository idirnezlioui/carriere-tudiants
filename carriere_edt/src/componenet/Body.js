
import "../style/body.css"
function Body() {
    return(
        <div className="container-fluid">
                <div className="row"id="bd" >
                    <div className="col-md-4 col-sm-12" id="im1">
                        <h2 id="tit2">Ta voie</h2>
                        <p id="par">Ton cursus</p>
                        <p id="par">Ton école</p>
                        <button type="button" className="btn btn-warning" id="bt">Rechercher</button>
                    </div>
                    <div className="col-md-4"  id="im2">
                    <h2 id="tit2">Ta entreprise</h2>
                        <p id="par">stage</p>
                        <p id="par">Altérnanace</p>
                        <button type="button" className="btn btn-warning" id="bt">Rechercher</button>
                    </div>
                    <div className="col-md-4"  id="im3">
                    <h2 id="tit2">Ton emploi</h2>
                        <p id="par">Job d'étudiant</p>
                        <p id="par">Premier Emploi</p>
                        <p id="par">Job d'été</p>
                        <button type="button" className="btn btn-warning" id="bt">Rechercher</button>
                    </div>
                </div>
            </div>
    )
}
export default Body;