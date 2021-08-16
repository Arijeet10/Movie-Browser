import {FETCH_DETAILS, FETCH_MOVIES, LOADING, SEARCH_MOVIE, UPCOM_MOVIES} from "../actions/types";

const initialState={
    text:"",
    movies:[],
    loading:false,
    detail:[]
}

function SearchReducer(state=initialState,action){
    switch(action.type){
        case SEARCH_MOVIE:
            return {
                ...state,
                text:action.payload,
                loading:false
            };
        case FETCH_MOVIES:
            return {
                ...state,
                movies:action.payload,
                loading:false
            };
        case FETCH_DETAILS:
            return {
                ...state,
                detail:action.payload,
                loading:false
            };
        case LOADING:
            return {
                ...state,
                loading:true
            }
        case UPCOM_MOVIES:
            return {
                ...state,
                movies:action.payload,
            }
        default:
            return state;
    }
}

export default SearchReducer;