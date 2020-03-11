import { combineReducers } from 'redux';
import todo from "../modules/todo/_reducers/catCounterReducers";

// Combine Reducers
const reducer = combineReducers({
    todo,
});

export default reducer;
