function groupBy(collection, criterion) {
    if(!collection) return {};

    const value = Array.isArray(collection) ? collection : Object.values(collection);

    return value.reduce((acc, item) => {
        const key = typeof criterion === "function" ? criterion(item) : item[criterion];
        const groupKey = key ?? 'undefined';

        if(!acc[groupKey]) acc[groupKey] = [];
        acc[groupKey] = item;
        return acc;
    }, {})
}