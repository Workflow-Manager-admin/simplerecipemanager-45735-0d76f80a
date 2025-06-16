import React from "react";
import "./MainContainer.css";

/**
 * PUBLIC_INTERFACE
 * MainContainer is the primary layout component for the SimpleRecipeManager.
 * It features a sidebar for categories and a main content area for recipes.
 * The component applies a modern, minimalistic, light theme and the app's palette.
 */
function MainContainer({ children }) {
  return (
    <div className="recipe-app-root">
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
  );
}

export default MainContainer;
