import React from 'react';
import './App.css';
import MainContainer from './MainContainer';

function App() {
  // PUBLIC_INTERFACE
  // App is the root component, using MainContainer layout
  return (
    <MainContainer>
      {/* Demo/placeholder: welcome message in recipes content */}
      <div style={{
        background: '#fff',
        borderRadius: 16,
        boxShadow: '0 1px 12px 0 rgba(44,44,44,0.05)',
        maxWidth: 600,
        padding: '46px 32px',
        margin: '40px auto',
        textAlign: 'center'
      }}>
        <h2 style={{
          color: 'var(--app-primary)',
          marginBottom: 18,
          fontWeight: 700,
        }}>Welcome to SimpleRecipeManager</h2>
        <div style={{color: '#666', fontSize: '1.13rem', marginBottom: 28}}>
          Start browsing or adding delicious recipes.<br />
          Use the sidebar to filter by category.
        </div>
        <button
          style={{
            background: 'var(--app-accent)',
            color: '#fff',
            fontWeight: 500,
            border: 'none',
            borderRadius: 7,
            fontSize: '1rem',
            padding: '12px 30px',
            cursor: 'pointer'
          }}
        >
          Add Your First Recipe
        </button>
      </div>
    </MainContainer>
  );
}

export default App;