import Point from "./Point"
import Matrix from "./Matrix";

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
        ctx.stroke();

        Polygon.drawCoordinates([this.p1, this.p2, this.p3], ctx);
    }

    static drawCoordinates(points: Array<Point>, ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = 'blue';
        for(const point of points)
            ctx.fillText(`${Math.round(point.x)}, ${Math.round(point.y)}, ${Math.round(point.z)}`,point.x_local, point.y_local);
    }

    public rotateAroundCenter(center: Point, rotationMatrix: Matrix) {
        let newP1 = this.p1.rotateAroundCenter(center, rotationMatrix);
        let newP2 = this.p2.rotateAroundCenter(center, rotationMatrix);
        let newP3 = this.p3.rotateAroundCenter(center, rotationMatrix);

        return new Polygon(newP1, newP2, newP3);
    }
}