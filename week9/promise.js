function meetupPromise(frankGoes, michelleGoes, ryanGoes, jesseGoes) {
  return new Promise((resolve, reject) => {
    if (frankGoes || michelleGoes || ryanGoes || jesseGoes) {
        resolve(true);
    }

    reject(false);
  });
}

meetupPromise(false, false, false, false)
    .then((response) => { console.log(response); return true; })
    .catch((fail) => { console.log(fail) });