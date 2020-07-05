import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import * as addTask from '../redux/actions/task-action';

class SettingsPage extends Component {
    render() {
        return (
            <div>
                <h2>Settings - Page</h2>
                {
                    this.props.tasks.map((task, index) => {
                        return (
                            <div key={index}>
                                <span>{task.name}</span>
                                <span>{task.description}</span>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        tasks: state.taskReducer.tasks
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(addTask, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage);