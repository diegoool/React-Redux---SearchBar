import { type as findCurrentItem } from '../actions/findCurrentItem'

import items from '../../data/items'

const initialState = {}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case findCurrentItem: {
            return items.find(n => n.id === payload);
        }
        
        default:
            return state
    }
}

export default reducer;