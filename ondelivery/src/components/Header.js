import React from 'react';
import useCadastro from '../hooks/useCadastro';
import onDeli from '../imagens/onDelivery.png';

function Header() {
  const { info } = useCadastro();
  return (
    <div>
      <img src={ onDeli } alt="logo" width="150" height="auto" />
      <div>
        <h5>{`Olá ${info.nome}`}</h5>
        <p>{`${info.rua},${info.numero},${info.bairro}-${info.ap}`}</p>
      </div>
    </div>
  );
}

export default Header;
