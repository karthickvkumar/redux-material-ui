import React, { Component } from 'react';

class ProjectsPage extends Component {
    async firstAPI() {
        const url = "https://reqres.in/api/users?page=2";
        const response = await fetch(url);
        const data = await response.json();
        if (data) {
            const secondAPI = await this.secondAPI();
            if (secondAPI) {
                const user = {
                    "name": "morpheus",
                    "job": "leader"
                }
                const finalData = await this.finalAPI(user);
                console.log(finalData)
            }
        }
    }

    async secondAPI() {
        const url = "https://reqres.in/api/users/2";
        const response = await fetch(url);
        return await response.json();
    }

    async finalAPI(user) {
        const url = "https://reqres.in/api/users";
        const response = await fetch(url, {
            method: 'post',
            body: JSON.stringify(user)
        });
        return await response.json();
    }

    render() {
        return (
            <div>
                <h2>Project - Page</h2>
                <button onClick={() => this.firstAPI()}>API Call</button>
            </div>
        );
    }
}

export default ProjectsPage;