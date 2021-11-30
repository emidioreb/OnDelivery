import React from 'react';
import useCardapio from '../hooks/useCardapio';

function Categorias() {
  const { setCategoria } = useCardapio();
  return (
    <div className="categorias">
      <button
        type="button"
        className="button-Categorias"
        onClick={ () => setCategoria('burgues') }
      >
        Burgues
      </button>
      <button
        type="button"
        className="button-Categorias"
        onClick={ () => setCategoria('promos') }
      >
        Promos
      </button>
      <button
        type="button"
        className="button-Categorias"
        onClick={ () => setCategoria('bebidas') }
      >
        Bebidas
      </button>
    </div>
  );
}

export default Categorias;
