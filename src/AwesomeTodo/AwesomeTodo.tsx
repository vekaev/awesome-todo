import React, {useState,useEffect} from 'react';
import TodoList from './TodoList';
import apiClient from './apiClient'

// type data = {
//     todo:[]
// }

const AwesomeTodo = () => {
    const [data,setData] = useState({todo:[]})


    useEffect( () => {
        apiClient.get('/todos').then(
             (res) => { setData( {...data, todo: res.data}) }
             )
    },[]);

    return (
        <>
         <h2>AwesomeTodo</h2>
         <TodoList />
        </>
    )
}
export default AwesomeTodo;