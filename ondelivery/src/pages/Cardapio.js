import React from 'react';
import CardCardapio from '../components/CardCardapio';
import Footer from '../components/Footer';
import Header from '../components/Header';
import menuBurguers from '../services/burguersData';
import '../css/Cardapio.css';
import Categorias from '../components/Categorias';

function Cardapio() {
  return (
    <div>
      <Header />
      <div className="center-cardapio">
        <Categorias />
        {
          menuBurguers.map((item) => (
            <CardCardapio
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
