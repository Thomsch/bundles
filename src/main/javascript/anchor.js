function Anchor(pos) {
    this.pos = pos;
    this.scale = 10;
    this.center = 1;
    this.border = 20;
    this.bundle = null;

    this.draw = function() {
        push();
        stroke(0);

        fill(0);

        push();
        translate(-10, -10);
        rect(this.pos.x, this.pos.y, 20, 20);
        pop();

        fill(255);
        ellipse(this.pos.x, this.pos.y, this.center * this.scale);
        pop();
    }

    this.connect = function (other) {
        bundle = new Bundle(this.pos, other.pos);
        this.bundle = bundle;
        other.bundle = bundle;
        bundles.push(bundle);
    }
}