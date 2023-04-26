export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  let ca = 0;
  if (weakMap.get(endpoint)) ca = weakMap.get(endpoint);
  weakMap.set(endpoint, called + 1);
  if (ca + 1 >= 5) throw new Error('over loaded');
}