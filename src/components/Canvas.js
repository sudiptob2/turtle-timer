import React, { useEffect, useRef, useState } from "react";
import Turtle from "./animals_1.png";
function Canvas() {
    const [timerStarted, settimerStarted] = useState(true);
    const canvasRef = useRef(null);
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }
    useEffect(() => {
        let imgTag = new Image();
        const canvas = canvasRef.current;
        //canvas.width = window.innerWidth / 2;
        canvas.height = window.innerHeight - 10;
        const c = canvas.getContext("2d");
        c.font = "24px Arial";
        var x = 0;
        var y = canvas.height;
        imgTag.onload = animate;
        imgTag.src = Turtle;
        let arrY = [];
        let initialVelocity = [];
        let acc = [];
        let numberOfTurtle = 20;
        let gap = 64;
        for (let i = 0; i < numberOfTurtle; i++) {
            arrY[i] = y - 64;
            c.drawImage(imgTag, x + gap * i, arrY[i]); // draw image at current position
            c.fillText(`${i + 1}`, 25 + x + gap * i, arrY[i] + 80); // tune the x and y position of the turtle number

            initialVelocity[i] = Math.random();
            acc[i] = Math.random(); // acceleration
            //console.log(initialVelocity);
        }
        let count = 0;
        let accl = [...acc];
        function animate() {

            if (count % 50 === 0) {
                acc = [...accl];
                for (let i = 0; i < getRandomInt(1, 21); i++) {
                    acc[getRandomInt(0, numberOfTurtle)] =
                        getRandomInt(1, 5) * Math.random();
                }
            }
            c.clearRect(0, 0, canvas.width, canvas.height); // clear canvas
            for (let i = 0; i < numberOfTurtle; i++) {

                c.drawImage(imgTag, x + gap * i, arrY[i]); // draw image at current position
                c.fillText(`${i + 1}`, 25 + x + gap * i, arrY[i]); // tune the x and y position of the turtle number

                arrY[i] = arrY[i] - 0.2 * acc[i];
            }
            count++;

            if (timerStarted && Math.max(...arrY) > 0) requestAnimationFrame(animate); // this is a loop

        }


    });
    return <canvas ref={canvasRef} width="1300" height="20000" />;
}

export default Canvas;
