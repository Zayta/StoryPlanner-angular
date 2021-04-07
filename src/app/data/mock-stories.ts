import { Story } from './Story';

let randomCharacter=()=>{return {
  id:'1'+Math.random(),
  name:'name'+Math.random(),
  summary:'summary'+Math.random(),
  details:'details'+Math.random(),
}}
let randomScene=()=>{return{
  id:'1'+Math.random(),
  title:'title'+Math.random(),
  details:'lala'+Math.random()
}
}
export const STORIES: Story[] = [
  { id: '11', name: 'Dr Nice',characters:[randomCharacter(),randomCharacter()],scenes:[]},
  { id: '12', name: 'Narco' ,characters:[randomCharacter(),randomCharacter(),randomCharacter(),randomCharacter(),randomCharacter()],scenes:[randomScene(),randomScene(),randomScene(),randomScene(),randomScene()]},
  { id: '13', name: 'Bombasto' ,characters:[randomCharacter()],scenes:[]},
  { id: '14', name: 'Celeritas' ,characters:[randomCharacter(),randomCharacter(),randomCharacter()],scenes:[]},
  { id: '15', name: 'Magneta' ,characters:[randomCharacter()],scenes:[]}
];