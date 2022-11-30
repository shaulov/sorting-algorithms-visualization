import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { resetArrayAction } from '../../store/sorting-actions';
import { getArray } from '../../store/array-process/selectors';
import Bar from '../bar/bar';
import { randomNumberFromInterval } from '../../utils/createArray';
import './array.scss';

const WIDTH_MULTIPLIER = window.screen.width;

function Array (): JSX.Element {
  const array = useAppSelector(getArray);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(resetArrayAction());
  }, []);

  const BAR_WIDTH = WIDTH_MULTIPLIER / array.length || 0;

  return (
    <div className="array">
      {
        array.map((height) => {
          const barId = randomNumberFromInterval(1, 1000) * height;
          return (<Bar key={barId} width={BAR_WIDTH} height={height} />);
        })
      }
    </div>
  );
}

export default Array;
