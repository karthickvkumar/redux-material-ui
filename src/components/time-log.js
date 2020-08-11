import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import 'date-fns';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import DateFnsUtils from '@date-io/date-fns';
import Button from '@material-ui/core/Button';
import { withStyles, createMuiTheme } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider, KeyboardDatePicker, KeyboardTimePicker } from '@material-ui/pickers';

import * as taskAction from '../redux/actions/task-action';

const theme = createMuiTheme();

class TimeLogComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: {
                name: '',
                description: '',
                duration: new Date(),
                date: new Date()
            },
            taskDuration: new Date()
        }
    }

    handleChange = (event) => {
        const task = { ...this.state.task, [event.target.name]: event.target.value }
        this.setState({
            task
        })
    }

    handleChangeTime = (event, value) => {
        const task = { ...this.state.task, duration: value }
        this.setState({
            task,
            taskDuration: event
        })
    }

    handleChangeDate = (event, value) => {
        const task = { ...this.state.task, date: value }
        this.setState({
            task
        })
    }

    onSave = (event) => {
        event.preventDefault();
        this.props.actions.addTask(this.state.task);
    }

    render() {
        const { classes, taskList } = this.props;
        const { task } = this.state;

        return (
            <div>
                <Grid item xs={12}>
                    <Paper elevation={3}>
                        <form className={classes.timelogWrapper} onSubmit={this.onSave}>
                            <TextField id="standard-basic" label="Name" value={task.name} className={classes.input}
                                onChange={this.handleChange} name="name" />
                            <TextField id="standard-basic" label="Description" value={task.description} className={classes.input}
                                onChange={this.handleChange} name="description" />
                            <Fragment>
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <KeyboardTimePicker
                                        margin="normal"
                                        id="time-picker"
                                        label="Time Duration"
                                        className={classes.dateTime}
                                        value={this.state.taskDuration}
                                        onChange={this.handleChangeTime}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change time',
                                        }}
                                    />
                                    <KeyboardDatePicker
                                        margin="normal"
                                        label="Date"
                                        format="MM/dd/yyyy"
                                        className={classes.dateTime}
                                        value={task.date}
                                        onChange={this.handleChangeDate}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                    />
                                </MuiPickersUtilsProvider>
                            </Fragment>
                            <Button variant="contained" type="submit" color="primary" className={classes.btn}>
                                Save
                            </Button>
                        </form>
                    </Paper>
                    <Paper elevation={3}>
                        <ul>
                            {
                                this.props.todoListFromStore.map((todo, index) => {
                                    return (
                                        <li key={index}>{todo}</li>
                                    )
                                })
                            }
                        </ul>
                    </Paper>
                </Grid>
            </div >
        );
    }
}

const styles = (theme) => ({
    timelogWrapper: {
        padding: "15px 0 15px 0",
        textAlign: "center"
    },
    input: {
        paddingRight: "15px"
    },
    dateTime: {
        top: "-16px",
        paddingRight: "15px"
    },
    btn: {
        top: "15px"
    }
});


function mapStateToProps(state) {
    return {
        todoListFromStore: state.taskReducer.todoList
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(taskAction, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles(theme))(TimeLogComponent));