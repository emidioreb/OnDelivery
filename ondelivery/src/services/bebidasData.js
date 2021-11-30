import imgCoca from '../imagens/coca3.jpg';
import imgFanta from '../imagens/fanta.jpg';
import imgGuarana from '../imagens/guarana.jpg';
import imgAgua from '../imagens/agua.jpeg';
import imgSuco from '../imagens/suco.jpeg';

const menuBebidas = [
  {
    token: 201,
    title: 'Coca-Cola',
    storyline: 'Refrigerante de 350ml no sabor cola',
    price: 3.50,
    imagePath: imgCoca,
  },
  {
    token: 202,
    title: 'Fanta Laranja',
    storyline: 'Refrigerante de 350ml no sabor laranja.',
    price: 3.50,
    imagePath: imgFanta,
  },
  {
    token: 203,
    title: 'Guaraná Antartica',
    storyline: 'Refrigerante de 350ml no sabor guaraná.',
    price: 3.50,
    imagePath: imgGuarana,
  },
  {
    token: 204,
    title: 'Água',
    storyline: '500ml',
    price: 2.50,
    imagePath: imgAgua,
  },
  {
    token: 205,
    title: 'Suco de laranja',
    storyline: 'Delicioso suco de laranja com 400ml.',
    price: 5.50,
    imagePath: imgSuco,
  },
];

export default menuBebidas;
