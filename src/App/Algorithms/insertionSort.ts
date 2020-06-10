export interface ISAnimationType {
  type: string;
  index: number;
  height: number;
}

function insertionSort(arr: number[], animation: ISAnimationType[]): void {
  for (let i = 1; i < arr.length; i++) {
    const key = arr[i];
    animation.push({ type: 'scan', index: i, height: arr[i] });
    let j = i - 1;
    while (j >= 0 && key < arr[j]) {
      animation.push({ type: 'scan', index: j, height: arr[j] });
      animation.push({ type: 'overwrite', index: j + 1, height: arr[j] });
      arr[j + 1] = arr[j];
      j--;
    }
    animation.push({ type: 'overwrite', index: j + 1, height: key });
    arr[j + 1] = key;
  }
}

export default insertionSort;
