import React from 'react';
import axios from 'axios';
import './App.css'; 

class App extends React.Component {
    state = { advice: '', isLoading: false };

    componentDidMount() {
        this.fetchAdvice();
    }

    playSound = () => {
        const audio = new Audio('/sounds/click.wav'); // path from public
        audio.play();
    };    

    fetchAdvice = async () => {
        this.playSound();
        this.setState({ isLoading: true });
        try {
            const response = await axios.get('https://api.adviceslip.com/advice');
            const advice = response.data.slip.advice;
            this.setState({ advice, isLoading: false });
        } catch (error) {
            console.log('Error fetching advice:', error);
            this.setState({ isLoading: false });
        }
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
        const { advice, isLoading } = this.state;
        return (
            <div className='app'>
                <div className='card'>
                <h1 className={`heading ${advice ? 'fade-in' : ''}`}>{isLoading ? 'Manifesting wisdom...' : advice}</h1>
                    <button className='button' onClick={this.fetchAdvice}>
                        <span>Roll the wisdom dice</span>
                    </button>
                </div>
            </div>
        );
    }
}

export default App;