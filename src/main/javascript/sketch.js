var a1;
var a2;
var bundles = [];

function setup() {
    createCanvas(windowWidth, windowHeight)
    a1 = new Anchor(createVector(width / 4, height / 2));
    a2 = new Anchor(createVector(width - width / 4, height / 2));
    a1.connect(a2)
    bundles[0].addLine();
}

function draw() {
    background(255);
    a1.draw();
    a2.draw();

    bundles.forEach(function(element) {
        element.draw();
    });
}