import React from 'react';
import ReactDOM from 'react-dom';

function PortalPopup() {
    return ReactDOM.createPortal(
        <h1> Display out of root</h1>, 
        document.getElementById("portal-root")
    )
}

export default PortalPopup
