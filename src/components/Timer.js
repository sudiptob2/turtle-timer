/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import "./Timer.css";

const Timer = () => {
    const inputEl = useRef(null);
    const [countDownToString, setCountDownToString] = useState(
        "July 30, 2020 00:00:00"
    );
    const [timerDays, setTimerDays] = useState("00");
    const [timerHours, setTimerHours] = useState("00");
    const [timerMin, setTimerMin] = useState("00");
    const [timerSec, setTimerSec] = useState("00");
    const [start, setStart] = useState(false);

    let interval = useRef();

    const handleCountDownStart = () => {
        setCountDownToString(inputEl.current.value);
        console.log(countDownToString);
    };
    //"July 30, 2020 00:00:00"
    const startTimer = () => {
        const countDownDate = new Date(countDownToString).getTime();
        console.log(countDownDate);

        interval = setInterval(() => {
            const now = new Date();
            const distance = countDownDate - now;
            console.log(distance);
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
        }, 1000);
    };

    useEffect(() => {
        startTimer();
        return () => {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            clearInterval(interval.current);
        };
    }, [countDownToString]);

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
                <div className="col-lg-6 pb-2">
                    <input
                        type="text"
                        ref={inputEl}
                        className="time-input form-control "
                        placeholder="Enter time HH : MM : SS"
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
        </section>
    );
};

export default Timer;
