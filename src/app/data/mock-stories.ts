import { Story } from './Story';

let randomCharacter=()=>{return {
  id:'1'+Math.random(),
  name:'name'+Math.random(),
  summary:'summary'+Math.random(),
  details:'details'+Math.random(),
}}
export const STORIES: Story[] = [
  { id: '11', name: 'Dr Nice',characters:[randomCharacter(),randomCharacter()]},
  { id: '12', name: 'Narco' ,characters:[randomCharacter(),randomCharacter(),randomCharacter(),randomCharacter(),randomCharacter()]},
  { id: '13', name: 'Bombasto' ,characters:[randomCharacter()]},
  { id: '14', name: 'Celeritas' ,characters:[randomCharacter(),randomCharacter(),randomCharacter()]},
  { id: '15', name: 'Magneta' ,characters:[randomCharacter()]}
];