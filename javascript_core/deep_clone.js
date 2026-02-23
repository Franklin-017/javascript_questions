function deepClone(obj, visited = new WeakMap()) {
    if (obj === null || typeof obj !== 'object') return obj;

    if (obj instanceof Date) return new Date(obj);
    if (obj instanceof RegExp) return new RegExp(obj);

    if (visited.has(obj)) return visited.get(obj);

    const clone = Array.isArray(obj) ? [] : {};
    visited.set(obj, clone);

    Reflect.ownKeys(obj).forEach((key) => {
        const value = obj[key];
        clone[key] = deepClone(value, visited);
    })

    return clone;
}