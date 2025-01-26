export default function createChunks(arr, chunkSize) {
  const res = arr.reduce((acc, item, i) => {
    const index = Math.floor(i / chunkSize);
    if (!acc[index]) acc[index] = [];

    acc[index].push(item);
    return acc;
  }, []);

  return res;
}
