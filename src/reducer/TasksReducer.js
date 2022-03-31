import Category from '../models/category';
import { GET_CREATE_NEW_LIST_SUCCESS, GET_FETCH_LIST_FROM_SERVER_SUCCESS, GET_FETCH_LIST_SUCCESS } from '../actions/TasksActions';
import GET_DATA from '../data/data';

const INITIAL_STATE = {
    data: GET_DATA,
    dataFilter: GET_DATA.filter((post) => post.id === '1'),
}

export default (state = INITIAL_STATE, action) => {
     switch(action.type) {
         case GET_CREATE_NEW_LIST_SUCCESS:
         const newList = new Category(new Date().toString(),
         action.listData.title,
         )
          return {
              ...state,
              data: state.data.concat(newList)
          }
        case GET_FETCH_LIST_FROM_SERVER_SUCCESS:
            return {
                ...state,
                data: action.lists,
            }
         default:
             return state
     }
}