import { useLocation, useNavigate } from "react-router-dom";
import "../Styles/results.css";

export default function ResultsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { recommendations } = location.state || {};

  // Handle case where user navigates directly to results page
  if (!recommendations) {
    return (
      <div className="results-container">
        <button onClick={() => navigate("/")} className="back-button">
          ← Back to Home
        </button>
        <div className="empty-state">
          <div className="empty-state-icon">🎵</div>
          <h2 className="empty-state-title">No Mood Selected</h2>
          <p className="empty-state-text">
            Head back to the homepage to discover music for your mood!
          </p>
        </div>
      </div>
    );
  }

  // Parse the recommendations based on your backend response structure
  // Adjust this based on what your backend actually returns
  const songs = recommendations.songs || recommendations.recommendations || [];
  const userMood = recommendations.mood || recommendations.usermood || "your mood";

  return (
    <div className="results-container">
      <button onClick={() => navigate("/")} className="back-button">
        ← Back to Home
      </button>

      <div className="results-header">
        <h1 className="results-title">
          Your <span>Perfect Playlist</span>
        </h1>
        <p className="mood-display">
          Mood: <span>{userMood}</span>
        </p>
      </div>

      {songs.length > 0 ? (
        <div className="songs-grid">
          {songs.map((song, index) => (
            <div key={index} className="song-card">
              <span className="song-number">{index + 1}</span>
              <div className="song-info">
                <h3 className="song-title">{song.title || song.name || "Unknown Title"}</h3>
                <p className="song-artist">{song.artist || "Unknown Artist"}</p>
                {song.reason && <p className="song-reason">"{song.reason}"</p>}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <div className="empty-state-icon">🔍</div>
          <h2 className="empty-state-title">No Songs Found</h2>
          <p className="empty-state-text">
            We couldn't find any songs for this mood. Try a different one!
          </p>
        </div>
      )}
    </div>
  );
}