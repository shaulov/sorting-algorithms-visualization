import { useAppDispatch } from '../../hooks';
import { bubbleSort } from '../../store/action';
import Button from '../button/button';
import './sort-buttons.scss';

function SortButtons () {
  const dispatch = useAppDispatch();
  const onBubbleSort = () => {
    dispatch(bubbleSort());
  };

  return (
    <div className="buttons">
      <Button text="Пузырьком" onClick={onBubbleSort} />
    </div>
  );
}

export default SortButtons;
