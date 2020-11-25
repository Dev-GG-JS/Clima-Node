const { getClima } = require("./lugar/clima");

const argv = require("yargs").options({
  direccion: {
    alias: "d",
    desc: "Ciudad de la cuidad para obtener el clima",
    demand: true,
  },
}).argv;

const getInfo = async (direccion) => {
  try {
    const climaObtenido = await getClima(direccion);

    const { main, name } = climaObtenido;
    return `El clima de ${name} es de ${main.temp}`;
  } catch (error) {
    return `No de puedo determinar el clime de ${direccion}`;
  }
};

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);

// getClima(direccion)
//     .then((data) => {
//       //Destructuracion de los dos objetos principles
//       const { main, name } = data;
//       const { temp, temp_max, temp_min } = main;
//       console.log(`El clima de ${name} es de ${temp}`);
//     })
//     .catch((err) => {
//       console.log(`No se puedo determinar el clima de ${direccion}`);
//     });
