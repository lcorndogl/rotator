let rotateAngle = 90;

function rotate(image, i) {
        image.setAttribute("style", "transform: rotate(" + i + "deg)");
        console.log(i);
}

function wait(image) {
    for (let i = 0; i <= 3600; i++) {
        setInterval(rotate(image, i), 3000000);
    }
}
