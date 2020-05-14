import React from "react";
import "./App.css";
import Canvas from "./components/Canvas";
import FooterPage from "./components/FooterView/FooterPage";
import Timer from "./components/Timer";

function App() {
    return (
        <div className="App ">
            <div className="content-wrap">
                <div className="row no-bottom jumbotron jumbotron-fluid justify-content-center">
                    <div className="text-center">
                        <h1>Turtle Race </h1>
                        <h1> Count Down Timer</h1>
                    </div>
                </div>
                <div className="row ">
                    <div className="border col-md">
                        <Canvas />
                    </div>
                    <div className="border col-md">
                        <Timer />
                    </div>
                    <div className="container-fluid">
                        <FooterPage />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
