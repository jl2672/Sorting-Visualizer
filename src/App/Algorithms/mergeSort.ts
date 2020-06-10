export interface MSAnimationType {
  type: string;
  index: number[];
  height: number;
}

function merge(array: number[], aux: number[], left: number, mid: number, right: number, animation: MSAnimationType[]): void {
  for (let i = left; i <= right; i++) {
    aux[i] = array[i];
  }
  let i = left;
  let j = mid + 1;
  let k = left;
  while (i <= mid && j <= right) {
    animation.push({ type: 'compare', index: [i, j], height: 0 });
    if (aux[i] <= aux[j]) {
      animation.push({ type: 'overwrite', index: [k], height: aux[i] });
      array[k++] = aux[i++];
    } else {
      animation.push({ type: 'overwrite', index: [k], height: aux[j] });
      array[k++] = aux[j++];
    }
  }
  while (i <= mid) {
    animation.push({ type: 'scan', index: [i], height: aux[i] });
    animation.push({ type: 'overwrite', index: [k], height: aux[i] });
    array[k++] = aux[i++];
  }
  while (j <= right) {
    animation.push({ type: 'scan', index: [j], height: aux[j] });
    animation.push({ type: 'overwrite', index: [k], height: aux[j] });
    array[k++] = aux[j++];
  }
}


function mergeSort(array: number[], aux: number[], left: number, right: number, animation: MSAnimationType[]): void {
  if (left === right) return;
  const mid = Math.floor(left + (right - left) / 2);
  mergeSort(array, aux, left, mid, animation);
  mergeSort(array, aux, mid + 1, right, animation);
  merge(array, aux, left, mid, right, animation);
}

export default mergeSort;
