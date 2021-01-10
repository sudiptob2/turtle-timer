import React from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

const PrivacyModal = (props) => {
    const [open, setOpen] = React.useState(false);
    const policyText = (
        <p>
            When you start the timer, a race of 20 turtles also starts at the same time. So in the beginning in your mind, you choose a turtle as your ALPHA. When the timer finishes you can test your luck whether your turtle won or not.
            <br />As you know **Slower the Turtle, Better the Turtle!**
            <br></br>
            As the velocity randomly changes, you never know who will win.
        </p>
    );
    return (
        <>
            <button className="item1" onClick={() => setOpen(true)}>
                How it works
            </button>
            <Modal open={open} onClose={() => setOpen(false)} center>
                <h2>How it works</h2>
                {policyText}
            </Modal>
        </>
    );
};

export default PrivacyModal;
