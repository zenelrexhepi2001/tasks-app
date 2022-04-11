import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";
import logger from "redux-logger";
import TaskReducer from '../reducer/TasksReducer';
import AddTaskReducer from '../reducer/TasksAddReducer';
import HabitsReducer from '../reducer/HabitsReducer';
import ThemeReducer from '../reducer/ThemeReducer';
import TaskNumReducer from '../reducer/TaskNumberReducer';

const rootReducer = combineReducers({
    TaskData: TaskReducer,
    AddTasks: AddTaskReducer,
    Habits: HabitsReducer,
    Theme: ThemeReducer,
    TaskNumber: TaskNumReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk,logger))
);
