import React, { createContext, useState, useContext, useEffect } from "react";
import "./MainContainer.css";

/**
 * ThemeContext provides theme ('light' or 'dark') and its setter to components.
 */
const ThemeContext = createContext();

/**
 * PUBLIC_INTERFACE
 * MainContainer is the primary layout component for the SimpleRecipeManager, supporting light/dark theme.
 * Provides theme context, a toggle switch, and reacts to theme changes via class and CSS vars.
 */
function MainContainer({ children }) {
  const [theme, setTheme] = useState(() => {
    // Load theme from localStorage, fallback to light
    return localStorage.getItem("srm_theme") === "dark" ? "dark" : "light";
  });

  useEffect(() => {
    localStorage.setItem("srm_theme", theme);
    // Set class on body for global background
    document.body.classList.remove("theme-light", "theme-dark");
    document.body.classList.add(`theme-${theme}`);
  }, [theme]);

  const toggleTheme = () => setTheme(t => (t === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`recipe-app-root theme-${theme}`}>
        <aside className="recipe-sidebar">
          <div className="sidebar-header">
            <span role="img" aria-label="Book" className="sidebar-icon">📖</span>
            <span className="sidebar-title">Categories</span>
          </div>
          <nav className="sidebar-categories">
            {/* Placeholder category list */}
            <ul>
              <li className="active">All Recipes</li>
              <li>Breakfast</li>
              <li>Lunch</li>
              <li>Dinner</li>
              <li>Dessert</li>
            </ul>
          </nav>
          <div className="sidebar-footer">
            <button className="sidebar-add-btn">+ Add Category</button>
          </div>
        </aside>
        <main className="recipe-main-content">
          <header className="main-header">
            <span className="main-app-title">SimpleRecipeManager</span>
            <div className="header-actions">
              <button className="add-recipe-btn">+ Add Recipe</button>
              <ThemeToggle />
              {/* Placeholder for User profile or auth */}
              <div className="user-auth-btn">Sign In</div>
            </div>
          </header>
          <section className="recipes-content">
            {/* Render children (recipe list, details, etc) */}
            {children}
          </section>
        </main>
      </div>
    </ThemeContext.Provider>
  );
}

/**
 * ThemeToggle provides a simple toggle button for switching between light/dark theme.
 */
// PUBLIC_INTERFACE
function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  // Simple icon + accessible switch
  return (
    <button
      className="theme-toggle-btn"
      title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      onClick={toggleTheme}
    >
      {theme === "light" ? "🌙" : "☀️"}
      <span style={{
        marginLeft: 8,
        fontSize: "0.98em",
        color: "var(--text-secondary)"
      }}>
        {theme === "light" ? "Dark" : "Light"} Mode
      </span>
    </button>
  );
}

export default MainContainer;
