//import { useState, useEffect } from "react";
import NavBarre from "./NavBarre";
import Body from "./Body";
import Footer from "./footer";

function pageAcceuil() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <NavBarre />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-sm-12 col-xm-12">
            <h1 id="titre">
              Carrière étudiant t'accompagne tout au long de ta vie d'étudiant
            </h1>
          </div>
        </div>
      </div>
      <Body />
      <Footer />
    </>
  );
}
export default pageAcceuil;
