import React from 'react';
import Wrapper from "./components/Wrapper.js";
import Header from "./components/Header.js";
import Card from "./components/Card.js";
import icecreams from "./icecreams.json";

let clicked = [];

class App extends React.Component {

    // Sets the initial state of the ice cream cards
    state = {
        message: "Click an ice cream to begin!",
        score: 0,
        icecreams,
        clicked,
    };

    checkGuess = id => {
        console.log(id);

        if (!clicked.includes(id)) {
            this.setState({message: "You guessed correctly!"});
            clicked.push(id);
            let updatedScore = this.state.score + 1;
            this.setState({score: updatedScore});
            if (clicked.length === icecreams.length) {
                this.setState({message: "You win!"});
                clicked = [];
                this.setState({score: 0});
            }
        } else {
            this.setState({message: "You guessed incorrectly!"});
            clicked = [];
            this.setState({score: 0});
        }
    }

    render() {
        return (
            <div>
            <Header 
                message={this.state.message} 
                score={this.state.score} 
            />
            <Wrapper>
                {this.state.icecreams.map(item => (
                    <Card 
                        key={item.id}
                        id={item.id}
                        image={item.image} 
                        name={item.name} 
                        selectItem={this.selectItem} 
                        score={this.state.score}
                        checkGuess={this.checkGuess}
                    />
                ))}
            </Wrapper>
            </div>
        )
    }

}

export default App;