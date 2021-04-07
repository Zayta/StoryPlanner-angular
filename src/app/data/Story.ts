export interface Story {
    id: string;
    name: string;
    characters:Character[];
    scenes:Scene[];
}
export interface Character {
    id:string;
    name:string;
    summary:string;
    details:string;
}
export interface Scene{
    id:string;
    title:string;
    scene:any;
}