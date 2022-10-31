import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { resetArray } from '../../store/array-process/array-process';
import { getArray } from '../../store/array-process/selectors';
import Bar from '../bar/bar';
import { randomNumberFromInterval } from '../../utils/createArray';
import './array.scss';

const WIDTH_MULTIPLIER = window.screen.width;

function Array (): JSX.Element {
  const array = useAppSelector(getArray);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(resetArray());
  }, []);

  const BAR_WIDTH = WIDTH_MULTIPLIER / array.length || 0;

  return (
    <div className="array">
      {
        array.map((height) => {
          const barId = randomNumberFromInterval(0, array.length) * height;
          return (<Bar key={barId} width={BAR_WIDTH} height={height} />);
        })
      }
    </div>
  );
}

export default Array;
