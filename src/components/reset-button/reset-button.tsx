import { useAppDispatch, useAppSelector } from '../../hooks';
import { resetArray } from '../../store/sorting-actions';
import { getArrayLength } from '../../store/array-process/selectors';
import Button from '../button/button';

function Controls () {
  const dispatch = useAppDispatch();
  const arrayLength = useAppSelector(getArrayLength);

  const handleResetClick = () => {
    dispatch(resetArray(arrayLength));
  };

  return (
    <Button text="Пересоздать массив" onClick={handleResetClick}/>
  );
}

export default Controls;
