const eventualResolution = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello");
  }, 5000);
});

eventualResolution
  .then(
    (resolveData) => `${ resolveData }, world!`,
    (rejectData) => console.log(`${rejectData} cruel world`)
  )
  .finally(() => console.log("Donzo"));

const eventualRejection = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Goodbye");
  }, 5000);
});

eventualRejection
  .then(
    (resolveData) => `${ resolveData }, world!`,
    (rejectData) => console.log(`${rejectData} cruel world`)
  )
  .finally(() => console.log("Donzo"));
