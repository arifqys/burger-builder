import * as actionType from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    ingredients: null,
    price: 10000,
    error: false,
    building: false
}

const INGREDIENTS_PRICE = {
    salad: 3000,
    cheese: 5000,
    meat: 10000,
    bacon: 2000
}

const addIngredient = (state, action) => {
    const updatedIngredient = { [action.ingredientName]: state.ingredients[action.ingredientName] + 1 };
    const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
    const updatedState = {
        ingredients: updatedIngredients,
        price: state.price + INGREDIENTS_PRICE[action.ingredientName],
        building: true
    };
    return updateObject(state, updatedState);
}

const removeIngredient = (state, action) => {
    const updatedIngredient = { [action.ingredientName]: state.ingredients[action.ingredientName] - 1 };
    const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
    const updatedState = {
        ingredients: updatedIngredients,
        price: state.price + INGREDIENTS_PRICE[action.ingredientName],
        building: true
    };
    return updateObject(state, updatedState);
}

const setIngredients = (state, action) => {
    const updatedState = {
        ingredients: {
            salad: action.ingredients.salad,
            cheese: action.ingredients.cheese,
            meat: action.ingredients.meat,
            bacon: action.ingredients.bacon
        },
        price: 10000,
        error: false,
        building: false
    }
    return updateObject(state, updatedState);
}

const fetchIngredientsFailed = (state, action) => {
    const updatedState = { error: true }
    return updateObject(state, updatedState);
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.ADD_INGREDIENT: return addIngredient(state, action);
        case actionType.REMOVE_INGREDIENT: return removeIngredient(state, action);
        case actionType.SET_INGREDIENTS: return setIngredients(state, action);
        case actionType.FETCH_INGREDIENTS_FAILED: return fetchIngredientsFailed(state, action);
        default: return state;
    }
} 

export default reducer;
