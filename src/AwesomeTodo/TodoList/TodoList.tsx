import React, {useState, useEffect} from 'react';
import apiClient from '../apiClient';
import useFetch from '../Hooks/useFetch'
import TodosProvider from '../Providers/TodosProvier';

interface ITodo {
    title:string
}

const TodoList:React.FC = () => {
  
    return(
        <ul>
            <TodosProvider>
                { (todos:[],isLoading:Boolean) => {
                    return (
                        <>
                          {isLoading && <h2>Loading...</h2>}
                         { todos.length > 0 && todos.map( (todo:ITodo) => {return <li>{todo.title}</li> }) }
                        </>
                    )
                }}
            </TodosProvider>
            {/* {isLoading && <h2>Loading...</h2>}
            { todos.length > 0 && todos.map( (todo:ITodo) => {return <li>{todo.title}</li> }) } */}
        </ul>
    )
}
export default TodoList