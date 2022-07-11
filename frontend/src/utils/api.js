export const getSequences = () => {
  return fetch('https://lionlocalizer.org/mapping/sequence-list/')
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => Promise.reject(error));
};

export const addSequence = (data) => {
  return fetch('https://lionlocalizer.org/mapping/align/', {
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
