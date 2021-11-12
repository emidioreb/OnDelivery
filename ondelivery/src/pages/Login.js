import React from 'react';
import { Link } from 'react-router-dom';
import ButtonForm from '../components/ButtonForm';
import InputForm from '../components/InputForm';
import onDeli from '../imagens/onDelivery.png';
import '../css/Login.css';
import useCadastro from '../hooks/useCadastro';

function Login() {
  const { setInfo } = useCadastro();

  return (
    <main className="all-login">
      <header>
        <img src={ onDeli } alt="logo" id="logoUp-login" width="150" height="auto" />
      </header>
      <section className="section-login">
        <div id="positionImage">
          <img src={ onDeli } alt="logo" id="logoCenter-login" width="150" />
        </div>
        <div id="label-input-login">
          <InputForm
            classNameInput="input-login"
            label="Celular:"
            type="text"
            classNameLabel="label-login"
            placeholder="(85) 99990-0023"
            onChange={ ({ target }) => setInfo({ celular: target.value }) }
            name="inputLogin"
          />
        </div>
        <div id="positionButton">
          <Link to="cadastro">
            <ButtonForm label="Vamos lá!" id="submit-login" />
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Login;
