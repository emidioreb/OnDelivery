// import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router';
import InputForm from '../components/InputForm';
import useCadastro from '../hooks/useCadastro';

function Cadastro() {
  const { info, setInfo } = useCadastro();

  const { push } = useHistory();

  return (
    <div id="cadastro">
      <h5>Cadastra-se:</h5>
      <div>
        <InputForm
          classNameInput="input-cadastro"
          label="Nome:"
          type="text"
          classNameLabel="label-cadastro"
          placeholder="José da Silva"
          onChange={ ({ target }) => setInfo({ ...info, nome: target.value }) }
        />
        <div id="cep-bairro">
          <InputForm
            classNameInput="input-cadastro"
            label="CEP:"
            type="text"
            classNameLabel="label-cadastro"
            placeholder="00.000-000"
            id="inputCadastroCep"
            onChange={ ({ target }) => setInfo({ ...info, cep: target.value }) }
          />
          <InputForm
            classNameInput="input-cadastro"
            label="Bairro:"
            type="text"
            classNameLabel="label-cadastro"
            placeholder="Centro"
            id="inputCadastroBairro"
            onChange={ ({ target }) => setInfo({ ...info, bairro: target.value }) }
          />
        </div>
      </div>
      <div>
        <InputForm
          classNameInput="input-cadastro"
          label="Rua:"
          type="text"
          classNameLabel="label-cadastro"
          placeholder="Rúbia Sampaio"
          onChange={ ({ target }) => setInfo({ ...info, rua: target.value }) }
        />
        <InputForm
          classNameInput="input-cadastro"
          label="Número:"
          type="text"
          classNameLabel="label-cadastro"
          placeholder="1234"
          id="inputCadastroNumero"
          onChange={ ({ target }) => setInfo({ ...info, numero: target.value }) }
        />
      </div>
      <div>
        <div id="ap-bloco">
          <InputForm
            classNameInput="input-cadastro"
            label="Mora em ap ?"
            type="text"
            classNameLabel="label-cadastro"
            placeholder="ap | 1002"
            id="inputCadastroAp"
            onChange={ ({ target }) => setInfo({ ...info, ap: target.value }) }
          />
          <InputForm
            classNameInput="input-cadastro"
            type="text"
            classNameLabel="label-cadastro"
            placeholder="bloco"
            id="inputCadastroBloco"
            onChange={ ({ target }) => setInfo({ ...info, bloco: target.value }) }
          />
        </div>
        <InputForm
          classNameInput="input-cadastro"
          label="Celular:"
          type="text"
          classNameLabel="label-cadastro"
          placeholder="(85)99990-0023"
          onChange={ ({ target }) => setInfo({ ...info, celular: target.value }) }
        />
      </div>
      <div className="contain-submit-cadastro">
        <button
          type="button"
          onClick={ () => push('/cardapio') }
          className="submit-Cadastro"
        >
          <span>
            Eu estou com fome!
          </span>
        </button>
      </div>
    </div>
  );
}

export default Cadastro;
