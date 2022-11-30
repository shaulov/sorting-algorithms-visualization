import ResetButton from '../reset-button/reset-button';
import SortButtons from '../sort-buttons/sort-buttons';

import './controls.scss';

const Controls = () => (
  <div className="controls">
    <div className="controls__buttons">
      <ResetButton />
      <SortButtons />
    </div>
  </div>
);

export default Controls;
