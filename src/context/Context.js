import React from 'react';
import { getTodos } from '../api/api';

let ContextType;
// const Context = React.createContext(null);
const { Provider, Consumer } = (ContextType = React.createContext());

class Context extends React.PureComponent {

    state = {
        totalCart: 0,
        todos: [],
        selectedTodos: []
    }

    componentDidMount() {
        this.populateTodos()
    }

    populateTodos() {
        getTodos().then((response) => {
            this.setState({
                todos: response.data
            })
        }).catch(error => {
            this.setState({
                todos: []
            })
        })
    }

    clearAll = () => {
        this.setState({
            totalCart: 0,
            todos: [],
            selectedTodos: []
        }, () => {
            this.populateTodos()
        })
    }

    setSelectedTodos = () => {
        let todos = this.state.todos;
        let selectedTodos = todos.filter(item => {
            if (typeof item.qty !== 'undefined') {
                return item.qty != 0;
            }
        })
        this.setState({
            selectedTodos: selectedTodos
        })
    }

    increaseNumber = (index) => {
        // make assign todos state to local array
        let todos = this.state.todos;
        
        // logic for increasing number
        let val;
        if (!todos[index].qty) {
            val = 1;
        } else {
            val = ++todos[index].qty;
        }

        todos[index] = {...todos[index], qty: val}

        // assign new todos to todos state
        this.setState({
            todos: todos
        })

        // change totalCart value
        this.setState(({ totalCart }) => {
            return {
                totalCart: ++totalCart
            };
        }, () => console.log(this.state.totalCart));
    }

    decreaseNumber = (index) => {
        // make assign todos state to local array
        let todos = this.state.todos;

        // logic for increasing number
        let val;
        if (!todos[index].qty) {
            val = -1;
        } else {
            val = --todos[index].qty;
        }

        todos[index] = {...todos[index], qty: val}

        // assign new todos to todos state
        this.setState({
            todos: todos
        })

        // change totalCart value
        this.setState(({ totalCart }) => {
            return {
                totalCart: --totalCart
            };
        }, () => console.log(this.state.totalCart));
    }

    render() {
        return(
            <Provider
                value={{
                    ...this.state,
                    increaseNumber: this.increaseNumber,
                    decreaseNumber: this.decreaseNumber,
                    setSelectedTodos: this.setSelectedTodos,
                    clearAll: this.clearAll
                }}>
                {this.props.children}
            </Provider>
        )
    }

}

// export default Context;
export { Context, Consumer, ContextType };