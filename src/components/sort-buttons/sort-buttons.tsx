import { useAppDispatch, useAppSelector } from '../../hooks';
import Button from '../button/button';
import { bubbleSort } from '../../store/action';
import { getArray } from '../../store/array-process/selectors';
import './sort-buttons.scss';

function SortButtons () {
  const array = useAppSelector(getArray);
  const dispatch = useAppDispatch();
  const onBubbleSort = () => {
    dispatch(bubbleSort(array));
  };

  return (
    <div className="buttons">
      <Button text="Пузырьком" onClick={onBubbleSort} />
    </div>
  );
}

export default SortButtons;
