/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useRef, useState } from "react";
import useSound from 'use-sound';
import alertSound from '../sounds/alert.mp3';
import { TimerContext } from "../TimerContext";
import { useInterval } from "./CustomHooks";
import "./Timer.css";

const Timer = () => {

    const [playAlert] = useSound(alertSound);
    const [time, setTime] = useContext(TimerContext);
    const inputEl = useRef(null);
    const [distance, setDistance] = useState(-1);
    const [timerDays, setTimerDays] = useState("00");
    const [timerHours, setTimerHours] = useState("00");
    const [timerMin, setTimerMin] = useState("00");
    const [timerSec, setTimerSec] = useState("00");
    // if any invalid time date is given
    const [alert, setAlert] = useState(false);



    let interval = useRef();

    useEffect(() => {
        if (distance === 0) playAlert();

    }, [distance])

    const handleCountDownStart = () => {


        let hms = inputEl.current.value; // your input string
        let a = hms.split(":"); // split it at the colons
        // minutes are worth 60 seconds. Hours are worth 60 minutes.
        let seconds = +a[0] * 60 * 60 + +a[1] * 60 + +a[2];

        setTime(seconds); // update the context

        if (seconds) {
            setDistance(seconds * 1000);
        } else {
            setAlert(true);

        }
    };
    //"July 30, 2020 00:00:00"

    useInterval(() => {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minitues = Math.floor(
            (distance % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        if (distance < 0) {
            // stop our timer
            clearInterval(interval.current);

        } else {
            //Update ourr timer
            setTimerDays(days);
            setTimerHours(hours);
            setTimerMin(minitues);
            setTimerSec(seconds);
        }
        // Reduce the distance
        setDistance(distance - 1000);


    }, 1000);

    return (
        <section className="timer container">
            <div className="row justify-content-center alert alert-light no-gutters">
                <div className="col col-2 text-center">
                    <section>
                        <h1>{timerDays}</h1>
                        <p>
                            <small>Days</small>
                        </p>
                    </section>
                </div>
                <div className="col col-2 text-center">
                    <section>
                        <h1>{timerHours}</h1>
                        <p>
                            <small>Hours</small>
                        </p>
                    </section>
                </div>

                <div className="col col-2  text-center">
                    <section>
                        <h1>{timerMin}</h1>
                        <p>
                            <small>Minitues</small>
                        </p>
                    </section>
                </div>

                <div className="col col-2  text-center">
                    <section>
                        <h1>{timerSec}</h1>
                        <p>
                            <small>Sec</small>
                        </p>
                    </section>
                </div>
            </div>
            <div className="row  justify-content-center pb-3 ">
                <div className="col-lg-10 pb-2">
                    <input
                        type="text"
                        ref={inputEl}
                        className="time-input form-control "
                        placeholder="Format HH : MM : SS Example: 02 : 01 : 37"
                    />

                </div>

                <div className="col-lg-2">
                    <button
                        onClick={handleCountDownStart}
                        className="btn btn-outline-primary"
                    >
                        GO!
                    </button>
                </div>
            </div>
            <div className="row  justify-content-center p-3 ">
                {alert && (
                    <div className="container alert alert-danger" role="alert">
                        Please give interval in a valid format. Hours : Minitues
                        : Seconds !
                    </div>
                )}
            </div>
        </section>
    );
};

export default Timer;
