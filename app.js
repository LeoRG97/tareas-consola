import colors from 'colors';
import {
  confirm,
  inquirerMenu,
  menuChecklist,
  menuDeleteTask,
  pause,
  readInput,
} from './helpers/inquirer.js';
import Tareas from './models/tareas.js';
import { saveDatabase, readDatabase } from './helpers/saveFile.js';

const main = async () => {
  console.clear();

  let opt = '';
  const tareas = new Tareas();

  const tareasDB = readDatabase();
  if (tareasDB) {
    tareas.cargarTareas(tareasDB);
  }

  do {

    opt = await inquirerMenu();

    switch (opt) {
      case '0':
        console.log('¡Ahí de rato!'.green);
        break;
      case '1':
        // crear
        const desc = await readInput('Descripción de la tarea: ');
        tareas.crearTarea(desc);
        break;
      case '2':
        //listar
        tareas.listarTareas();
        break;
      case '3':
        // listar tareas completadas
        tareas.listarTareasPorEstatus(true);
        break;
      case '4':
        // listar tareas pendientes
        tareas.listarTareasPorEstatus(false);
        break;
      case '5':
        // completar tareas
        const ids = await menuChecklist(tareas.listadoArr);
        tareas.toggleCompletadas(ids);
        break;
      case '6':
        // eliminar una tarea de la lista
        const id = await menuDeleteTask(tareas.listadoArr);
        const ok = await confirm('¿Tas seguro, compa?');
        if (ok) {
          tareas.eliminarTarea(id);
          console.log('Tarea borrada')
        }
        break;
      default:
        break;
    }

    if (opt !== '0') {
      await pause();
    }

    saveDatabase(tareas.listado);

  } while (opt !== '0');

}

main();