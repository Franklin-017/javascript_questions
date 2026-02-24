function flattenObject(obj, visited = new WeakMap()) {
  let finalObj = {};

  const generateFlatObject = (currentObj, parent) => {
    if (currentObj === null || typeof currentObj !== 'object') return;

    if(visited.has(currentObj)) {
      finalObj[parent] = currentObj;
      return;
    }
    visited.set(currentObj, true);
  
    Object.keys(currentObj).forEach(key => {
      const value = currentObj[key];
      const newKey = parent ? `${parent}.${key}` : key;
      
      if (typeof value === 'object' && value !== null && Object.keys(value).length > 0) {
        generateFlatObject(value, newKey);
      } else {
        finalObj[newKey] = value;
      }
    })
  }

  generateFlatObject(obj, "", visited);
  return finalObj;
}
