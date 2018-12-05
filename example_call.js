// This is an example of an API call in React Native and not part of this Node.js project!

fetch('https://twoticketsdatabase.herokuapp.com/', {
    method: 'POST',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        query: 'select * from users;'
    }),
}).then((response) => response.json())
    .then((responseJson) => {
        return responseJson.data[0].userid;
    }).catch((error) => {
    console.error(error);
});