const axios = require("axios");

const getClima = async (direccion) => {
  const encondeUrl = encodeURI(direccion);

  const key = "44f237c2082e761e761014a4c4ff8f46";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encondeUrl}&appid=${key}&units=metric`;

  const resp = await axios.get(url);

  if (resp.data.length === 0) {
    throw new Error(`No hay resultados par ${direccion}`);
  }

  const { main, name } = resp.data;

  return {
    main,
    name,
  };
};

module.exports = {
  getClima,
};
