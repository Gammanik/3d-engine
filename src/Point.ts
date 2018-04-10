import Project from "./Project";


export default class Point {
    x: number;
    y: number;
    z: number;
    //todo: make scale ->means h 
    scale: number = 1;

    x_local: number;
    y_local: number;

    constructor(x: number, y: number, z: number) {
        //todo: auto projection to 2d in constructor? x_local = ?
        this.x = x; this.y = y; this.z = z;

        this.x_local = Project.findLocalX(x, z);
        this.y_local = Project.findLocalY(y, z);
    }
}