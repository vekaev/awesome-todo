import React from 'react';

const AddForm:React.FC = () => {

    return (
        <form >
            <input type="text"/>
            <select><option value="name">Name</option></select>
            <button>save</button>
        </form>
    )
}
export default AddForm