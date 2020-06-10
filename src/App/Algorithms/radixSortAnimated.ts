import radixSort, { RSAnimationType } from './radixSort';

const animateRadixSort = async (mainArray: number[], ANIMATION_SPEED: number): Promise<number> => {
  const animation: RSAnimationType[] = [];
  radixSort(mainArray, animation);
  const arrayBars = document.getElementsByClassName('array-bar') as HTMLCollectionOf<HTMLElement>;
  let time = 0;
  const defaultColor = '#0145FE';
  const highlightColor = '#D11A45';
  const overwriteColor = '#FB9804';
  const finishColor = '#3DCB59';
  for (let i = 0; i < animation.length; i++) {
    if (animation[i].type === 'scan') {
      const barStyle = arrayBars[animation[i].index].style;
      setTimeout(() => {
        barStyle.backgroundColor = highlightColor;
      }, time + 1);
      setTimeout(() => {
        barStyle.backgroundColor = defaultColor;
      }, time + 1 + ANIMATION_SPEED);
      time += 1 + ANIMATION_SPEED;
    } else if (animation[i].type === 'overwrite') {
      const barStyle = arrayBars[animation[i].index].style;
      const barHeight = animation[i].height;
      setTimeout(() => {
        barStyle.backgroundColor = overwriteColor;
      }, time + 1);
      setTimeout(() => {
        barStyle.backgroundColor = defaultColor;
        barStyle.height = `${barHeight}px`;
      }, time + 1 + ANIMATION_SPEED);
      time += 1 + ANIMATION_SPEED;
    }
  }
  setTimeout(() => {
    for (let i = 0; i < arrayBars.length; i++) {
      arrayBars[i].style.backgroundColor = finishColor;
    }
  }, time + 1);
  setTimeout(() => {
    for (let i = 0; i < arrayBars.length; i++) {
      arrayBars[i].style.backgroundColor = defaultColor;
    }
  }, time + 1001);
  time += 1001;
  return time;
};

export default animateRadixSort;
