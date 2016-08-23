import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux'

function reducerOne(state=[],action){
    return state
}

function reducerTwo(state=[],action){
    return state
}
var reducers = combineReducers({
    reducerOne,
    reducerTwo,
    routing
});

export default reducers;