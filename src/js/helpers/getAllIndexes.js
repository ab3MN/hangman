export default function getAllIndexes(arr, val) {
  return arr.reduce((acc, item, index) => {
    if (item === val) acc.push(index);
    return acc;
  }, []);
}
