import React from "react";
import "../style/footer.css";
import "bootstrap/dist/css/bootstrap.min.css";

// MARK: Footer function to show footer part of the web page - it consists of own css style and bootstrap 
function Footer() {
  return (
    <div class="container">
      <div class="row">
        <div class="col-md-3 alignleft">
          <img src={require("../asset/databoss.png")} class="dataBossIcon" alt="Databoss" />
        </div>
        <div class="col-md-3 alignCenter">
          <img src={require("../asset/social/facebook-white.svg")} class="socialIcon" alt="Facebook" />
          <img src={require("../asset/social/instagram-white.svg")} class="socialIcon" alt="Instagram" />
          <img src={require("../asset/social/twitter-white.svg")} class="socialIcon" alt="Twitter" />
        </div>
        <div class="col-md-6 alignRight">
          <img src={require("../asset/store/app-store.svg")} class="storeIcon" alt="AppStore" />
          <img src={require("../asset/store/play-store.svg")} class="storeIcon" alt="AppStore" />
          <img src={require("../asset/store/windows-store.svg")} class="storeIcon" alt="AppStore" />
        </div>
      </div>
    </div>
  );
}

export default Footer;