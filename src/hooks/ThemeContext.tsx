import { createContext, useContext, useState, useEffect } from 'react';

export const ThemeContext: any = createContext(null);

export const ThemeProvider = ({ children }: any) => {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

    useEffect(() => {
        document.body.className = theme; // Apply the theme class to the body
        localStorage.setItem('theme', theme); // Persist theme in localStorage
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'dark-theme' ? 'light-theme' : 'dark-theme'));
    };

    return (
        <ThemeContext.Provider
            value={{
              theme,
              toggleTheme,
             }}
        >
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
      throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
  };