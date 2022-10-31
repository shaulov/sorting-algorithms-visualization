import { State } from '../../types/state';
import { NameSpace } from '../../const';

export const getArray = (state: State): number[] => state[NameSpace.Array].array;
