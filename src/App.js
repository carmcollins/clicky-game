import React from 'react';
import Wrapper from "./components/Wrapper.js";
import Header from "./components/Header.js";
import Title from "./components/Title.js";
import Card from "./components/Card.js";
import icecreams from "./icecreams.json";

let clicked = [];

class App extends React.Component {

    // Sets the initial state of the ice cream cards
    state = {
        message: "",
        score: 0,
        icecreams,
        clicked
    };

    // Shuffles the ice cream photos on page load
    componentDidMount() {
        this.setState({icecreams: this.shuffle(this.state.icecreams)});
    };

    // Checks to see if the user's guess is correct or incorrect
    checkGuess = id => {
        if (!clicked.includes(id)) {
            this.setState({message: "Good guess!"});
            clicked.push(id);
            let updatedScore = this.state.score + 1;
            this.setState({
                score: updatedScore, 
                icecreams: this.shuffle(this.state.icecreams)
            });
            if (clicked.length === icecreams.length) {
                this.setState({message: "You win!"});
                clicked = [];
                this.setState({
                    score: 0,
                    icecreams: this.shuffle(this.state.icecreams)
                });
            }
        } else {
            this.setState({message: "So close..."});
            clicked = [];
            this.setState({
                score: 0, 
                icecreams: this.shuffle(this.state.icecreams)
            });
        }
    };

    shuffle = icecreams => {
        for (let i = icecreams.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [icecreams[i], icecreams[j]] = [icecreams[j], icecreams[i]];
        }
        return icecreams;
    };

    render() {
        return (
            <div>
            <Header 
                message={this.state.message} 
                score={this.state.score} 
            />
            <Wrapper>
                <Title />
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
    };

};

export default App;