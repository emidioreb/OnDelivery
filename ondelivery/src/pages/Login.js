import React from 'react';
import onDeli from '../imagens/onDelivery.png';

function Login() {
  return (
    <main className="all-login">
      <header>
        <img src={ onDeli } alt="logo" id="logoUp-login" width="150" height="auto" />
      </header>
      <section className="section-login">
        <img src={ onDeli } alt="logo" id="logoCenter-login" width="150" />
        <div id="label-input-login">
          {/* <label htmlFor="input-login" id="label-login">
            Celular */}
          {/* <br /> */}
          <input
            type="celular"
            id="input-login"
            placeholder="(85) 99990-0023"
          />
          {/* </label> */}
        </div>
        <button type="submit" id="submit-login">
          Vamos lá!
        </button>
      </section>
    </main>
  );
}

export default Login;
