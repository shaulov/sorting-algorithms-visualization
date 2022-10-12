const randomNumberFromInterval = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1) + min);

export const createArray = (arrayLength: number): number[] => {
  const array = [];

  for (let i = 0; i < arrayLength; i++) {
    array.push(randomNumberFromInterval(30, 600));
  }

  return array;
};

