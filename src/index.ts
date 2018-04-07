import Point from './Point'
import Polygon from './Polygon'

console.log('Hello Webpack');
//растягивать тетраэдр
//класс тетраэдр в классе тетраэдр класс полигонов а полигоны состоят из точек
//написать класс который делает операцию проектции (последняя колонка - масштаб, а нижняя колонка - линейный сдвиг
//внешний класс, который пересчитывает из мировых в экранные координаты



const canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('myCanvas');
console.log('canvas:', canvas);

const ctx: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext("2d");
ctx.fillRect(10, 10, 10, 10);


let p1: Point = new Point(100, 150);
let p2: Point = new Point(50, 200);
let p3: Point = new Point(150, 200);

let poly: Polygon = new Polygon(p1, p2, p3);


ctx.moveTo(poly.p3.x, poly.p3.y);
ctx.lineTo(poly.p1.x, poly.p1.y); //todo: write my own drawLine?
ctx.lineTo(poly.p2.x, poly.p2.y);
ctx.lineTo(poly.p3.x, poly.p3.y);
ctx.stroke();



//todo: make matrix mull in static class Painter.paint(polygon)