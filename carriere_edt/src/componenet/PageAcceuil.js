import { useState, useEffect } from "react";
import NavBarre from "./NavBarre";
function pageAcceuil() {
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <NavBarre/>
                </div>
            </div>
        </div>
    )
}
export default pageAcceuil;