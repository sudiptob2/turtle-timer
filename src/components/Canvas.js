import React, { useContext, useEffect, useRef } from "react";
import { TimerContext } from "../TimerContext";
import Turtle from "./animals_1.png";
function Canvas() {
    const [time, setTime] = useContext(TimerContext);
    const canvasRef = useRef(null);



    function getRandomInt(min, max) {

        return (Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
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
        let velocity = [];
        let numberOfTurtle = 20;
        let gap = 64;
        let winningTurtleIndex = 0;

        // fps for the animation
        let fps = 25;

        // calculate the minimum velocity
        // v = s/t
        // here s = height of the canvas
        // t = total countdown of the timer
        let minimumVelocity = (canvas.height / time);
        console.log(minimumVelocity, canvas.height);


        for (let i = 0; i < numberOfTurtle; i++) {
            arrY[i] = y - 64;
            c.drawImage(imgTag, x + gap * i, arrY[i]); // draw image at current position
            c.fillText(`${i + 1}`, 25 + x + gap * i, arrY[i] + 80); // tune the x and y position of the turtle number

            velocity[i] = getRandomInt(minimumVelocity, minimumVelocity + 5);

            //console.log(initialVelocity);
        }
        let count = 0;

        function animate() {


            // change the velocity after 25 frame
            // it's just a tuning prameter
            // Choosen by the programmer
            if (count % 25 === 0) {
                for (let i = 0; i < 20; i++) {
                    velocity[i] = getRandomInt(minimumVelocity, minimumVelocity + 40); //calculate the distance reached in the current velocity
                }
            }
            c.clearRect(0, 0, canvas.width, canvas.height); // clear canvas
            for (let i = 0; i < numberOfTurtle; i++) {

                c.drawImage(imgTag, x + gap * i, arrY[i]); // draw image at current position
                c.fillText(`${i + 1}`, 25 + x + gap * i, arrY[i]); // tune the x and y position of the turtle number

                // change the cloro to red
                c.fillStyle = "red";
                c.fillText(`${winningTurtleIndex === i ? `(${i + 1})Alpha` : ''}`, 5 + x + gap * i, arrY[i] + 90);
                // change to default color
                c.fillStyle = 'black';

                // distance per sec == velocity
                // now find the distance per fps
                // Because animate funcion is requested once in every frame
                let distancePerFps = velocity[i] / fps;
                arrY[i] = arrY[i] - distancePerFps

            }
            count++;

            if (time > 0 && Math.max(...arrY) > 0) {
                winningTurtleIndex = arrY.indexOf(Math.max(...arrY));
                setTimeout(() => {
                    requestAnimationFrame(animate);
                }, 1000 / fps); // requestAnimationFrame frame is a loop

            }


        }
        // After finishing the race re initialize the timer
        setTime(-1);


    });
    return <canvas ref={canvasRef} width="1300" height="20000" />;
}

export default Canvas;
