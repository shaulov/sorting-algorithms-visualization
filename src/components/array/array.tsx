import Bar from '../bar/bar';
import { createArray } from '../../utils/createArray';
import './array.scss';

const WIDTH_MULTIPLIER = window.screen.width;
const ARRAY = createArray(30);
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
