import inquirer from 'inquirer';
import colors from 'colors';

const questions = [
  {
    type: 'list',
    name: 'option',
    message: '¿Qué se te antoja hacer?',
    choices: [
      {
        value: '1',
        name: `${'1.'.yellow} Crear tarea`,
      },
      {
        value: '2',
        name: `${'2.'.yellow} Listar tareas`,
      },
      {
        value: '3',
        name: `${'3.'.yellow} Listar tareas completadas`,
      },
      {
        value: '4',
        name: `${'4.'.yellow} Listar tareas pendientes`,
      },
      {
        value: '5',
        name: `${'5.'.yellow} Completar tareas`,
      },
      {
        value: '6',
        name: `${'6.'.yellow} Borrar una tarea`,
      },
      {
        value: '0',
        name: `${'0.'.yellow} Salir`,
      },
    ],
  }
]

export const inquirerMenu = async () => {
  // esta función imprime el menú para seleccionar una opción
  console.clear();
  console.log('==============================='.green);
  console.log('>>>> Seleccione una opción <<<<'.green);
  console.log('===============================\n'.green);

  const { option } = await inquirer.prompt(questions);

  return option;

};

export const pause = async () => {
  await inquirer.prompt([{
    type: 'input',
    name: 'enter',
    message: `Píquele al ${'ENTER'.cyan} para continuar`
  }]);
}

export const readInput = async (message) => {
  const question = [
    {
      type: 'input',
      name: 'desc',
      message,
      validate(value) {
        if (value.length === 0) {
          return 'Por favor ingrese un valor';
        }
        return true;
      }
    }
  ];

  const { desc } = await inquirer.prompt(question);
  return desc;
}

export const menuDeleteTask = async (tareas = []) => {

  const choices = tareas.map((tarea, i) => {
    const idx = `${i + 1}`.green;
    return {
      value: tarea.id,
      name: `${idx}. ${tarea.desc}`,
    }
  });

  const questions = [
    {
      type: 'list',
      name: 'id',
      message: 'Borrar',
      choices,
    }
  ];

  const { id } = await inquirer.prompt(questions);
  return id;

}

export const menuChecklist = async (tareas = []) => {

  const choices = tareas.map((tarea, i) => {
    return {
      value: tarea.id,
      name: `${tarea.desc}`,
      checked: tarea.completadoEn ? true : false,
    }
  });

  const questions = [
    {
      type: 'checkbox',
      name: 'ids',
      message: 'Seleccione',
      choices,
    }
  ];

  const { ids } = await inquirer.prompt(questions);
  return ids;

}

export const confirm = async (message) => {
  const question = [
    {
      type: 'confirm',
      name: 'ok',
      message,
    }
  ];

  const { ok } = await inquirer.prompt(question);
  return ok;
}