export interface HSAnimationType {
  type: string;
  index: number[];
  height: number[];
}

function heapify(arr: number[], length: number, i: number, animation: HSAnimationType[]): number[] {
  let largest = i;
  const left = i * 2 + 1;
  const right = left + 1;

  if (left < length && arr[left] > arr[largest]) {
    animation.push({ type: 'compare', index: [largest, left], height: [arr[largest], arr[left]] });
    largest = left;
  }
  if (right < length && arr[right] > arr[largest]) {
    animation.push({ type: 'compare', index: [largest, right], height: [arr[largest], arr[right]] });
    largest = right;
  }
  if (largest !== i) {
    animation.push({ type: 'swap', index: [i, largest], height: [arr[i], arr[largest]] });
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, length, largest, animation);
  }
  return arr;
}

function heapSort(arr: number[], animation: HSAnimationType[]): void {
  const length = arr.length;
  let i = Math.floor((length / 2) - 1);
  let k = length - 1;

  while (i >= 0) {
    animation.push({ type: 'scan', index: [i], height: [arr[i]] });
    heapify(arr, length, i, animation);
    i--;
  }

  while (k >= 0) {
    animation.push({ type: 'swap', index: [0, k], height: [arr[0], arr[k]] });
    [arr[0], arr[k]] = [arr[k], arr[0]];
    animation.push({ type: 'scan', index: [k], height: [arr[k]] });
    heapify(arr, k, 0, animation);
    k--;
  }
}

export default heapSort;
