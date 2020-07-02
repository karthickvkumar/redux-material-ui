import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import HeaderComponent from '../components/header';
import TimeLogComponent from '../components/time-log';
import ProjectsPage from '../pages/projects';
import SettingsPage from '../pages/settings';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageConfig: [
                {
                    title: 'Home',
                    icon: 'home',
                    path: '/home'
                },
                {
                    title: 'Projects',
                    icon: 'text_snippet',
                    path: '/home/projects'
                },
                {
                    title: 'Settings',
                    icon: 'settings_applications',
                    path: '/home/settings'
                }
            ]
        }
    }

    render() {
        return (
            <div>
                <Router>
                    <HeaderComponent {...this.state}>
                        <Switch>
                            <Route path="/home" exact component={TimeLogComponent} />
                            <Route path="/home/projects" exact component={ProjectsPage} />
                            <Route path="/home/settings" exact component={SettingsPage} />
                        </Switch>
                    </HeaderComponent>
                </Router>
            </div>
        );
    }
}

export default HomePage;