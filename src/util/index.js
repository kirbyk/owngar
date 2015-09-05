export function randElement(arr) {
  return arr[randBetween(arr.length)];
}

export function randBetween(limit) {
  return Math.floor(Math.random() * limit);
}
