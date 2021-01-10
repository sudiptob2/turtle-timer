import React from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

const PrivacyModal = (props) => {
    const [open, setOpen] = React.useState(false);
    const policyText = (
        <p>
            How It works
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
