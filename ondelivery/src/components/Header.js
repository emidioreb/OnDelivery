import React from 'react';
import useCadastro from '../hooks/useCadastro';
import burguer from '../imagens/logoOn.png';
import '../css/Cardapio.css';

function Header() {
  const { info } = useCadastro();
  return (
    <div className="Header">
      <img src={ burguer } alt="logo" width="70" height="70" />
      <div className="info-header">
        <h4 className="text-size-1">{`Olá, ${info.nome}!`}</h4>
        <p className="text-size-2">{`${info.rua}, ${info.numero}, ${info.bairro}. `}</p>
      </div>
    </div>
  );
}

export default Header;
