const handleErrors = (response) => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response.json();
};

const getAPI = () =>
  fetch(`${process.env.REACT_APP_API}`)
    .then(handleErrors)
    .then((data) => data);

export default getAPI;
