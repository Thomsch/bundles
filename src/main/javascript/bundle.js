function Bundle(p1, p2) {

    this.p1 = p1;
    this.p2 = p2;

    var lines;
    var max = 5;

    this.draw = function() {
        lines = controlLines.value();
        spacing = 2;
        lineWidth = 3;
        push();
        stroke(255,0,0);
        strokeWeight(lineWidth);

        translate(0, -spacing * Math.min(max,lines) / 2); // Center the lines.
        for(i = 0; i < Math.min(max,lines); i++) {
            line(p1.x, p1.y + i * spacing, p2.x, p2.y + i * spacing);
        }

        this.drawMeta();
        pop();
    }
    
    this.addLine = function () {
        lines++;
    }

    this.drawMeta = function () {
        if(lines > 1) {
            stroke(0);
            strokeWeight(2);
            textSize(16);
            var spaceBetweenStrokes = 5;
            var strokeLength = spacing * Math.min(max, lines) * 2;
            var spaceBetweenTextAndStrokes = 5;

            middle = createVector((p1.x + p2.x) / 2, (p1.y + p2.y) / 2);

            translate(0, -strokeLength / 4);
            text(lines, middle.x, middle.y - spaceBetweenTextAndStrokes);

            translate(-(Math.min(max, lines) * spaceBetweenStrokes) / 2, 0);

            // Create strokes.
            for (i = 0; i < Math.min(max, lines); i++) {
                line(middle.x, middle.y, middle.x + strokeLength, middle.y + strokeLength);
                translate(spaceBetweenStrokes, 0);
            }

            if(lines > max) {
                push();
                var dashNumber = 4;
                var dashLength = strokeLength / (dashNumber * 2 - 1);

                for(i = 0; i < dashNumber; i++) {
                    line(middle.x, middle.y, middle.x + dashLength, middle.y + dashLength);
                    translate(2*dashLength, 2*dashLength);
                }
                pop();
            }
        }
    }
}