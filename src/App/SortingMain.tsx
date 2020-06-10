import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import styled from 'styled-components';
import animateMergeSort from './Algorithms/mergeSortAnimated';
import animateQuickSort from './Algorithms/quickSortAnimated';
import animateBubbleSort from './Algorithms/bubbleSortAnimated';
import animateHeapSort from './Algorithms/heapSortAnimated';
import animateInsertionSort from './Algorithms/insertionSortAnimated';
import animateRadixSort from './Algorithms/radixSortAnimated';

const ComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  margin: 0;
  padding: 0;
  color: #0D2249;
  text-align: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #BDD2FA;
  width: 100vw;
  padding: 0.5rem 0;
  flex-wrap: wrap;
`;

const SortButton = styled.button`
  margin: 0.5rem 0.7rem;
  padding: 0.2rem 1rem;
  border-style: none;
  background-color: #5E92F2;
  border-radius: 7px;
  transition: 0.15s ease-in-out;

  &:hover {
    background-color: #88AFF6;
    cursor: pointer;
    transform: scale(1.1);
  }

  &:disabled {
    cursor: default;
    transform: none;
    background-color: #5E92F2;
  }
`;

const InputRangeDescription = styled.span`
  color: #0D2249;
  padding: 0 0.5rem;
`;

const InputRange = styled.input`
  &:hover {
    cursor: pointer;
  }
`;

const ArrayContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  background-color: white;
  margin: 2rem 0;
  height: 410px;
  width: 70vw;
`;

const ArrayBar = styled.div<{ height: number, width: number }>`
  background-color: #396EFE;
  height: ${(props) => `${String(props.height)}px`};
  width: ${(props) => `${String(props.width)}%`};
  margin-left: 1px;
`;

const SortingMain = (): JSX.Element => {
  const [mainArray, setMainArray] = useState<number[]>([]);
  const [buttonsDisabled, setButtonsDisabled] = useState(false);
  const [rangeValue, setRangeValue] = useState(2);
  const [animationSpeed, setAnimationSpeed] = useState(10);
  const [arrayLength, setArrayLength] = useState(100);
  const [arrayBarWidth, setArrayBarWidth] = useState(1);

  const resetArray = (): void => {
    const array = Array.from({ length: arrayLength }, () => Math.floor(Math.random() * 400) + 10);
    setMainArray(array);
  };

  useEffect(() => {
    resetArray();
  }, [arrayLength]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    switch (value) {
      case '0':
        setAnimationSpeed(200);
        setArrayLength(10);
        setArrayBarWidth(5);
        break;
      case '1':
        setAnimationSpeed(30);
        setArrayLength(50);
        setArrayBarWidth(5);
        break;
      case '2':
        setAnimationSpeed(10);
        setArrayLength(100);
        setArrayBarWidth(1);
        break;
      case '3':
        setAnimationSpeed(5);
        setArrayLength(150);
        setArrayBarWidth(1);
        break;
      case '4':
        setAnimationSpeed(2);
        setArrayLength(200);
        setArrayBarWidth(1);
        break;
      default:
        setAnimationSpeed(10);
        setArrayLength(100);
        setArrayBarWidth(1);
    }
    setRangeValue(Number(value));
  };

  const handleClick = async (method: string): Promise<void> => {
    let time = 0;
    await setButtonsDisabled(true);
    if (method === 'mergesort') time = await animateMergeSort(mainArray, animationSpeed);
    else if (method === 'quicksort') time = await animateQuickSort(mainArray, animationSpeed);
    else if (method === 'bubblesort') time = await animateBubbleSort(mainArray, animationSpeed);
    else if (method === 'heapsort') time = await animateHeapSort(mainArray, animationSpeed);
    else if (method === 'insertionsort') time = await animateInsertionSort(mainArray, animationSpeed);
    else if (method === 'radixsort') time = await animateRadixSort(mainArray, animationSpeed);
    setTimeout(() => {
      setButtonsDisabled(false);
    }, time);
  };

  return (
    <ComponentContainer>
      <ButtonContainer>
        <Title>Sorting Algorithms Visualized</Title>
      </ButtonContainer>
      <ButtonContainer>
        <SortButton type="button" disabled={buttonsDisabled} onClick={(): void => resetArray()}>New Random Array</SortButton>
        <InputRangeDescription>Set Size and Speed</InputRangeDescription>
        <InputRange type="range" min="0" max="4" step="1" value={rangeValue} onChange={handleChange} disabled={buttonsDisabled} />
      </ButtonContainer>
      <ButtonContainer>
        <SortButton type="button" disabled={buttonsDisabled} onClick={(): Promise<void> => handleClick('mergesort')}>Merge Sort</SortButton>
        <SortButton type="button" disabled={buttonsDisabled} onClick={(): Promise<void> => handleClick('quicksort')}>Quick Sort</SortButton>
        <SortButton type="button" disabled={buttonsDisabled} onClick={(): Promise<void> => handleClick('bubblesort')}>Bubble Sort</SortButton>
        <SortButton type="button" disabled={buttonsDisabled} onClick={(): Promise<void> => handleClick('heapsort')}>Heap Sort</SortButton>
        <SortButton type="button" disabled={buttonsDisabled} onClick={(): Promise<void> => handleClick('insertionsort')}>Insertion Sort</SortButton>
        <SortButton type="button" disabled={buttonsDisabled} onClick={(): Promise<void> => handleClick('radixsort')}>Radix Sort</SortButton>
      </ButtonContainer>

      <ArrayContainer>
        {mainArray.map((arrayBarHeight: number) => (
          <ArrayBar className="array-bar" height={arrayBarHeight} width={arrayBarWidth} key={uuid()} />
        ))}
      </ArrayContainer>
    </ComponentContainer>

  );
};

export default SortingMain;
