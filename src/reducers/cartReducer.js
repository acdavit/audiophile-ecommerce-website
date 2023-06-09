const cartReducer = (state = [], action) => {
    switch(action.type){
        case 'ADD_ITEM':
            if (state.some((entry) => entry.slug === action.item.slug)){
                return state;
            };
            return [...state, action.item];
        case 'SET_QUANTITY':{
            let newState = [...state];
            if (action.index > -1 && action.index < state.length && action.quantity > 0){
                newState.splice(action.index, 1, {...state[action.index], quantity: action.quantity});
            }
            return newState;
        }
        case 'REMOVE_ITEM':{
            let newState = [...state];
            if (action.index > -1){
                newState.splice(action.index, 1);
            }
            return newState;
        }
        case 'CLEAR_CART':
            return [];
        default:
            return state;
    }
}

export default cartReducer;