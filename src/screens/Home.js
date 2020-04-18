import React from 'react';
import { Link } from "react-router-dom";
import "../style/home.css";
import "bootstrap/dist/css/bootstrap.css";

// MARK: Home component - it consists of own css style and bootstrap 
class Home extends React.Component {
    render() {
        return (
            <div class="container divHomeContainer">
                <div class="row">
                    <div class="col-xl-6">
                        <Link to="/series">
                            <div className="authContainer">
                                <img src={require("../asset/bg/bg3.jpg")} className="image" alt="Series" />
                                <div className="overlay">
                                    <div className="text" >
                                        SERIES
                                </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div class="col-xl-6">
                        <Link to="/movies">
                            <div className="authContainer">
                                <img src={require("../asset/bg/bg2.jpeg")} className="image" alt="Movies" />
                                <div className="overlay">
                                    <div className="text" >
                                        MOVIES
                                </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <h5>The Best Series/Movies...</h5>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;