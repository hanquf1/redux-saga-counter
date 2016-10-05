import React, {Component} from 'react';
import Counter from './components/Counter'

export default class App extends Component {
    render() {
        return (
            <div>
                <nav className="blue darken-2" role="navigation">
                    <div className="nav-wrapper container">
                        <a className="brand-logo">Redux Saga Cancellable Counter </a>
                    </div>
                </nav>
                <Counter/>

            </div>
        );
    }
}

