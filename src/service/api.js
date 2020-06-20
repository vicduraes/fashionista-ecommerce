const handleErrors = (response) => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response.json();
};

const getAPI = () =>
  fetch("https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog")
    .then(handleErrors)
    .then((data) => data);

export default getAPI;
