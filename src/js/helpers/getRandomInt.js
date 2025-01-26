export function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export function getRandomDifferentItem(data, id) {
  const item = data[getRandomInt(data.length - 1)];
  return item.id === id ? getRandomDifferentItem(data, id) : item;
}
