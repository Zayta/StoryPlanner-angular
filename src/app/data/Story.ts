export interface Story {
    id: string;
    name: string;
    characters:Character[];
}
export interface Character {
    id:string;
    name:string;
    summary:string;
    details:string;
}