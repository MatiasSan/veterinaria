//Importar modulo FS

const fs = require('fs');

//Funcion Registrar

const add = (nombreAnimal, edad, tipoAnimal, colorAnimal, enfermedad) => {
  const citas = JSON.parse(fs.readFileSync('citas.json', 'utf-8'));

  //Agregando ID aleatorio

  const id = Math.floor(Math.random() * 100).toString();

  //Validación llenado de campos

  if (!nombreAnimal || !edad || !tipoAnimal || !colorAnimal || !enfermedad) {
    console.error('Por favor ingresar todos los datos');
    return;
  }

  citas.push({ id, nombreAnimal, edad, tipoAnimal, colorAnimal, enfermedad });
  fs.writeFileSync('citas.json', JSON.stringify(citas));
  console.log(citas);
};

//Función Leer

const read = () => {
  const citas = JSON.parse(fs.readFileSync('citas.json', 'utf-8'));
  console.log(citas);
};

//Exportar funciones

module.exports = { add, read };
