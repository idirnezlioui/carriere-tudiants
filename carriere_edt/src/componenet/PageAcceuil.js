//import { useState, useEffect } from "react";
import NavBarre from "./NavBarre";
import Footer from "./footer";
import SecondBody from "./Body2";
import Bodytree from "./Body3";
import BodyForth from "./body4";
function pageAcceuil() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <NavBarre />
          </div>
        </div>
      </div>

      <SecondBody />
      <Bodytree />
      <BodyForth />
      <Footer />
    </>
  );
}
export default pageAcceuil;
