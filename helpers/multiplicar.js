colors = require("colors");
const fs = require("fs");

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
  try {
    if (listar) {
      console.log("=========================".green);
      console.log("     Tabla del: ".green, colors.blue(base));
      console.log("=========================".green);
    }

    let salida = "";
    let salidaTxt = "";

    for (let i = 1; i <= hasta; i++) {
      if (listar) {
        salida += `${base} ${"x".green} ${i} ${"=".green} ${base * i} \n`;
      }
      salidaTxt += `${base} x ${i} = ${base * i} \n`;
    }

    if (listar) {
      console.log(salida);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salidaTxt);

    return `tabla-${base}.txt`;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  crearArchivo,
};
