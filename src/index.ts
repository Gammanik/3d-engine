import Point from './Point'
import Polygon from './Polygon'
import Tetrahedron from "./Tetrahedron";
import {log} from "util";




log('Hello Webpack');



const canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('myCanvas');
console.log('canvas:', canvas);

const ctx: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext("2d");
ctx.fillRect(10, 10, 10, 10);


let p1: Point = new Point(100, 150, 100);
let p2: Point = new Point(50, 200, 100);
let p3: Point = new Point(150, 200, 100);
let v1: Point = new Point(100, 100, 250);

const polyBottom: Polygon = new Polygon(p1, p2, p3);
const polySide12: Polygon = new Polygon(p1, p2, v1);
const polySide23: Polygon = new Polygon(p2, p3, v1);
const polySide31: Polygon = new Polygon(p3, p1, v1);


const teth: Tetrahedron = new Tetrahedron(polyBottom, polySide12, polySide23, polySide31);
teth.draw(ctx);



//todo: make matrix mull in static class Painter.paint(polygon)