import React,{useState, useEffect} from 'react';
import apiClient from '../apiClient'

const TodosProvider:React.FC = (props:any) => {
    const [todos,setTodos] = useState([]);
    const [isLoading, setLoading] = useState(false);
    useEffect( () => {
        setLoading(true);
         apiClient.get('/todos').then( (res) => {setTodos(res.data);setLoading(false)})
    }, []);


    return props.children(todos,isLoading)

}
export default TodosProvider