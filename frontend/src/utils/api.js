export const getSequences = () => {
  return fetch('http://127.0.0.1:8000//mapping/sequence-list/')
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => Promise.reject(error));
};

export const addSequence = (data) => {
  return fetch('http://127.0.0.1:8000//mapping/align/', {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json' 
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => Promise.reject(error));
};
