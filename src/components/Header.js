import React from "react";

const styles = {
    header: {
        padding: "20px",
        backgroundColor: "mediumaquamarine",
        borderBottom: "5px solid white"
    },
    p: {
        color: "white",
        fontSize: "2em",
        textAlign: "center",
        fontFamily: "Chelsea Market, cursive"
    }
}

const Header = props => (
    <div style={styles.header}>
        <div className="row">
            <div className="col-sm-12 col-md-6">
                <p style={styles.p}>Ben & Jerry's Memory Game</p>
            </div>
            <div className="col-sm-12 col-md-3">
                <p style={styles.p}>{props.message}</p>
            </div>
            <div className="col-sm-12 col-md-3">
                <p style={styles.p}>Score: {props.score}</p>
            </div>
        </div>
    </div>
);

export default Header;