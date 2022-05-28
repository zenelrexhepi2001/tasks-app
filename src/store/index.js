import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";
import logger from "redux-logger";
import TaskReducer from '../reducer/TasksReducer';
import AddTaskReducer from '../reducer/TasksAddReducer';
import HabitsReducer from '../reducer/HabitsReducer';
import {persistStore,persistReducer} from 'redux-persist';
import AsyncStorage from "@react-native-async-storage/async-storage";

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ["dataTasks"],
  blacklist: ["navigation"]
}

const rootReducer = combineReducers({
    TaskData: persistReducer(persistConfig,TaskReducer),
    AddTasks: persistReducer(persistConfig,AddTaskReducer),
    Habits:  persistReducer(persistConfig,HabitsReducer),
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk,logger))
);

export const persistor = persistStore(store);