import { v4 as uuidv4 } from 'uuid';

export default class Tarea {
  // clase para determinar las propiedades de nuestras tareas
  id = '';
  desc = '';
  completadoEn = null;

  constructor(desc) {
    this.id = uuidv4();
    this.desc = desc;
  }

}