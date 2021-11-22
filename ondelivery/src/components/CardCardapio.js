import PropTypes from 'prop-types';
import React from 'react';
import '../css/Cardapio.css';

function CardCardapio({ image, titulo, descricao, preco }) {
  return (
    <div className="cardCardapio">
      <img className="imgCard" src={ image } alt="burguer" />
      <div>
        <h3 className="tituloCard">{titulo}</h3>
        <p className="descricaoCard">{descricao}</p>
      </div>
      <div className="precoCard">
        <button type="button" className="preco">
          <h3>{`+ R$ ${preco}`}</h3>
        </button>
      </div>
    </div>
  );
}

CardCardapio.propTypes = {
  descricao: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  preco: PropTypes.number.isRequired,
  titulo: PropTypes.string.isRequired,
};

export default CardCardapio;
