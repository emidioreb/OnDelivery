import PropTypes from 'prop-types';
import React, { createContext, useState, useContext } from 'react';

const CadastroContext = createContext();

export function CadastroProvider({ children }) {
  const [info, setInfo] = useState({ nome: '',
    cep: '',
    bairro: '',
    rua: '',
    numero: '',
    ap: '',
    bloco: '',
    celular: '' });

  const globalCadastro = {
    info, setInfo,
  };

  return (
    <CadastroContext.Provider value={ globalCadastro }>
      {children}
    </CadastroContext.Provider>

  );
}

CadastroProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default function useCadastro() {
  return useContext(CadastroContext);
}
