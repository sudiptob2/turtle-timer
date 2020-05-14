import React, { useEffect, useRef } from "react";

function Canvas() {
    const canvasRef = useRef(null);
    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = window.innerWidth / 2;
        canvas.height = window.innerHeight - 10;
        const c = canvas.getContext("2d");

        //Arc or the circle logic
        var x = Math.random();
        var y = Math.random();
        function animate() {
            requestAnimationFrame(animate);
            c.clearRect(0, 0, window.innerWidth, window.innerHeight);
            c.beginPath();
            c.arc(x, y, 30, 0, Math.PI * 2, false);
            c.stroke();
            y += 1;
            if (y > window.innerHeight) return 0;
        }
        animate();
    });
    return <div>{<canvas ref={canvasRef} width="100" height="100" />}</div>;
}

export default Canvas;
