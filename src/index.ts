import Point from './Point'
import Polygon from './Polygon'

console.log('Hello Webpack');
//растягивать тетраэдр
//класс тетраэдр - в классе тетраэдр класс полигонов а полигоны состоят из точек
//написать класс который делает операцию проектции (последняя колонка - масштаб, а нижняя колонка - линейный сдвиг
//внешний класс, который пересчитывает из мировых в экранные координаты



const canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('myCanvas');
console.log('canvas:', canvas);

const ctx: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext("2d");
ctx.fillRect(10, 10, 10, 10);


let p1: Point = new Point(100, 150, 100);
let p2: Point = new Point(50, 200, 100);
let p3: Point = new Point(150, 200, 100);

let poly: Polygon = new Polygon(p1, p2, p3);

poly.draw(ctx);



//todo: make matrix mull in static class Painter.paint(polygon)