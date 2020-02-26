import React from 'react';

const SubTodo = (props) => {
    console.log(props)
    return (
        <li
            style={{
                textDecoration: props.subtodo.complete ? "line-through" : ""
            }}
        >
            <input
                className='form-checkbox'
                type="checkbox"
                onClick={props.childComplete} />
            {props.subtodo.text}
        </li>
    )
}

export default SubTodo;