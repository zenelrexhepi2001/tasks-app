import Category from "../models/category";

export const GET_CREATE_NEW_LIST_SUCCESS = "GET_CREATE_NEW_LIST_SUCCESS";
export const GET_FETCH_LIST_FROM_SERVER_SUCCESS = 'GET_FETCH_LIST_FROM_SERVER_SUCCESS';

export const newList = (title) => {
  return async dispatch => {
      try {
      const response = await fetch('https://tasks-app-103b0-default-rtdb.firebaseio.com/list.json',{
          method: 'POST',
          headers: {
              'Content-type': 'application/json',
          },
          body: JSON.stringify({
              title: title,
          })
      });
      
      if(!response.ok) {
          throw new Error('Error save task please contact developer');
      }

      const resData = await response.json();
      console.log(resData);
        dispatch({type: GET_CREATE_NEW_LIST_SUCCESS,listData: {title: title}});
    }catch (err) {
        alert(err);
    }
  }
};

export const fetchList = () => {
    return async dispatch => {
        try {
        const response = await fetch('https://tasks-app-103b0-default-rtdb.firebaseio.com/list.json');

        const resData = await response.json();
        const data = [];

          for(let key in resData) {
              data.push(
                  new Category(
                      key,
                      resData[key].title,
                  )
              )
          }

          if(!response.ok) {
            setTimeout(() => {
                throw Error('Error fetch data from server.');
            },1000);  
          }

          dispatch({type: GET_FETCH_LIST_FROM_SERVER_SUCCESS,lists: data})

        }catch (err) {
            alert(err);
        }
    }
}