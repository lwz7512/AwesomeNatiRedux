import React, {Component} from 'react';
import { AppRegistry } from 'react-native';
import App from './app/App';

// Add these imports - Step 1
import { Provider } from 'react-redux';
import { store } from './app/redux';

export default class Bootstrap extends Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}

AppRegistry.registerComponent('AwesomeNatiRedux', () => Bootstrap);
