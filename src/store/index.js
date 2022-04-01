import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";
import logger from "redux-logger";
import TaskReducer from '../reducer/TasksReducer';
import AddTaskReducer from '../reducer/TasksAddReducer';

const rootReducer = combineReducers({
    TaskData: TaskReducer,
    AddTasks: AddTaskReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk,logger))
);
