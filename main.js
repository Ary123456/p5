function preload() {

}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(400, 150);
    video = createCapture(VIDEO);
    video.hide();
}
function draw() {
    image(video, 0, 0, 640, 480);

    stroke(0, 0, 0);
    fill(21, 0, 255);
    circle(5, 30, 80);

    fill(0, 255, 242);
    circle(5, 100, 80);

    fill(0, 255, 191);
    circle(5, 170, 80);

    fill(21, 0, 255);
    circle(5, 240, 80);
    
    fill(0, 255, 242);
    circle(5, 310, 80);

    fill(0, 255, 191);
    circle(5, 380, 80);

    fill(21, 0, 255);
    circle(5, 450, 80);
    
    rect(0, 0, 705, 20);
    rect(0, 460, 705, 20);

}
function snap() {
    save('Me.png');
}