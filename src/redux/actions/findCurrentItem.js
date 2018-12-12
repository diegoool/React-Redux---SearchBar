//ActionCreator
// Funcion regresa una accion

export const type = 'findCurrentItem'

const findCurrentItem = id => {
    return {
        type,
        payload: id
    }
};

export default findCurrentItem;