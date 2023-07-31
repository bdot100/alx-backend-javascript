export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  // Get the count of queries for the endpoint from the weakMap
  let queryCount = weakMap.get(endpoint) || 0;

  // Increment the query count
  queryCount += 1;

  // Update the query count in the weakMap
  weakMap.set(endpoint, queryCount);

  // Check if the query count is >= 5, and throw an error if true
  if (queryCount >= 5) {
    throw new Error('Endpoint load is high');
  }
}
