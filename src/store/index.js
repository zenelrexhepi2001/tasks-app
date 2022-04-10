import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";
import logger from "redux-logger";
import TaskReducer from '../reducer/TasksReducer';
import AddTaskReducer from '../reducer/TasksAddReducer';
import HabitsReducer from '../reducer/HabitsReducer';
import ThemeReducer from '../reducer/ThemeReducer';

const rootReducer = combineReducers({
    TaskData: TaskReducer,
    AddTasks: AddTaskReducer,
    Habits: HabitsReducer,
    Theme: ThemeReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk,logger))
);
