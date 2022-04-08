import { GET_HABITS_TODO_SUCCESS } from "../actions/type";
import GET_DATA_HABITS from "../data/habits-data";

const INITIAL_STATE = {
    DataHabits: GET_DATA_HABITS,
};

export default (state = INITIAL_STATE, action) => {
      switch(action.type) {
          case GET_HABITS_TODO_SUCCESS:
              return {
                  ...state,
              }
              default:
                  return state
      }
}