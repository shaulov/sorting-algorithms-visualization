import { useAppDispatch } from '../../hooks';
import { bubbleSortAction } from '../../store/sorting-actions';
import Button from '../button/button';
import './sort-buttons.scss';

function SortButtons () {
  const dispatch = useAppDispatch();
  const onBubbleSort = () => {
    dispatch(bubbleSortAction());
  };

  return (
    <div className="buttons">
      <Button text="Пузырьком" onClick={onBubbleSort} />
    </div>
  );
}

export default SortButtons;
