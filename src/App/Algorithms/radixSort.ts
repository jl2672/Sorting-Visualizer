export interface RSAnimationType {
  type: string;
  index: number;
  height: number;
}

function countingSort(arr: number[], exp: number, animation: RSAnimationType[]) {
  const n = arr.length;
  const output = new Array(n).fill(0);
  const count = new Array(10).fill(0);

  for (let i = 0; i < n; i++) {
    animation.push({ type: 'scan', index: i, height: arr[i] });
    const index = Math.floor(arr[i] / exp);
    count[index % 10] += 1;
  }

  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1];
  }

  let i = n - 1;
  while (i >= 0) {
    animation.push({ type: 'scan', index: i, height: arr[i] });
    const index = Math.floor(arr[i] / exp);
    output[count[index % 10] - 1] = arr[i];
    count[index % 10] -= 1;
    i--;
  }
  for (i = 0; i < n; i++) {
    animation.push({ type: 'overwrite', index: i, height: output[i] });
    arr[i] = output[i];
  }
}

function radixSort(arr: number[], animation: RSAnimationType[]): void {
  const max = Math.max(...arr);
  let exp = 1;
  while (Math.floor(max / exp) > 0) {
    countingSort(arr, exp, animation);
    exp *= 10;
  }
}

export default radixSort;
