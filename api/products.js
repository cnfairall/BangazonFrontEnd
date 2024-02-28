import { clientCredentials } from '../../utils/client';

const endpoint = clientCredentials.databaseURL;

const getSingleProduct = (id) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/products/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const addProductToCart = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/cart/add`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  }).then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const deleteProductFromCart = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/cart/remove`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  }).then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const getNewestProducts = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/products/latest`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const getStoreByCategory = (userId, categoryId) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/${userId}/store/${categoryId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const searchProducts = (query) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/products/search/${query}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  getSingleProduct, getNewestProducts, getStoreByCategory, searchProducts, addProductToCart, deleteProductFromCart,
};
