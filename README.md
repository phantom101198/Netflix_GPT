# Netflix GPT

A feature-rich Netflix clone application integrated with GPT (AI) for smart movie recommendations. Built with React, Redux Toolkit, Firebase, and Tailwind CSS.

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
    git clone https://github.com/phantom101198/Netflix_GPT.git
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
    VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
    VITE_FIREBASE_PROJECT_ID=your_project_id
    VITE_FIREBASE_STORAGE_BUCKET=your_project_id.firebasestorage.app
    VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
    VITE_FIREBASE_APP_ID=your_app_id
    VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
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

Happy Coding
