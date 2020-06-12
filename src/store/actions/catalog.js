export const GET_CATALOG_REQUEST = "@actions/get_catalog/request";
export const GET_CATALOG_SUCCESS = "@actions/get_catalog/success";
export const GET_CATALOG_FAILURE = "@actions/get_catalog/failure";


export const getCatalog = () => ({
  type: GET_CATALOG_REQUEST,
});

export const getCatalogSuccess = (catalog) => ({
  type: GET_CATALOG_SUCCESS,
  payload: [...catalog],
});

export const getCatalogError = (error) => ({
  type: GET_CATALOG_FAILURE,
  error,
});
