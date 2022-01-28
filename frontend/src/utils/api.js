export const getSequences = () => {
  return fetch('http://lionlocalizer.org/query/mapping/sequence-list/')
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => Promise.reject(error));
};

export const addSequence = (data) => {
  return fetch('http://lionlocalizer.org/query/mapping/align/', {
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
