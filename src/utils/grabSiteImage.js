async function fetchImage(url) {
    try {
        let response = await fetch(url, { mode: 'no-cors' });
        if (!response.ok) throw new Error('Direct URL fetch failed');

        return url; // Return the direct URL if successful
    } catch (error) {
        console.error('Error fetching direct URL image:', error);

        // Fetch a random image from Lorem Picsum as a fallback
        const picsumUrl = `https://picsum.photos/200/300`;

        try {
            // Using the 'no-cors' mode to avoid CORS issues
            let response = await fetch(picsumUrl, { mode: 'no-cors' });
            if (!response.ok) throw new Error('Lorem Picsum API error');

            return picsumUrl; // Return the Picsum URL
        } catch (picsumError) {
            console.error('Error fetching image from Lorem Picsum:', picsumError);
            return null; // Return null or a default image URL as a fallback
        }
    }
}
