import Point from "./Point";


export default class Project {
    //камера должна находиться в точке {0,0,-c}
    static camera = {x: 0, y: 0, z: 1000};
    static ProjMatrix = [
        [1, 0, 0, 0],
        [0, 1, 0, 0],
        [0, 0, 0, -1/100],
        [0, 0, 1]
    ];

    static findLocalX(x_global: number, z_global: number): number {
        // let t = -z_global/(this.camera.z - z_global);
        // console.log('x:', (this.camera.x - x_global)*t + x_global);
        // return (this.camera.x - x_global)*t + x_global;

        return x_global/(z_global/-Project.camera.z + 1);
    }

    static findLocalY(y_global: number, z_global: number): number {
        // let t = -z_global/(this.camera.z - z_global);
        // return (this.camera.y - y_global)*t + y_global;

        return y_global/(z_global/-Project.camera.z + 1)
    }


}