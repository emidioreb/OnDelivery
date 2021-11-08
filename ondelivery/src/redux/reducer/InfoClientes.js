import { INFO_CLIENTES } from '../actions/index';

const INITIAL_STATE = {
  InfoClientes: [],
};

const infoClientes = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case INFO_CLIENTES:
    return { InfoClientes: [...state, action.payload] };
  default:
    return state;
  }
};

export default infoClientes;
