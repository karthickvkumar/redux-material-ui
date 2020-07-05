import React, { Component, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const HeaderComponent = lazy(() => import('../components/header'));
const TimeLogComponent = lazy(() => import('../components/time-log'));
const ProjectsPage = lazy(() => import('../pages/projects'));
const SettingsPage = lazy(() => import('../pages/settings'));

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
                    <Suspense fallback={<div>Loading...</div>}>
                        <HeaderComponent {...this.state}>
                            <Switch>
                                <Route path="/home" exact component={TimeLogComponent} />
                                <Route path="/home/projects" component={ProjectsPage} />
                                <Route path="/home/settings" component={SettingsPage} />
                            </Switch>
                        </HeaderComponent>
                    </Suspense>
                </Router>
            </div>
        );
    }
}

export default HomePage;