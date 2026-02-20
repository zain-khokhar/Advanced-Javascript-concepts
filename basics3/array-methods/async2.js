// Practice of Promise.allSettled method for handling multiple asynchronous requests.
const urls = [
  'https://jsonplaceholder.typicode.com/posts/1',
  'https://jsonplaceholder.typicode.com/posts/2',
  'https://jsonplaceholder.typicode.com/posts/3',
  'https://jsonplaceholder.typicode.com/posts/4',
  'https://jsonplaceholder.typicode.com/posts/5',
  'https://jsonplaceholder.typicode.com/posts/6',
  'https://jsonplaceholder.typicode.com/posts/7',
  'https://jsonplaceholder.typicode.com/posts/8',
  'https://jsonplaceholder.typicode.com/posts/9',
  'https://jsonplaceholder.typicode.com/posts/10'
];

async function fetchAll() {
  const results = await Promise.allSettled(
    urls.map(url => fetch(url).then(res => res.json()))
  );
  
  results.forEach((result, i) => {
    if (result.status === 'fulfilled') {
      console.log(`Request ${i+1} success:`, result.value);
    } else {
    }
  });
}

fetchAll();

async function demo() {
  console.log("Start");
  await new Promise(resolve => setTimeout(resolve, 2000)); // 2 sec wait
  console.log("After await"); // Ye tab print hoga jab promise resolve ho jaye
}

demo();
