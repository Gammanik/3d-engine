


export default class Matrix {
//матрица центральной проекции

     mMatrix: Array<Array<number>>;

    constructor(matrix: Array<Array<number>>) {
        this.mMatrix = matrix;
    }

    //vector of size 4
    public multiplyOnVector(vector: Array<number>) {

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
}