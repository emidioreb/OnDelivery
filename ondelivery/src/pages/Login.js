import React from 'react';
import ButtonForm from '../components/ButtonForm';
import InputForm from '../components/InputForm';
import onDeli from '../imagens/onDelivery.png';

class Login extends React.Component {
  render() {
    return (
      <main className="all-login">
        <header>
          <img src={ onDeli } alt="logo" id="logoUp-login" width="150" height="auto" />
        </header>
        <section className="section-login">
          <img src={ onDeli } alt="logo" id="logoCenter-login" width="150" />
          <div id="label-input-login">
            <InputForm
              label="Celular"
              type="text"
              id="input-login"
              placeholder="(85) 99990-0023"
              name="input-login"
            />
          </div>
          <ButtonForm label="Vamos lá!" id="submit-login" />
        </section>
      </main>
    );
  }
}

export default Login;
