export function emptyObj(o: any) {
  return Object.keys(o).length === 0 && o.constructor === Object;
}
