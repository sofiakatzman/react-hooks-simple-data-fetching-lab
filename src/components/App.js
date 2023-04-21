import React, { useEffect, useState } from 'react';

function App() {
    const [dogImage, setDogImage] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const fetchDogImage = async () => {
            try {
                const response = await fetch("https://dog.ceo/api/breeds/image/random");
                const data = await response.json();
                setDogImage(data.message);
                setIsLoaded(true);
            } catch (error) {
                console.error("Error fetching dog image:", error);
            }
        };
        fetchDogImage();
    }, []);

    if (!isLoaded) {
        return <h3>Loading...</h3>;
    }

    return (
        <div> 
            <img src={dogImage} alt="A Random Dog" />
        </div>
    );
}

export default App;