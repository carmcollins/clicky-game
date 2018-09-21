import React from "react";

const styles = {
    header: {
        padding: "20px",
        backgroundColor: "mediumaquamarine",
        borderBottom: "5px solid white"
    },
    h4: {
        color: "white",
        textAlign: "center"
    }
}

const Header = props => (
    <div style={styles.header}>
        <div className="row">
            <div className="col-sm-12 col-md-4">
                <h4 style={styles.h4}>Ben & Jerry's Memory Game</h4>
            </div>
            <div className="col-sm-12 col-md-4">
                <h4 style={styles.h4}>You guessed correctly!</h4>
            </div>
            <div className="col-sm-12 col-md-4">
                <h4 style={styles.h4}>Score: 12</h4>
            </div>
        </div>
    </div>
);

export default Header;