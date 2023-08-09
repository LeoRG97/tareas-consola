import Tarea from './tarea.js';
import colors from 'colors';

export default class Tareas {

  listado = {};

  get listadoArr() {
    const listado = Object.keys(this.listado).map((key) => this.listado[key]);
    return listado;
  }

  constructor() {
    this.listado = {};
  }

  cargarTareas(tareas = {}) {
    this.listado = tareas;
  }

  crearTarea(desc = '') {
    const tarea = new Tarea(desc);
    this.listado[tarea.id] = tarea;
  }

  listarTareas() {
    let lista = '';
    this.listadoArr.forEach((tarea, i) => {
      lista += `${`${(i + 1)}.`.green} ${tarea.desc} :: ${tarea.completadoEn ? 'Completada'.green : 'Pendiente'.red}\n`
    });
    console.log(lista);
  }

  listarTareasPorEstatus(completadas = true) {
    let lista = '';
    this.listadoArr
      // filtra las tareas si están completadas o no
      .filter((tarea) => completadas ? tarea.completadoEn : !tarea.completadoEn)
      // crea la lista con las tareas filtradas
      .forEach((tarea, i) => {
        lista += `${`${(i + 1)}.`.green} ${tarea.desc} :: ${tarea.completadoEn ? tarea.completadoEn.green : 'Pendiente'.red}\n`
      });
    console.log(lista);
  }

  eliminarTarea(id = '') {
    if (!this.listado[id]) {
      return;
    }
    delete this.listado[id];
  }

  toggleCompletadas(ids = []) {
    ids.forEach((id) => {
      const tarea = this.listado[id];
      if (!tarea.completadoEn) {
        tarea.completadoEn = new Date().toISOString();
      }
    })

    this.listadoArr.forEach((tarea) => {
      if (!ids.includes(tarea.id)) {
        this.listado[tarea.id].completadoEn = null;
      }
    })
  }

}