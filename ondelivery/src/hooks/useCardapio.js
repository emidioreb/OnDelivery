import PropTypes from 'prop-types';
import React, { createContext, useState, useContext } from 'react';

const CardapioContext = createContext();

export function CardapioProvider({ children }) {
  const [categoria, setCategoria] = useState('promos');

  const globalCardapio = {
    categoria, setCategoria,
  };

  return (
    <CardapioContext.Provider value={ globalCardapio }>
      {children}
    </CardapioContext.Provider>

  );
}

CardapioProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default function useCardapio() {
  return useContext(CardapioContext);
}
