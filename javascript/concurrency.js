// Function to limit concurrency of promises
async function limitConcurrency(promises, maxConcurrency) {
  const results = [];
  let currentIndex = 0;

  async function processNext() {
    const index = currentIndex++;
    if (index >= promises.length) return; // All promises have been processed

    const currentPromise = promises[index];
    const result = await currentPromise;
    results.push(result);

    // Recursively call processNext to continue processing the next promise
    await processNext();
  }

  // Start processing the first set of promises up to the maximum concurrency limit
  const initialPromises = promises.slice(0, maxConcurrency).map(processNext);
  await Promise.all(initialPromises);

  return results;
}

// Your array of 100 promises
const arrayOfPromises = [];

// Your array of 100 promises
for (let i = 0; i < 100; i++) {
  arrayOfPromises.push(
    new Promise((resolve, reject) => {
      // Simulate an asynchronous action
      setTimeout(() => {
        resolve(i);
      }, 1000);
    })
  );
}

// Call the limitConcurrency function with your array of promises and the desired max concurrency
limitConcurrency(arrayOfPromises, 10)
  .then((results) => {
    // All promises have been completed, and you can work with the results here
    console.log("Results:", results);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
