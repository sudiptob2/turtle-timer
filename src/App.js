import React from "react";
import "./App.css";
import Canvas from "./components/Canvas";

function App() {
    return (
        <div className="App container-fluid">
            <div className="row">
                <div className="border col-xs-6">
                    <Canvas />
                </div>
                <div className="border col-xs-6">
                    {" "}
                    <h1>I am the timer here</h1>
                </div>
            </div>
        </div>
    );
}

export default App;
