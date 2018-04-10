import Point from "./Point"

export default class Polygon {
    p1: Point;
    p2: Point;
    p3: Point;

    constructor(p1: Point, p2: Point, p3: Point) {
        this.p1 = p1; this.p2 = p2; this.p3 = p3;
    }

    draw(ctx: CanvasRenderingContext2D) {
        //todo: write my own drawPoly?
        ctx.moveTo(this.p3.x_local, this.p3.y_local);
        ctx.lineTo(this.p1.x_local, this.p1.y_local); //todo: write my own drawLine(from: Point, to: Point)?
        ctx.lineTo(this.p2.x_local, this.p2.y_local);
        ctx.lineTo(this.p3.x_local, this.p3.y_local);

        console.log(this.p3.x_local, this.p3.y_local);
        ctx.stroke();
    }
}