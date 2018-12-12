import { type as findSuggestions } from '../actions/findSuggestions'

import items from '../../data/items'

const initialState = [];

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case findSuggestions: {
            const regex = new RegExp(`^${payload}`, 'i');

            return items.filter(n => regex.test(n.title));
        }
        
        default:
            return state
    }
}

export default reducer;