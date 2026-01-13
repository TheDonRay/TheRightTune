import { useState } from "react"; 
import { useNavigate } from "react-router-dom";  

import "../Styles/homepage.css";

export default function Homepage() {
  const [mood, setMood] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const navigate = useNavigate(); 

  const handleMoodSubmit = async (e) => {
    e.preventDefault();
    if (mood.trim()) {
      setIsSearching(true);
      console.log("selected mood was:", mood);

      try {
        if (!mood || mood.trim() === "") {
          console.log({
            Error: "No response given",
          });
        }

        const sendtoDj = await fetch(`http://localhost:2323/api/v1/dj`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            usermood: mood,
          }),
        });
        // backend response here as such
        const backendResponse = await sendtoDj.json();
        console.log("The backend returned this:", backendResponse); 
        navigate("/results", { state: { recommendations: backendResponse } }); 
      } catch (error) {
        console.log({
          ErrorMessage: error,
        });  
        setIsSearching(false); 
      }
    }
  };

  const suggestedMoods = [
    "Happy",
    "Relaxed",
    "Energetic",
    "Melancholic",
    "Motivated",
    "Romantic",
    "Nostalgic",
    "Peaceful",
  ];

  const handleMoodClick = (selectedMood) => {
    setMood(selectedMood);
  };

  return (
    <div className="homepage-container">
      <div className="heading-title">
        <h1 className="heading">
          Welcome to <span>The Right Tune</span>
        </h1>
        <p className="subheading">Discover music that matches your mood</p>
      </div>

      <div className="mood-input-section">
        <form onSubmit={handleMoodSubmit} className="mood-form">
          <div className="input-wrapper">
            <input
              type="text"
              value={mood}
              onChange={(e) => setMood(e.target.value)}
              placeholder="What's the mood for today?"
              className="mood-input"
              disabled={isSearching}
            />
            <button
              type="submit"
              className="submit-btn"
              disabled={isSearching || !mood.trim()}
            >
              {isSearching ? (
                <span className="loading-spinner"></span>
              ) : (
                "Find My Tune"
              )}
            </button>
          </div>
        </form>

        <div className="suggested-moods">
          <p className="suggestion-label">Or try one of these:</p>
          <div className="mood-chips">
            {suggestedMoods.map((suggestedMood) => (
              <button
                key={suggestedMood}
                onClick={() => handleMoodClick(suggestedMood)}
                className="mood-chip"
                disabled={isSearching}
              >
                {suggestedMood}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="feature-section">
        <div className="feature-card">
          <div className="feature-icon">🎵</div>
          <h3>Mood-Based Discovery</h3>
          <p>Find songs that perfectly match how you're feeling</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🔥</div>
          <h3>Mainstream Hits</h3>
          <p>Curated from the most popular tracks</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">✨</div>
          <h3>Instant Results</h3>
          <p>Get songs that match your mood fast!</p>
        </div>
      </div>
    </div>
  );
}
