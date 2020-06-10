const getAPI = () =>
  fetch("https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog")
    .then((response) => response.json())
    .then((data) => data);

export default getAPI;
