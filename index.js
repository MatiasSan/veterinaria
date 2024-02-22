// Acá importar las operaciones

const { add, read } = require('./operaciones');

const [accion, id, nombreAnimal, edad, tipoAnimal, colorAnimal, enfermedad] =
  process.argv.slice(2);

// condiciones que evalúen, según argumento correspondiente, que función ejecutar.

if (accion === 'add') {
  add(id, nombreAnimal, edad, tipoAnimal, colorAnimal, enfermedad);
}

if (accion === 'read') {
  read();
}
