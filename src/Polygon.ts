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
        this.p1.rotateAroundCenter(center, rotationMatrix);
        this.p2.rotateAroundCenter(center, rotationMatrix);
        this.p3.rotateAroundCenter(center, rotationMatrix);
    }


    public dragX(dx: number, scale: number) {
        //todo: change local coord and then
        this.p1.x += dx * scale;
        this.p2.x += dx * scale;
        this.p3.x += dx * scale;

        this.recalcLocalCoords()
    }
    // public plus(poly: Polygon)

    public areCoordsInside(x: number, y: number): boolean {
        const a: number = ((this.p1.x_local - x) * (this.p2.y_local - this.p1.y_local) -
        (this.p2.x_local - this.p1.x_local) * (this.p1.y_local - y));
        const b: number = ((this.p2.x_local - x) * (this.p3.y_local - this.p2.y_local) -
        (this.p3.x_local - this.p2.x_local) * (this.p2.y_local - y));
        const c: number = ((this.p3.x_local - x) * (this.p1.y_local - this.p3.y_local) -
        (this.p1.x_local - this.p3.x_local) * (this.p3.y_local - y));

        //todo: add - Figure.areCoordsInside(x, y)
        return (a > 0 && b > 0 && c > 0) || (a < 0 && b < 0 && c < 0);

    }

    private recalcLocalCoords() {
        this.p1.recalculateLocalCoords();
        this.p2.recalculateLocalCoords();
        this.p3.recalculateLocalCoords();
    }

    private recalcGlobalCoords() {

    }
}