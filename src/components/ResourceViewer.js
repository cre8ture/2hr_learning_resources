import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addToCurrent, removeFromCurrent, addToArchive, removeFromArchive, updateCurrent, updateArchive } from '../actions';
const ResourceViewer = () => {
    const current = useSelector(state => state.current);
    const archive = useSelector(state => state.archive);
    const dispatch = useDispatch();
    const [showCurrent, setShowCurrent] = useState(true); // State to track toggle
    const [isPopover, setIsPopover] = useState(false); // State to track 
    const [popoverText, setPopoverText] = useState(''); // State to track 
    const [count, setCount] = useState(0); // State to track 


    useEffect(() => {

        if(count){ //ensure it does not happen on initial
        setPopoverText("action completed!")

        setTimeout(() => {
        setPopoverText("")

        }, 3000)
    }
    setCount(count + 1)
    }, [isPopover])

    const toggleResources = () => {
        setShowCurrent(!showCurrent);
    };
    const handleDelete = (item) => {
        const actionPayload = item.link ; // Create a payload object with the link property
        if (showCurrent) {
            dispatch(removeFromCurrent(actionPayload));
        } else {
            dispatch(removeFromArchive(actionPayload));
        }
        setIsPopover(!isPopover)
    };

    const handleMove = (item) => {
        setIsPopover(true)

        const actionPayload = item.link ; // Create a payload object with the link property
        if (showCurrent) {
            dispatch(removeFromCurrent(actionPayload));
            dispatch(addToArchive(item));
        } else {
            dispatch(removeFromArchive(actionPayload));
            dispatch(addToCurrent(item));
        }
        setIsPopover(!isPopover)

    };
    

    const items = showCurrent ? current : archive; // Determine which items to display

    return (
        <div>
            <code>{popoverText}</code>
            <div className="toggle-switch-container">
                <label className="switch">
                    <input type="checkbox" checked={showCurrent} onChange={toggleResources} />
                    <span className="slider round"></span>
                </label>
                <span>{showCurrent ? 'Current Resources' : 'Archived Resources'}</span>
            </div>
            <div className="grid-container">
                {items.map((item, index) => (
                    <div key={index} className="card" onClick={() => window.open(item.link, '_blank')}>
                        <img
                            src={item.image}
                            alt={item.name}
                            style={{
                                width: '100%',     // Take full width of the card
                                height: '200px',   // Fixed height for the image
                                objectFit: 'cover' // Ensures the image covers the area without distorting aspect ratio
                            }}
                        />
                        <h3>{item.link.slice(0, 20) + '...'}</h3>
                        <p>Date Added: {item.date}</p>
                        <div className="edit-container">
                        <button className="delete-button" onClick={(e) => {
                            e.stopPropagation();
                            // Logic to handle edit
                            handleDelete(item);

                        }}>Delete</button>
                          <button className="archive-button" onClick={(e) => {
                                e.stopPropagation();
                                handleMove(item);
                            }}>
                                            {showCurrent ? 'Archive' : 'Add Back to Current'}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ResourceViewer;
