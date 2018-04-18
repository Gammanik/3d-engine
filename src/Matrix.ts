


export default class Matrix {
//матрица центральной проекции

     mMatrix: Array<Array<number>>;

    // constructor(rotationX: number, rotationY: number, rotationZ: number, distance: number) {
    //     this.mMatrix = [
    //         [rotationX, 0, 0, 0],
    //         [0, rotationY, 0, 0],
    //         [0, 0, 0, -1/100],
    //         [0, 0, 0, rotationZ]
    //     ]
    // }

    //todo: constructor(array) this.array?
    constructor(matrix: Array<Array<number>>) {
        this.mMatrix = matrix;
    }

    //vector of size 4
    multiplyVector(vector: Array<number>) {
        let res: Array<number> = [];
        let currentIndex: number = 0;

        for(const elemVector of vector) {
            for(const matrixRow of this.mMatrix) {
                let sum = 0;
                for(const elemMatrix of matrixRow) {
                    sum += elemVector*elemMatrix;
                }
                res[currentIndex] = sum;
            }
            currentIndex++;
        }

        return {x_local: res[0], y_local: res[1]};
    }
}