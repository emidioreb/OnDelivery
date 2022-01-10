import React from 'react';
import CardCardapio from '../components/CardCardapio';
import Footer from '../components/Footer';
import Header from '../components/Header';
import menuBurguers from '../services/burguersData';
import '../css/Cardapio.css';
import Categorias from '../components/Categorias';
import useCardapio from '../hooks/useCardapio';
import menuBebidas from '../services/bebidasData';
import promos from '../services/promos';

function Cardapio() {
  const { categoria } = useCardapio();
  const categoriaEscolhida = () => {
    if (categoria === 'burgues') {
      return menuBurguers;
    } if (categoria === 'bebidas') {
      return menuBebidas;
    } if (categoria === 'promos') {
      return promos;
    }
  };
  return (
    <div>
      <Header />
      <div className="center-cardapio">
        <Categorias />
        {
          categoriaEscolhida().map((item, index) => (
            <CardCardapio
              index={ index }
              key={ item.token }
              image={ item.imagePath }
              titulo={ item.title }
              preco={ item.price }
              descricao={ item.storyline }
            />))
        }
      </div>
      <Footer />
    </div>
  );
}

export default Cardapio;
