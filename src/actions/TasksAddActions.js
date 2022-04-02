import { GET_ADD_TODO_SUCCESS, GET_DELETE_TODO_SUCCESS, GET_FETCH_TODO_FROM_SERVER_SUCCESS } from "./type";
import TasksCategory from '../models/TasksCategory';

export const addTodo = (title,time) => {
    return async (dispatch) => {
        try {
            const response = await fetch('https://tasks-app-103b0-default-rtdb.firebaseio.com/todo.json',{
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    title: title,
                    time:  time,
                })
            })

            if(!response.ok) {
                setTimeout(() => {
                    throw new Error('Error save task please contact developer!');
                },1000);
              
            }

            const res = await response.json();

            if(res) {
                console.log(res);
            }

              dispatch({type: GET_ADD_TODO_SUCCESS,todoData: {title: title,time: time}});

        }catch (err) {
              alert(err);
               console.log(err);
        }finally {
             console.log('');
        }
    }
}

export const fetchTodo = () => {
     return async dispatch => {
         try {
         const response = await fetch('https://tasks-app-103b0-default-rtdb.firebaseio.com/todo.json');

         const TodoData = [];
         const resData = await response.json();
          
           for(let key in resData) {
               TodoData.push(
                   new TasksCategory(
                      // '1',
                       key,
                       resData[key].title,
                       resData[key].time,
                   )
               )
           }

           if(!response.ok) {
               throw new Error('Error not fetching data from server...');
           }

           dispatch({type: GET_FETCH_TODO_FROM_SERVER_SUCCESS,todoData: TodoData})

        }catch (err) {
            alert(err);
        }
     }
}

export const deleteTask = (todo) => {
    return async (dispatch) => {
        const response = await fetch('https://tasks-app-103b0-default-rtdb.firebaseio.com/todo.json',{
            method: 'DELETE',
        });
        console.log(response);
        dispatch({type: GET_DELETE_TODO_SUCCESS,taskId: todo})
    }
}