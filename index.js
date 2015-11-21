import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import CounterApp from './reducers/counter.reducer';
const store = createStore(CounterApp);

import Counter from './containers/counter';

const App = React.createClass({
    displayName: 'HOC',

    render() {
        return (
            <Provider store={store}>
                <Counter />
            </Provider>
        );
    }
});

render(<App />, document.getElementById('root'));
