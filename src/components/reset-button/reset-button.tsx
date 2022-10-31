import { useAppDispatch } from '../../hooks';
import { resetArray } from '../../store/array-process/array-process';
import Button from '../button/button';

function Controls () {
  const dispatch = useAppDispatch();
  const handleResetClick = () => {
    dispatch(resetArray());
  };

  return (
    <Button text="Пересоздать массив" onClick={handleResetClick}/>
  );
}

export default Controls;
