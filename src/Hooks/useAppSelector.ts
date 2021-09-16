import { useSelector, TypedUseSelectorHook } from 'react-redux';
import type { RootState } from '../Store/reducer/reducer';

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useAppSelector;
