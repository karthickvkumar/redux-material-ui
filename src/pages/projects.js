import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as listProducts from '../redux/actions/task-action';

class ProjectsPage extends Component {
    componentDidMount() {
        this.props.actions.listProducts().then((product) => {
            console.log(this.props.products)
        })

    }

    render() {
        return (
            <div>
                <h2>Project - Page</h2>
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log(state)
    return {
        products: state.taskReducer.products
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(listProducts, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsPage);