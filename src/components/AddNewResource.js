import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCurrent } from '../actions';
// import { fetchImage} from "../utils/grabSiteImage"


async function fetchImage() {
    const picsumUrl = 'https://picsum.photos/200/300'; // URL for a random image from Lorem Picsum

    try {
        let response = await fetch(picsumUrl);
        if (!response.ok) throw new Error('Failed to fetch image');

        // If successful, return the URL
        return picsumUrl; // Lorem Picsum returns a redirect to the actual image URL
    } catch (error) {
        console.error('Error fetching image:', error);

        // Return a default landscape image URL as a fallback
        return 'https://cdn.pixabay.com/photo/2018/01/30/22/50/forest-3119826_1280.jpg'; // Replace with your default image URL
    }
}





const AddNewResource = () => {
  const dispatch = useDispatch();
  const [link, setLink] = useState('');

  const handleInputChange = (e) => {
    setLink(e.target.value);
  };

  const handleAddToCurrent = async () => {
    if (link) {
      try {
        const image = await fetchImage(link); // Wait for the image URL
        console.log("I AM LINK", link)
        dispatch(addToCurrent({ 
          name: link, 
          link: link, 
          notes: 'site notes', 
          date: new Date().toISOString(), 
          image 
        }));
        setLink(''); // Clear the input field after adding
      } catch (error) {
        console.error('Error fetching image:', error);
        // Handle the error or dispatch with a default or null image
      }
    }
  };
  

  return (
    <div className="add-resource-container">
      <input
        type="url"
        value={link}
        onChange={handleInputChange}
        placeholder="Enter resource link"
        className="resource-input"
      />
      <button className="add-button" onClick={handleAddToCurrent}>➕</button>
    </div>
  );
};

export default AddNewResource;
