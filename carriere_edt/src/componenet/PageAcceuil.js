//import { useState, useEffect } from "react";
import NavBarre from "./NavBarre";
import Body from "./Body";
import Footer from "./footer";
import SecondBody from "./Body2";
import Bodytree from "./Body3";
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
      <Body />
      <SecondBody />
      <Bodytree/>
      <Footer />
    </>
  );
}
export default pageAcceuil;
