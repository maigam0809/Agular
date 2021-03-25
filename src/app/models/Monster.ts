import {Sell} from "./Sell";
export class Monster{
    id: Number;
    name: string;
    img: string;
    detail: string;
    sells?: Array<Sell>;

    constructor(id: Number, name: string, img: string, detail: string,sells: Array<Sell> = []){
        this.id = id;
        this.name = name;
        this.img = img;
        this.detail = detail;
        this.sells = sells;
    }
}

