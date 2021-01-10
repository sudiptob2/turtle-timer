import React from "react";
import "./App.css";
import Canvas from "./components/Canvas";
import FooterPage from "./components/FooterView/FooterPage";
import Timer from "./components/Timer";
import { TimerProvider } from "./TimerContext";

function App() {
    return (
        <div className="App">
            <div className="content-wrap">
                <div className="row no-bottom jumbotron jumbotron-fluid justify-content-center ">
                    <div className="text-center">
                        <h1>Turtle Race </h1>
                        <h1> Count Down Timer</h1>
                    </div>
                </div>
                <div className="row no-gutters">
                    <TimerProvider>
                        <div className="border col-md">
                            <Canvas />
                        </div>
                        <div className="border col-md">
                            <Timer />
                        </div>
                    </TimerProvider>

                </div>
                <div className="row justify-content-center alert alert-success no-gutters">
                    <p className="text-center">
                        Choose your{" "}
                        <span style={{ fontWeight: "bold" }}>Alpha.</span> When
                        the timer finishes you can test your luck weather your
                        turtle won or not. It's really fun!!
                    </p>
                    <p style={{ color: "red" }}>
                        Slower the Turtle, Better the Turtle!
                    </p>
                </div>

                <FooterPage />
            </div>
        </div>
    );
}

export default App;
