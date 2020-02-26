import React, { Component } from 'react';
import './style.css';
import shortid from 'shortid';
import SubTodo from "../SubTodo"

class Todo extends Component {

    state = {
        subtodos: [
            {
                id: shortid.generate(),
                text: "Child 1",
                complete: false,
            },
            {
                id: shortid.generate(),
                text: "Child 2",
                complete: false,
            },
            {
                id: shortid.generate(),
                text: "Child 3",
                complete: false,
            }  
        ]
    }

    childComplete = (id) => {
        console.log(id);
        this.setState({
            subtodos: this.state.subtodos.map(child => {
                if (child.id === id) {
                    return {
                        ...child,
                        complete: !child.complete
                    }
                } else {
                    return child;
                }
            })
        })
    }
    
    render() {
        // console.log(this.props);
        return (
            <li
                style={{
                    textDecoration: this.props.todo.complete ? "line-through" : ""
                }}
            >
                <input
                    className='form-checkbox'
                    type="checkbox"
                    onClick={this.props.parentComplete} />
                {this.props.todo.text}
                <button className="addChild" onClick={this.props.addChild}>+</button>
                <ul>
                {this.state.subtodos.map(subtodo => (
                        <SubTodo
                        key={subtodo.id}
                        childComplete={() => this.childComplete(subtodo.id)}
                        subtodo={subtodo}
                        />
                        ))}
                </ul>
            </li>
        )
    }
}

export default Todo;