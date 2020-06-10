import heapSort, { HSAnimationType } from './heapSort';

const animateHeapSort = async (mainArray: number[], ANIMATION_SPEED: number): Promise<number> => {
  const animation: HSAnimationType[] = [];
  heapSort(mainArray, animation);
  const arrayBars = document.getElementsByClassName('array-bar') as HTMLCollectionOf<HTMLElement>;
  let time = 0;
  const defaultColor = '#0145FE';
  const highlightColor = '#D11A45';
  const swapColor = '#FB9804';
  const finishColor = '#3DCB59';
  for (let i = 0; i < animation.length; i++) {
    if (animation[i].type === 'scan') {
      const barStyle = arrayBars[animation[i].index[0]].style;
      setTimeout(() => {
        barStyle.backgroundColor = highlightColor;
      }, time + 1);
      setTimeout(() => {
        barStyle.backgroundColor = defaultColor;
      }, time + 1 + ANIMATION_SPEED);
      time += 1 + ANIMATION_SPEED;
    } else if (animation[i].type === 'compare') {
      const barOneStyle = arrayBars[animation[i].index[0]].style;
      const barTwoStyle = arrayBars[animation[i].index[1]].style;
      setTimeout(() => {
        barOneStyle.backgroundColor = highlightColor;
        barTwoStyle.backgroundColor = highlightColor;
      }, time + 1);
      setTimeout(() => {
        barOneStyle.backgroundColor = defaultColor;
        barTwoStyle.backgroundColor = defaultColor;
      }, time + 1 + ANIMATION_SPEED);
      time += 1 + ANIMATION_SPEED;
    } else if (animation[i].type === 'swap') {
      const barOneStyle = arrayBars[animation[i].index[0]].style;
      const barTwoStyle = arrayBars[animation[i].index[1]].style;
      const barOneHeight = animation[i].height[0];
      const barTwoHeight = animation[i].height[1];
      setTimeout(() => {
        barOneStyle.backgroundColor = swapColor;
        barTwoStyle.backgroundColor = swapColor;
      }, time + 1);
      setTimeout(() => {
        barOneStyle.height = `${barTwoHeight}px`;
        barTwoStyle.height = `${barOneHeight}px`;
      }, time + 1 + ANIMATION_SPEED);
      setTimeout(() => {
        barOneStyle.backgroundColor = defaultColor;
        barTwoStyle.backgroundColor = defaultColor;
      }, time + 2 + ANIMATION_SPEED);
      time += 2 + ANIMATION_SPEED;
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

export default animateHeapSort;
