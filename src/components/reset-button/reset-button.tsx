import { useAppDispatch } from '../../hooks';
import { resetArrayAction } from '../../store/sorting-actions';
import Button from '../button/button';

function Controls () {
  const dispatch = useAppDispatch();

  const handleResetClick = () => {
    dispatch(resetArrayAction());
  };

  return (
    <Button text="Пересоздать массив" onClick={handleResetClick}/>
  );
}

export default Controls;
