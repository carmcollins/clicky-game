import React from "react";

const styles = {
    title: {
        color: "white",
        fontSize: "1.5em",
        textAlign: "center",
        width: "100%",
        paddingBottom: "30px"
    }
}

const Title = () => (
    <div style={styles.title}>
        <p>Try to click on all 12 ice creams without clicking on the same one twice!</p>
    </div>
);

export default Title;