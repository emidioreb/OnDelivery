import React from 'react';

function Login() {
  return (
    <div>
      <header>
        header
      </header>
      <form className="pure-form pure-form-stacked">
        <fieldset>
          <label htmlFor="stacked-celular">
            Celular
            <input type="celular" id="stacked-celular" placeholder="(85) 99990-0023" />
          </label>
          <button type="submit" className="pure-button pure-button-primary">
            Vamos Lá
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default Login;
