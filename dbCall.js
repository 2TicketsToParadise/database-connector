// This is an example of an API call in React Native and not part of this Node.js project!

function dbCall(databaseQuery)
{

    fetch('https://twoticketsdatabase.herokuapp.com/', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query:databaseQuery
        }),
    }).then((response) => response.json())
        .then((responseJson) => {
            return responseJson.data;
        }).catch((error) => {
        console.error(error);

    });
}