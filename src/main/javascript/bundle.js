function Bundle(p1, p2) {

    this.p1 = p1;
    this.p2 = p2;

    var lines = 4;

    this.draw = function() {
        spacing = 2;
        lineWidth = 3;
        push();
        stroke(255,0,0);
        strokeWeight(lineWidth);

        translate(0, -spacing * lines / 2); // Center the lines.
        for(i = 0; i < lines; i++) {
            line(p1.x, p1.y + i * spacing, p2.x, p2.y + i * spacing);
        }

        this.drawMeta();
        pop();
    }
    
    this.addLine = function () {
        lines++;
    }

    this.drawMeta = function () {
        stroke(0);
        strokeWeight(2);
        textSize(16);
        var spaceBetweenStrokes = 5;
        var strokeLength = spacing * lines * 2;
        var spaceBetweenTextAndStrokes = 5;

        middle = createVector((p1.x + p2.x) / 2, (p1.y + p2.y) / 2);

        // push();
        // stroke('cyan');
        // strokeWeight(5);
        // lineSize = 400;
        // translate(0, -lineSize / 3);
        // line(middle.x, middle.y, middle.x, middle.y + lineSize);
        // pop();

        translate(0, -strokeLength / 4);
        text(lines, middle.x, middle.y - spaceBetweenTextAndStrokes);

        translate(-(lines * spaceBetweenStrokes + strokeLength) / 2, 0);
        // push();
        // stroke('cyan');
        // noFill();
        // rect(middle.x, middle.y, lines * spaceBetweenStrokes + strokeLength, strokeLength);
        // pop();
        for(i = 0; i < lines; i++) {
            line(middle.x, middle.y, middle.x + strokeLength, middle.y + strokeLength);
            translate(spaceBetweenStrokes, 0);
        }

    }
}