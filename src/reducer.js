export const initialState = {
    basket: [],
    user:null,
};

export const getBasketTotal = (basket) => 
basket?.reduce((amount, item) => item.price + amount, 0);

function reducer(state, action) {
    // console.log(action);
    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'ADD_TO_BASKET':
            //logic for adding item to basket
            return {
                 ...state,
                 basket:[...state.basket, action.item]
                };
            case 'REMOVE_FROM_BASKET':
            // LOGIC for Removing item from basket

            //cloned basket
            let newBasket = [...state.basket];

            //checked to see if product exists
            const index = state.basket.findIndex((basketItems) => basketItems.id ===action.id);
            if (index >= 0 ) {
                //item exists in basket, remove it... 
                newBasket.splice(index, 1);
            }
            else {
                console.warn(
                    `Cant remove product (id: ${action.id})`
                )
            }

            return { ...state, basket: newBasket };
            default: 
             return state;
    }

}

export default reducer;