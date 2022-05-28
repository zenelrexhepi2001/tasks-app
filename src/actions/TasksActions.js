import Category from "../models/category";
import { GET_CREATE_NEW_LIST_SUCCESS,GET_FETCH_LIST_FROM_SERVER_SUCCESS } from "./type";

export const newList = (title) => {
    return{type: GET_CREATE_NEW_LIST_SUCCESS,listData: {title: title,}}
};

export const fetchList = () => {
   return {type: GET_FETCH_LIST_FROM_SERVER_SUCCESS}
}