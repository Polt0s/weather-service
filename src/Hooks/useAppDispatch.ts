import { useDispatch } from 'react-redux';
import { AppDispatch } from '../Store';

const useAppDispatch = () => useDispatch<AppDispatch>();

export default useAppDispatch;
