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
    private recalculateLocalCoords(): Point {
        this.x_local = Project.findLocalX(this.x, this.z);
        this.y_local = Project.findLocalY(this.y, this.z);

        return this;
    }
    
    private minus(point: Point): Point {
        let xNew = this.x - point.x;
        let yNew = this.y - point.y;
        let zNew = this.z - point.z;

        return new Point(xNew, yNew, zNew);
    }

    private plus(point: Point): Point {
        let xNew = this.x + point.x;
        let yNew = this.y + point.y;
        let zNew = this.z + point.z;
        //todo: do I have to return a new obj?
        return new Point(xNew, yNew, zNew);
    }

    public rotateAroundCenter(center: Point, rotationMatrix: Matrix): Point {
        let res = this.minus(center);
        const coordsArray = rotationMatrix.multiplyOnVector([res.x, res.y, res.z]);
        res.x = coordsArray[0]; res.y = coordsArray[1]; res.z = coordsArray[2];
        res = res.plus(center);

        res = res.recalculateLocalCoords();
        return res;
    }
}