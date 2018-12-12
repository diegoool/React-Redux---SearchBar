//ActionCreator
// Funcion regresa una accion

export const type = 'findResults'

const findResults = id => {
    return {
        type,
        payload: id
    }
};

export default findResults;