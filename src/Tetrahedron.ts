import Polygon from "./Polygon";



export default class Tetrahedron {

    polyBottom: Polygon;
    polySide12: Polygon;
    polySide23: Polygon;
    polySide31: Polygon;

    constructor(polyBottom: Polygon, polySide12: Polygon, polySide23: Polygon, polySide31: Polygon) {
        this.polyBottom = polyBottom; this.polySide12 = polySide12; this.polySide23 = polySide23; this.polySide31 = polySide31;
    }

    draw(ctx: CanvasRenderingContext2D) {
        this.polyBottom.draw(ctx);
        this.polySide12.draw(ctx);
        this.polySide23.draw(ctx);
        this.polySide31.draw(ctx);
    }

}