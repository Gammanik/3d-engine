import Project from "./Project";
import Matrix from "./Matrix";


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

    //todo: how could I avoid always create new object?
    public recalculateLocalCoords(): void {
        this.x_local = Project.findLocalX(this.x, this.z);
        this.y_local = Project.findLocalY(this.y, this.z);
    }
    
    private minus(point: Point): void {
        this.x -= point.x;
        this.y -= point.y;
        this.z -= point.z;
    }

    private plus(point: Point): void {
        this.x += point.x;
        this.y += point.y;
        this.z += point.z;
    }

    public rotateAroundCenter(center: Point, rotationMatrix: Matrix): void {
        this.minus(center);
        const coordsArray = rotationMatrix.multiplyOnVector([this.x, this.y, this.z]);
        this.x = coordsArray[0]; this.y = coordsArray[1]; this.z = coordsArray[2];
        this.plus(center);

        this.recalculateLocalCoords();
    }
}