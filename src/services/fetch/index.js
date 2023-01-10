const SERVER_ADDRESS = 'http://80.249.144.118:1079';

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
