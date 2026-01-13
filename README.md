# 🎵 The Right Tune

A lightweight web app that helps you discover music when your usual playlists don't hit right. Share your mood with an AI DJ, and get personalized song recommendations that match your vibe.

## ✨ Features

- **AI-Powered Recommendations**: OpenAI acts as your personal DJ, understanding your mood and suggesting the perfect tracks
- **Spotify Integration**: Seamless playback and search using Spotify Web SDK and Web API
- **Mood-Based Discovery**: Describe how you're feeling, and let AI translate that into music
- **Lightweight & Fast**: No database required - pure real-time recommendations

## 🛠️ Tech Stack

- **Frontend**: React
- **Backend**: Express.js + Node.js
- **Music Provider**: Spotify Web SDK & Web API
- **AI Engine**: OpenAI API
- **Architecture**: Stateless (no database)

## 📋 Prerequisites

Before you begin, ensure you have:

- Node.js (v14 or higher)
- npm or yarn
- A Spotify Developer account
- An OpenAI API key
- A Spotify Premium account (required for Web Playback SDK)

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/the-right-tune.git
cd the-right-tune
```

### 2. Install Dependencies

```bash
# Install server dependencies
npm install

# Install client dependencies
cd client
npm install
cd ..
```

### 3. Set Up Environment Variables

Create a `.env` file in the root directory:

```env
# Spotify API Credentials
SPOTIFY_CLIENT_ID=your_spotify_client_id
SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
SPOTIFY_REDIRECT_URI=http://localhost:3000/callback

# OpenAI API
OPENAI_API_KEY=your_openai_api_key

# Server Configuration
PORT=5000
NODE_ENV=development
```

Create a `.env` file in the `client` directory:

```env
REACT_APP_API_URL=http://localhost:5000
```

### 4. Get Your API Keys

#### Spotify API:
1. Go to [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. Create a new app
3. Copy your Client ID and Client Secret
4. Add `http://localhost:3000/callback` to your Redirect URIs

#### OpenAI API:
1. Sign up at [OpenAI Platform](https://platform.openai.com/)
2. Navigate to API Keys section
3. Create a new secret key

## 🎯 How It Works

1. **User Authentication**: Log in with your Spotify account
2. **Mood Input**: Describe your current mood or what you're looking for
3. **AI Processing**: OpenAI interprets your mood and generates music recommendations
4. **Spotify Search**: The app searches Spotify's library for matching tracks
5. **Playback**: Listen directly through the Spotify Web Player


## 🙏 Acknowledgments

- [Spotify Web API](https://developer.spotify.com/documentation/web-api/) for music data and playback
- [OpenAI](https://openai.com/) for powering the AI recommendations
- The React and Node.js communities for amazing tools and libraries

## 📫 Contact

Your Name - [https://www.linkedin.com/in/rayatchowdhury2005](https://www.linkedin.com/in/rayatchowdhury2005/)

Project Link: [https://github.com/TheDonRay/TheRightTune](https://github.com/TheDonRay/TheRightTune)

---

Made with ❤️ and 🎵
