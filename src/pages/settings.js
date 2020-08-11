import React, { Component } from 'react';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as taskAction from '../redux/actions/task-action';

class SettingsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList: [],
            text: ''
        }
    }

    componentDidMount() {
        this.props.actions.listProducts()
    }

    handleInput = (event) => {
        this.setState({
            text: event.target.value
        });
    }

    addToDo = (event) => {
        event.preventDefault();
        const { todoList, text } = this.state;
        console.log(text)
        this.props.actions.addTask(text);
        this.setState({
            text: ''
        })
    }

    render() {
        return (
            <div>
                <h2>Settings - Page</h2>
                <form onSubmit={this.addToDo}>
                    <input type="text" placeholder="Enter ToDo.."
                        onChange={this.handleInput} value={this.state.text} />
                    <input type="submit" value="Add ToDo" />
                </form>
                <ul>
                    {this.props.prodctFromStore.length > 0 ? this.props.prodctFromStore.map((product, index) => {
                        return (
                            <li key={index}>{product.name}</li>
                        )
                    })
                        :
                        <h2>Products are loading..</h2>
                    }
                </ul>
                <ul>
                    {
                        this.props.todoListFromStore.map((todo, index) => {
                            return (
                                <li key={index}>{todo}</li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}


function mapStateToProps(state) {
    console.log(state)
    return {
        todoListFromStore: state.taskReducer.todoList,
        prodctFromStore: state.taskReducer.products
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(taskAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage);