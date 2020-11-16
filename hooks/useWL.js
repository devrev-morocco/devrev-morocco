import { useContext } from 'react';
import { WLContext } from '../context/WLContext';

export const useWL = () => useContext(WLContext);
