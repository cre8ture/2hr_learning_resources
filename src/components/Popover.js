import React, { useState, useEffect } from 'react';

const PopoverComponent = (text, externalShowPopover) => {
    const [showPopover, setShowPopover] = useState(false);

    useEffect(() => {
        let timer;
        if (externalShowPopover) {
            timer = setTimeout(() => setShowPopover(false), 1000); // Hide after 1 second
        }
        return () => clearTimeout(timer); // Cleanup the timer
    }, [externalShowPopover]);


    return (
        <div>
            {showPopover && <div className="popover">This is a popover!</div>}
        </div>
    );
};

export default PopoverComponent;
