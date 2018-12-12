//ActionCreator
// Funcion regresa una accion

export const type = 'findSuggestions';

const findSuggestions = text => {
    return {
        type,
        payload: text
    }
};

export default findSuggestions;