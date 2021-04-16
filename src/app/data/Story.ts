import {v4 as uuidv4, v4} from 'uuid';
export class Character {
    id:string;
    name:string;
    summary:string;
    details:string;
    constructor(values: Object = {id:uuidv4(), name: 'Name',summary:'',details:''}) {
        Object.assign(this, values);
      }
}
export class Scene{
    id:string;
    date?:Date;
    title:string;
    details:any;
    constructor(values: Object = {id:uuidv4(),date:new Date(),title:'',details:''}) {
        Object.assign(this, values);
        this.id?this.id:this.id=uuidv4();
        this.date?this.date:this.date=new Date();
    }
}
export class Story {
    id: string;
    date:Date;
    name: string;
    characters:Character[]=[];
    scenes:Scene[]=[];
    constructor(values: Object = {id:uuidv4(),date:new Date(),name:'',characters:[],scenes:[]}) {
      Object.assign(this, values);
      
      this.id?this.id:this.id=uuidv4();
      this.date?this.date:this.date=new Date();
    }
}