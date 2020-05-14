import React from "react";
import "./Timer.css";

function Timer() {
    return (
        <section className="timer container">
            <div className="row justify-content-center alert alert-light no-gutters">
                <div className="col col-3 text-center">
                    <section>
                        <h1>00</h1>
                        <p>
                            <small>Hours</small>
                        </p>
                    </section>
                </div>

                <div className="col col-3  text-center">
                    <section>
                        <h1>00</h1>
                        <p>
                            <small>Minitues</small>
                        </p>
                    </section>
                </div>

                <div className="col col-3  text-center">
                    <section>
                        <h1>00</h1>
                        <p>
                            <small>Sec</small>
                        </p>
                    </section>
                </div>
            </div>
            <div className="row justify-content-center pb-3">
                <button className="btn btn-outline-primary">Set Timer!</button>
            </div>
        </section>
    );
}

export default Timer;
