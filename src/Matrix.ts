


export default class Matrix {
//матрица центральной проекции

     mMatrix: Array<Array<number>>;

    constructor(matrix: Array<Array<number>>) {
        this.mMatrix = matrix;
    }

    //vector of size 4
    public multiplyOnVector(vector: Array<number>): Array<number> {

        if(vector.length != this.mMatrix.length)
            console.error("sizes are not equal!");

        let res: Array<number> = [];
        let currentRowNumber: number = 0;

        for(const matrixRow of this.mMatrix) {
            let tmpSum = 0;
            //loop through each elem in the matrixRow
            for(let i=0; i<vector.length; i++) {
                tmpSum += matrixRow[i]*vector[i];
            }
            res[currentRowNumber] = tmpSum;
            currentRowNumber++;
        }

        return res;
    }

    public static createRotationX(angleRad: number): Matrix {
        const angle = (angleRad*Math.PI)/180;
        return new Matrix([
            [1, 0, 0],
            [0, Math.cos(angle), -Math.sin(angle)],
            [0, Math.sin(angle), Math.cos(angle)]
        ]);
    }

    public static createRotationY(angleRad: number): Matrix {
        const angle = (angleRad*Math.PI)/180;
        return new Matrix([
            [Math.cos(angle), 0, Math.sin(angle)],
            [0, 1, 0],
            [-Math.sin(angle), 0, Math.cos(angle)]
        ]);
    }

    public static createRotationZ(angleRad: number): Matrix {
        const angle = (angleRad*Math.PI)/180;
        return new Matrix([
            [Math.cos(angle), -Math.sin(angle), 0],
            [Math.sin(angle), Math.cos(angle), 0],
            [0, 0, 1]
        ]);
    }


    public static createTranspozition(x: number, y: number, z: number): Matrix {
        return new Matrix([
            [x, 0, 0],
            [0, y, 0],
            [0, 0, z]
        ]);
    }


}