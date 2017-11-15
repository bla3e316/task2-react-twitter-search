import React, { Component } from 'react';
import './app.css';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ''
        }
    }

    search() {
        console.log('this.state', this.state);
        // const BASE_URL = 'https://ads-api.twitter.com/2/search?';
        const BASE_URL = 'https://api.twitter.com/1.1/search/tweets.json?';
        const FETCH_URL = BASE_URL +'q=' + this.state.query +
                            '&result_type=popular&count=4';
        console.log('FETCH_URL', FETCH_URL);
    }


    render() {
        return (
            <div className="App">
                <div className="App-title">Twitter App</div>
                <FormGroup>
                    <InputGroup>
                        <FormControl
                            type="text"
                            placeholder="Search Twitter User"
                            value={this.state.query}
                            onChange={event => {this.setState({query: event.target.value})}}
                            // onKeyPress={event => console.log('event.key', event.key)}
                            onKeyPress={event => {
                                if (event.key === 'Enter') {
                                    this.search()
                                }
                            }}
                        />
                        <InputGroup.Addon onClick={() => this.search()}>
                            <Glyphicon glyph="search"/>
                        </InputGroup.Addon>
                    </InputGroup>
                </FormGroup>
                <div className="Profile">
                    <div>User Picture</div>
                    <div>User Name</div>
                </div>
                <div className="Gallery">
                    Gallary
                </div>
            </div>
        )
    }
}

export default App;