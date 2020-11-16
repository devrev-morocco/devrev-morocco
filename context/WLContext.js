import { createContext } from 'react';
import { useLocalStorage } from '../hooks';
import PropTypes from 'prop-types';

export const WLContext = createContext();

export const WLProvider = ({ children }) => {
  const [StoredValue, setLocalStorage] = useLocalStorage('devrev-wl', {
    wl: []
  });

  return (
    <WLContext.Provider value={[StoredValue, setLocalStorage]}>
      {children}
    </WLContext.Provider>
  );
};

WLProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};
