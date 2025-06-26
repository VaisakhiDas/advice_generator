import React from 'react';
import axios from 'axios';

class App extends React.Component {
    state = { advice: '' };

    componentDidMount() {
        this.fetchAdvice();
    }

    fetchAdvice = async () => {
        axios.get('https://api.adviceslip.com/advice')
            .then(response => {
                const advice = response.data.slip.advice;
                this.setState({ advice});
                console.log({ advice });
            })
            .catch(error => {
                console.log('Error fetching advice:', error);
            });
    }
    render() {
        const { advice } = this.state;
        return (
            <div className='app'>
                <div className='card'>
                    <h1 className='heading'>{advice}</h1>
                </div>
            </div>
        );
    }
}

export default App;