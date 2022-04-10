import {CHANGE_THEME} from '../actions/type';
import { DefaultTheme } from '@react-navigation/native';

const INITIAL_STATE = {

}

export default (state = {theme: DefaultTheme}, action) => {
    switch(action.type) {
        case CHANGE_THEME:
            return {...state,theme: action.payload}
            default:
                return state
    }
}