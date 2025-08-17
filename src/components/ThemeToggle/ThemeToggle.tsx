import { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../../hooks/ThemeContext';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ThemeToggle() {
    const {
        theme,
        toggleTheme,
    }: any = useContext(ThemeContext);

    return (
        <button
            className="theme-toggle"
            onClick={toggleTheme}>
               {theme === 'light-theme' ? 'Light Theme' : 'Dark Theme'}
        </button>
  );
}

export default ThemeToggle;