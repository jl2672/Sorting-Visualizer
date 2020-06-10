export interface AnimationType {
  type: string;
  index: number[];
  height: number[];
}

function partition(arr: number[], low: number, high: number, animation: AnimationType[]) {
  const mid = Math.floor((low + high) / 2);
  const pivot = arr[mid];
  let i = low;
  let j = high;

  while (i <= j) {
    while (arr[i] < pivot) {
      i++;
      animation.push({ type: 'scan', index: [i], height: [arr[i]] });
    }
    while (arr[j] > pivot) {
      j--;
      animation.push({ type: 'scan', index: [j], height: [arr[j]] });
    }
    if (i <= j) {
      animation.push({ type: 'swap', index: [i, j], height: [arr[i], arr[j]] });
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
      j--;
    }
  }
  return i;
}

function quickSort(arr: number[], low: number, high: number, animation: AnimationType[]): void {
  if (arr.length > 1) {
    const pi = partition(arr, low, high, animation);
    if (low < pi - 1) quickSort(arr, low, pi - 1, animation);
    if (high > pi) quickSort(arr, pi, high, animation);
  }
}

export default quickSort;
