import { combineReducers } from 'redux';
import cats from "../modules/_reducers/catCounterReducers";

// Combine Reducers
const reducer = combineReducers({
    cats,
});

export default reducer;
