import { clientCredentials } from '../../utils/client';

const endpoint = clientCredentials.databaseURL;

const openCart = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/orders/new`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  }).then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const getCart = (userId) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/${userId}/cart`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const placeOrder = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/cart/close`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  }).then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const getOrderDetails = (id) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/orders/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const getOrderList = (userId) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/${userId}/history`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const getOrderHistoryDetails = (userId) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/${userId}/orders`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const getSellerCustomers = (id) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/${id}/dashboard/customers`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const getSoldProducts = (id) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/${id}/dashboard/orders`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const getSellerStats = (id) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/${id}/dashboard/total`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  getCart, getOrderDetails, getOrderHistoryDetails, getOrderList, getSellerCustomers, getSellerStats, getSoldProducts, openCart, placeOrder,
};
