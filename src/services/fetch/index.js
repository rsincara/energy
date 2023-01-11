const SERVER_ADDRESS = 'http://37.228.116.242:1079';

export const fetchApi = (endpoint, {body, method, ...options} = {}) => {
  return fetch(`${SERVER_ADDRESS}/${endpoint}`, {
    ...options,
    method: method || 'GET',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => {
    if (res.status === 200) {
      return res.json();
    }
  })
};
