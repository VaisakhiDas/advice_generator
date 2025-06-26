import React from 'react';

class App extends React.Component {
    state = { prompt: '' };

    render() {
        return (
            <div>
                <h1>Welcome to My React App</h1>
                <p>This is a simple React application.</p>
            </div>
        );
    }
}

export default App;