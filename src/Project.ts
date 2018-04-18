import Point from "./Point";


export default class Project {
    //камера находится в точке {0,0,c}
    static camera = {x: 0, y: 0, z: 1000};
    static ProjMatrix = [
        [1, 0, 0, 0],
        [0, 1, 0, 0],
        [0, 0, 0, -1/100],
        [0, 0, 1]
    ];

    static findLocalX(x_global: number, z_global: number): number {
        return x_global/(z_global/Project.camera.z + 1);
    }

    static findLocalY(y_global: number, z_global: number): number {
        return y_global/(z_global/Project.camera.z + 1)
    }

}