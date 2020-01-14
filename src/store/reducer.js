import * as actionType from './actions';

const initialState = {
    ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat:0
    },
    price: 10000
}

const INGREDIENTS_PRICE = {
    salad: 3000,
    cheese: 5000,
    meat: 10000,
    bacon: 2000
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.ADD_INGREDIENTS:
            return {
              ...state,
              ingredients: {
                  ...state.ingredients,
                  [action.ingredientName]: state.ingredients[action.ingredientName] + 1
              },
              price: state.price + INGREDIENTS_PRICE[action.ingredientName]
            };
        case actionType.REMOVE_INGREDIENTS:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] - 1
                },
                price: state.price - INGREDIENTS_PRICE[action.ingredientName]
            };
        default:
            return state;
    }
} 

export default reducer;
