import {FETCH_DETAILS, FETCH_MOVIES, LOADING, SEARCH_MOVIE, UPCOM_MOVIES} from "../actions/types";

const initialState={
    text:"",
    movies:[],
    loading:false,
    detail:[],
    search:false,
}

function SearchReducer(state=initialState,action){
    switch(action.type){
        case SEARCH_MOVIE:
            return {
                ...state,
                text:action.payload,
                loading:false,
                search:false
            };
        case FETCH_MOVIES:
            return {
                ...state,
                movies:action.payload,
                loading:false,
                search:true
            };
        case FETCH_DETAILS:
            return {
                ...state,
                detail:action.payload,
                search:false,
                loading:false
            };
        case LOADING:
            return {
                ...state,
                loading:true,
                search:false
            };
        case UPCOM_MOVIES:
            return {
                ...state,
                movies:action.payload,
                search:false
            };
        default:
            return state;
    }
}

export default SearchReducer;