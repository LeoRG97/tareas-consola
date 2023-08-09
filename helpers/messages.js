import colors from 'colors';
import readL from 'readline';

export const showMenu = () => {
  return new Promise((resolve, reject) => {
    console.clear();
    console.log('==============================='.green);
    console.log('>>>> Seleccione una opción <<<<'.green);
    console.log('===============================\n'.green);

    console.log(`${'1.'.green} Crear tarea`);
    console.log(`${'2.'.green} Listar tareas`);
    console.log(`${'3.'.green} Listar tareas completadas`);
    console.log(`${'4.'.green} Listar tareas pendientes`);
    console.log(`${'5.'.green} Completar tareas`);
    console.log(`${'6.'.green} Borrar una tarea`);
    console.log(`${'0.'.green} Salir\n`);

    const readLine = readL.createInterface({
      input: process.stdin, // entrada por teclado
      output: process.stdout,
    });

    readLine.question(`Seleccione una opción: `, (res) => {
      readLine.close(); // cierra la entrada por teclado
      resolve(res)
    });
  })


};

export const pause = () => {
  // función para que el usuario confirme con la tecla ENTER
  return new Promise((resolve) => {
    const readLine = readL.createInterface({
      input: process.stdin, // entrada por teclado
      output: process.stdout,
    });

    readLine.question(`\nPresione ${'ENTER'.cyan} para continuar\n`, () => {
      readLine.close(); // cierra la entrada por teclado
      resolve();
    });
  })

}
