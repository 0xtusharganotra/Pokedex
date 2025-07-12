# 🧠 React Pokedex App

A sleek and modern **Pokédex web application** built using **React + Vite** that fetches data from the [PokéAPI](https://pokeapi.co/). It allows users to view detailed Pokémon cards, search by name, and explore various stats like type, speed, and abilities.

## 🚀 Features

  - ⚡ Built with **React** and **Vite** for blazing-fast performance
  - 📡 Fetches live data from PokéAPI (`https://pokeapi.co/`)
  - 🔍 **Search functionality** to filter Pokémon by name
  - 📄 Displays:
      - Pokémon image
      - Name, types
      - Height, weight, speed
      - Base experience
      - Attack stat and abilities
  - 💅 Beautifully styled with a clean UI (⚠️ **not fully responsive yet**)

> ⚠️ **Note:** The app is not currently mobile responsive. If you're interested in improving responsiveness or adding enhancements, feel free to **fork this repo**, make changes, and submit a pull request. **Contributions are welcome\!** 🚀

-----

## 📸 Demo

https://pokedex-eight-silk-12.vercel.app/

![alt text](image.png)


-----

## 🧰 Tech Stack

  - **Frontend**: React, Vite
  - **Data Source**: [PokéAPI](https://pokeapi.co/)
  - **HTTP Client**: Axios
  - **Styling**: CSS

-----

## 🏗️ Project Structure

```
src/
├── assets/ # Static assets (images, gradients)
├── components/
│ ├── Pokemon.jsx # Main container, data fetch + display
│ ├── PokemonCard.jsx # Individual card UI
│ └── PokeSearch.jsx # Search bar component
├── App.jsx
└── index.css / app.css # Stylesheets
```

-----

## 📦 Installation

1.  **Clone the repository:**
    ```bash
    https://github.com/0xtusharganotra/Pokedex.git
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Run development server:**
    ```bash
    npm run dev
    ```
4.  **Open in browser:**
    ```
    http://localhost:5173
    ```

-----

## 🏁 Build for Production

1.  **Build the project:**
    ```bash
    npm run build
    ```
2.  **To preview the production build locally:**
    ```bash
    npm run preview
    ```

-----

## 💡 Todo

  - Make layout mobile responsive
  - Add pagination or infinite scroll
  - Improve error handling
  - Add type-based filters
  - Add dark mode

-----

## 🤝 Contributing

1.  Fork the repo 🍴
2.  Create a new branch: `git checkout -b feature/your-feature`
3.  Commit your changes: `git commit -m "feat: add your feature"`
4.  Push and submit a PR

-----

## 📄 License

MIT License © 2025 Tushar Ganotra
