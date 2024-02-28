import { clientCredentials } from '../../utils/client';

const endpoint = clientCredentials.databaseURL;

const getPaymentTypes = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/paymenttypes`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export default getPaymentTypes;
