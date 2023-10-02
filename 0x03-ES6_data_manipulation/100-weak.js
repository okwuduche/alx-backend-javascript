export const weakMap = new WeakMap();
export function queryAPI(endpoint) {
  const times = weakMap.get(endpoint) || 0;
  weakMap.set(endpoint, times + 1);
  if (times >= 4) {
    throw new Error('Endpoint load is high');
  }
}
