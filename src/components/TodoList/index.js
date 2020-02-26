import React, { Component } from 'react';
import TodoForm from '../TodoForm';
import Todo from '../Todo';
import shortid from 'shortid';

class TodoList extends Component {

    state = {
        todos: [
            {
                id: shortid.generate(),
                text: "Todo 1",
                complete: false
            },
            {
                id: shortid.generate(),
                text: "Todo 2",
                complete: false
            },
            {
                id: shortid.generate(),
                text: "Todo 3",
                complete: false
            }
        ]
    };

    addTodo = todo => {
        this.setState(state => ({
            todos: [todo, ...state.todos]
        }));
        console.log("Hey", this.state)
    };

    // addChild = () => {
    //     console.log("Why do I suck")
    //     return (
    //         <div></div>
    //     )
    // }

    parentComplete = (id) => {
        console.log(id);
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        complete: !todo.complete
                    }
                } else {
                    return todo;
                }
            })
        })
    }

    render() {
        return (
            <div className="todo-header">
                <TodoForm onSubmit={this.addTodo} />
                <ul>
                    {this.state.todos.map(todo => (
                        <Todo
                        key={todo.id}
                        parentComplete={() => this.parentComplete(todo.id)}
                        todo={todo}
                        // addChild={this.addChild}
                        />
                        ))}
                </ul>
            </div>
        );
    }
}

export default TodoList;