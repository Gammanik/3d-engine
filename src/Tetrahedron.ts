import Polygon from "./Polygon";
import Matrix from "./Matrix";
import Point from "./Point";



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

    turnX(angle: number, center: Point) {
        //turn
        //todo:   change only this.polyBottom.p1, this.polyBottom.p2, this.polyBottom.p3, this.polySide12.p3;
        //todo::  and others are going to change themselves (because of) in case of taking them (points) by reference

        // this.polyBottom.p1 = this.polyBottom.p1.minus(center);
        // this.polyBottom.p2 = this.polyBottom.p2.minus(center);
        // this.polyBottom.p3 = this.polyBottom.p3.minus(center);
        // this.polySide12.p3 = this.polyBottom.p3.minus(center);

        this.polyBottom.p1 = this.polyBottom.p1.rotateAroundCenter(center, Matrix.createRotationX(angle));
        this.polyBottom.p2 = this.polyBottom.p2.rotateAroundCenter(center, Matrix.createRotationX(angle));
        this.polyBottom.p3 = this.polyBottom.p3.rotateAroundCenter(center, Matrix.createRotationX(angle));
        this.polySide12.p3 = this.polySide12.p3.rotateAroundCenter(center, Matrix.createRotationX(angle));
    }

    turnZ(angle: number, center: Point) {
        this.polyBottom.p1 = this.polyBottom.p1.rotateAroundCenter(center, Matrix.createRotationZ(angle));
        this.polyBottom.p2 = this.polyBottom.p2.rotateAroundCenter(center, Matrix.createRotationZ(angle));
        this.polyBottom.p3 = this.polyBottom.p3.rotateAroundCenter(center, Matrix.createRotationZ(angle));
        this.polySide12.p3 = this.polySide12.p3.rotateAroundCenter(center, Matrix.createRotationZ(angle));
    }


}