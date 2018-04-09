import Point from './Point'

export default class Polygon {
    p1: Point;
    p2: Point;
    p3: Point;

    constructor(p1: Point, p2: Point, p3: Point) {
        this.p1 = p1; this.p2 = p2; this.p3 = p3;
    }

    draw(ctx: CanvasRenderingContext2D) {
        //todo: write my own drawPoly?
        ctx.moveTo(this.p3.x, this.p3.y);
        ctx.lineTo(this.p1.x, this.p1.y); //todo: write my own drawLine(from: Point, to: Point)?
        ctx.lineTo(this.p2.x, this.p2.y);
        ctx.lineTo(this.p3.x, this.p3.y);
        ctx.stroke();
    }
}