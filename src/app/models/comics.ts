export class Comics {
    id: Number;
    name: String;
    image: String;
    categoryID: Number;
    status: Number;
    views: Number;
    constructor(id: Number, name: String, image: string, categoryID: number, status: Number, views: Number){
        this.id = id;
        this.name = name;
        this.image = image;
        this.categoryID = categoryID;
        this.status = status;
        this.views = views;

    }

}
