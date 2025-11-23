# Netflix GPT

A Netflix clone application integrated with GPT (AI) for smart movie recommendations. Built with React, Redux, and Firebase.

## 🚀 Features

- **Authentication**: Secure Login/Signup using Firebase Auth.
- **Browse Page**:
  - Dynamic Video Background (Main Movie).
  - Movie Lists (Now Playing, Popular, Top Rated, Upcoming).
  - Real-time data from TMDB API.
- **GPT Search**:
  - AI-powered movie recommendation system.
  - Search for movies using natural language (e.g., "Funny retro indian movies").
  - Multi-language support for the search interface.
- **Responsive Design**: Fully responsive UI built with Tailwind CSS.

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite
- **Styling**: Tailwind CSS 4
- **State Management**: Redux Toolkit
- **Backend/Auth**: Firebase
- **API**: TMDB (The Movie Database), OpenAI / Gemini (for GPT Search)

## ⚙️ Setup & Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Environment Variables:**
    Create a `.env` file in the root directory and add your API keys:
    ```env
    VITE_OPENAI_KEY=your_openai_key
    VITE_TMDB_KEY=your_tmdb_key
    VITE_FIREBASE_API_KEY=your_firebase_key
    # Add other firebase config keys as needed
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

5.  **Build for production:**
    ```bash
    npm run build
    ```

## 📝 License

This project is for learning purposes.
