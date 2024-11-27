async function rotate(image) {
    for (let i = 0; i <= 3600; i++) {
        image.setAttribute("style", "transform: rotate(" + i + "deg)");
        await timer(2000);
    }
}