
export class Character {
    id:string;
    name:string;
    summary:string;
    details:string;
    constructor(values: Object = {}) {
        Object.assign(this, values);
      }
}
export class Scene{
    id:string;
    title:string;
    details:any;
    constructor(values: Object = {}) {
        Object.assign(this, values);
      }
}
export class Story {
    id: string;
    name: string;
    characters:Character[];
    scenes:Scene[];
    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
}