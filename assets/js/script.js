// Returns a Promise that resolves after "ms" Milliseconds
const timer = ms => new Promise(res => setTimeout(res, ms))

async function rotate(image) {
    for (let i = 0; i <= 3600; i++) {
        image.setAttribute("style", "transform: rotate(" + i + "deg)");
        await timer(20);
    }
}