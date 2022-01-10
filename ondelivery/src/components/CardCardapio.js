import PropTypes from 'prop-types';
import React from 'react';
import '../css/Cardapio.css';

function CardCardapio({ image, titulo, descricao, preco, index }) {
  return (
    <div className="cardCardapio">
      <div className="textos-card">
        <div>
          <h3 className="tituloCard">{`${index + 1}. ${titulo}`}</h3>
          <p className="descricaoCard">{descricao}</p>
        </div>
        <div className="precoCard">
          <button type="button" className="preco">
            <h3>{`+ R$ ${preco.toFixed(2)}`}</h3>
          </button>
        </div>
      </div>
      <img className="imgCard" src={ image } alt="burguer" />
    </div>
  );
}

CardCardapio.propTypes = {
  descricao: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  preco: PropTypes.number.isRequired,
  titulo: PropTypes.string.isRequired,
};

export default CardCardapio;
