import { useState, useEffect } from "react";

function App() {
  const [dogImage, setDogImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchDogImage = () => {
    setIsLoading(true);

    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        setDogImage(data.message);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchDogImage();
  }, []);

  return (
    <div className="app">
      <h1>Random Dog Generator</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <img src={dogImage} alt="A Random Dog" />
      )}
      <div>
        <button onClick={fetchDogImage}>Get New Dog</button>
      </div>
    </div>
  );
}

export default App;