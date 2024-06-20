// GET request
fetch('https://httpbin.org/get')
    .then(response => response.json())
    .then(data => console.log('GET:', data))
    .catch((error) => console.error('Error:', error));

// POST request
fetch('https://httpbin.org/post', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({'Id': 123, 'Name': 'J Doe'}),
})
.then(response => response.json())
.then(data => console.log('POST:', data))
.catch((error) => console.error('Error:', error));

// PUT request
fetch('https://httpbin.org/put', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({'Id': 1234, 'Name': 'J Doe'}),
})
.then(response => response.json())
.then(data => console.log('PUT:', data))
.catch((error) => console.error('Error:', error));

// DELETE request
fetch('https://httpbin.org/delete', {
    method: 'DELETE',
})
.then(response => response.json())
.then(data => console.log('DELETE:', data))
.catch((error) => console.error('Error:', error));