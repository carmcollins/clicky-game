import React from 'react';
import Wrapper from "./components/Wrapper.js";
import Header from "./components/Header.js";
import Card from "./components/Card.js";
import icecreams from "./icecreams.json";

const App = () => (
    <div>
        <Header />
        <Wrapper>
            <Card image={icecreams[0].image} />
            <Card image={icecreams[1].image} />
            <Card image={icecreams[2].image} />
            <Card image={icecreams[3].image} />
            <Card image={icecreams[4].image} />
            <Card image={icecreams[5].image} />
            <Card image={icecreams[6].image} />
            <Card image={icecreams[7].image} />
            <Card image={icecreams[8].image} />
            <Card image={icecreams[9].image} />
            <Card image={icecreams[10].image} />
            <Card image={icecreams[11].image} />
        </Wrapper>
    </div>
);

export default App;