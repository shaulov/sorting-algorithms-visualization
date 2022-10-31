import { useAppDispatch } from '../../hooks';
import { resetArray } from '../../store/array-process/array-process';
import Button from '../button/button';
import './controls.scss';

function Controls () {
  const dispatch = useAppDispatch();
  const handleResetClick = () => {
    dispatch(resetArray());
  };

  return (
    <div className="controls">
      <div className="controls__buttons">
        <Button text="Пересоздать массив" onClick={handleResetClick}/>
      </div>
    </div>
  );
}

export default Controls;
