Promise.myAll = function(iterable) {
  return new Promise((resolve, reject) => {
    
    if (!iterable || iterable[Symbol.iterator] !== "function") {
      return reject(new TypeError("Arguments should be iterable");
    }

    const result = [];
    let completedCount = 0;
    let index = 0;

    for (let item of iterable) {
      const currentIndex = index;
      index++;
      Promise.resolve(item)
        .then(value => {
          result[currentIndex] = value;
          completedCount++;

          if (completedCount === index) {
            return resolve(result);
          }
        })
        .catch(err => {
          reject(err);
        })
    }
    if (index === 0) {
      resolve([]);
    }
  });
}
                     
