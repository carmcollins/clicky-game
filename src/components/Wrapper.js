import React from "react";

const styles = {
    wrapper: {
        background: "cornflowerblue",
        height: "100%",
        display: "flex",
        flexFlow: "row wrap",
        padding: "50px 10%",
        justifyContent: "space-around",
        alignContent: "flex-start",
        overflow: "auto"
    }
}

const Wrapper = props => (
    <div style={styles.wrapper}>{props.children}</div>
);

export default Wrapper;