import React, { Component } from 'react';
import HeaderComponent from '../components/header'
import TimeLogComponent from '../components/time-log'

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageConfig: [
                {
                    title: 'Home',
                    icon: 'home'
                },
                {
                    title: 'Projects',
                    icon: 'text_snippet'
                },
                {
                    title: 'Settings',
                    icon: 'settings_applications'
                }
            ]
        }
    }

    render() {
        return (
            <div>
                <HeaderComponent {...this.state}>
                    <TimeLogComponent></TimeLogComponent>
                </HeaderComponent>
            </div>
        );
    }
}

export default HomePage;