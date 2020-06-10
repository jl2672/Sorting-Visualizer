export interface BSAnimationType {
  type: string;
  index: number[];
  height: number[];
}

function bubbleSort(arr: number[], animation: BSAnimationType[]): void {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      animation.push({ type: 'scan', index: [j, j + 1], height: [arr[j], arr[j + 1]] });
      if (arr[j] > arr[j + 1]) {
        animation.push({ type: 'swap', index: [j, j + 1], height: [arr[j], arr[j + 1]] });
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
}

export default bubbleSort;
