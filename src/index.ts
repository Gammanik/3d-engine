import Point from './Point'
import Polygon from './Polygon'
import Tetrahedron from "./Tetrahedron";
import {log} from "util";
import Matrix from "./Matrix";


log('Hello Webpack');


const canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('myCanvas');
console.log('canvas:', canvas);

const ctx: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext("2d");
ctx.fillRect(10, 10, 10, 10);


//todo: add Polygons, Teth ect in the figuresTree during creation
//todo: add class Figure.draw()
// function drawAllFigures(figuresTree: Array<Figure>) {}
function redrawAllFigures() {}

// window.requestAnimationFrame(redrawAllFigures)
// let turnedTeth = teth.tethturnX(200, new Point(100, 0, 0));
// turnedTeth.draw();
// teth.draw(ctx);


createTeth();

//todo check for let & const
let p11: Point = new Point(600, 150, 100);
let p21: Point = new Point(650, 200, 100);
let p31: Point = new Point(550, 200, 100);

let polyToTurn: Polygon = new Polygon(p11, p21, p31);
polyToTurn.draw(ctx);


let angle: number = 55;
let center: Point = new Point(600, 100, 100);


const rotationMatrixZ = Matrix.createRotationZ(angle);
polyToTurn.rotateAroundCenter(center, rotationMatrixZ);

polyToTurn.draw(ctx);







let polyToDrag = new Polygon(new Point(600, 550, 100), new Point(650, 600, 100), new Point(550, 600, 100));
polyToDrag.draw(ctx);
// polyToDrag.drag(200, 0, 0, 1);


canvas.addEventListener("mousedown", mouseDown, false);
function mouseDown(event: MouseEvent): void {
    let x: number = event.x;
    let y: number = event.y;

    x -= canvas.offsetLeft;
    y -= canvas.offsetTop;

    console.log("click coords: ", x, y);

    // alert('x=' + x + ' y=' + y);

    //todo: add - Figure.areCoordsInside(x, y)
    if(polyToDrag.areCoordsInside(x, y)) {
        console.log("INSIDE!!!: ", event.x, event.y);
        //todo: polyToDragInitial = polyToDrag.copy
        //and send it to the onMouseMove

        canvas.onmousemove = mouseMove;
    }


}
//, (polyToDrag: Polygon, startX: number, startY: number)
function mouseMove(event: MouseEvent) {
    // console.log("mousemove: ", event.x, event.y);
    canvas.onmouseup = dragStop;

    let x: number = event.x;
    let y: number = event.y;

    x -= canvas.offsetLeft;
    y -= canvas.offsetTop;

    console.log("x changed: ", x);
    //{...polyToDrag} -- todo: set initialPolyToDrag state?
    polyToDrag.dragX(1);
    polyToDrag.draw(ctx)

}

function dragStop(event: MouseEvent) {
    canvas.onmouseup = null;
    canvas.onmousemove = null;
}


function createTeth() {
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
}