import StoreContext from './Context';
import { useState } from 'react';
import cardData from '../data/cardData';

function Provider({ children }) {
  const [data, setData] = useState(cardData);

  const store = {
    dataContext: [data, setData],
  };

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
}

export default Provider;
