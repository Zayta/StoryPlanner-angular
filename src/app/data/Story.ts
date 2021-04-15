
export class Character {
    id:string;
    name:string;
    summary:string;
    details:string;
    constructor(values: Object = {id:new Date().toString()}) {
        Object.assign(this, values);
      }
}
export class Scene{
    id:string;
    date?:Date;
    title:string;
    details:any;
    constructor(values: Object = {}) {
        Object.assign(this, values);
        this.date = new Date();
    }
}
export class Story {
    id: string;
    date:Date;
    name: string;
    characters:Character[]=[];
    scenes:Scene[]=[];
    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
}