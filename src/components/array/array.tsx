import Bar from '../bar/bar';
import { createArray } from '../../utils/createArray';
import { DEFAULT_ARRAY_LENGTH } from '../../const';
import './array.scss';

const WIDTH_MULTIPLIER = window.screen.width;
const ARRAY = createArray(DEFAULT_ARRAY_LENGTH);
const BAR_WIDTH = WIDTH_MULTIPLIER / ARRAY.length;

function Array (): JSX.Element {
  return (
    <div className="array">
      {
        ARRAY.map((height) => (
          <Bar key={height} width={BAR_WIDTH} height={height} />
        ))
      }
    </div>
  );
}

export default Array;
