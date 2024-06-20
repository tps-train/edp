// Synchronous function
function syncFunc() {
    console.log('This is a synchronous function');
}

// Asynchronous function
async function asyncFunc() {
    // Simulate a delay using Promise and setTimeout
    const result = await new Promise((resolve, _reject) => {
        setTimeout(() => {
            resolve('This is an asynchronous function');
        }, 2000); // 2 seconds delay
    });
    console.log(result);
}

// Call the synchronous function
syncFunc();
// Call the asynchronous function
asyncFunc();
// This will be logged immediately, even before asyncFunc() finishes
console.log('End of script');

// Promise with .then
new Promise((resolve, _reject) => {
    setTimeout(() => {
        resolve('This is a Promise with .then');
    }, 2000); // 2 seconds delay
}).then(result => {
    console.log(result);
});

// Async/Await
async function exampleAsyncAwait() {
    const result = await new Promise((resolve, _reject) => {
        setTimeout(() => {
            resolve('This is an example of async/await');
        }, 2000); // 2 seconds delay
    });
    console.log(result);
}

// Call the async/await function
exampleAsyncAwait();

// Fetch data from an API using .then
fetch('https://ecs.the-sock-exchange.com/api/socks/1/3')
    .then(response => response.json())
    .then(data => {
        console.log('Data received:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });

// Fetch data from an API using async/await
async function fetchData() {
    try {
        const response = await fetch('https://ecs.the-sock-exchange.com/api/socks/1/3');
        const data = await response.json();
        console.log('Data received:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchData();

