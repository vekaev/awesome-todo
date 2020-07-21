import React, {useState,useEffect,useRef} from 'react';
import TodoList from './TodoList';
import apiClient from './apiClient'
import Modal from '../Modal'
import AddForm from './AddForm'


const AwesomeTodo = () => {
    const modalRef:any = useRef();
    const [data,setData] = useState({todo:[]});

    const openModal = () => {
         modalRef.current.open();
    }

    useEffect( () => {
        apiClient.get('/todos').then(
             (res) => { setData( {...data, todo: res.data}) }
             )
    },[]);

    return (
        <>
         <h2>AwesomeTodo</h2>
         <button onClick={ ()=>{openModal()}} >Add Task</button>
         <TodoList />
         <Modal ref={modalRef}>
             <AddForm />
             <button onClick={() => {modalRef.current.close();}}>Close</button>
         </Modal>
        </>
    )
}
export default AwesomeTodo;