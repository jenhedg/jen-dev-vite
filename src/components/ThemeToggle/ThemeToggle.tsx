import { useContext, } from 'react';
import { ThemeContext } from '../../hooks/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun} from '@fortawesome/free-solid-svg-icons';

function ThemeToggle() {
    const {
        theme,
        toggleTheme,
    }: any = useContext(ThemeContext);

    return (
        <button
            className="theme-toggle"
            onClick={toggleTheme}>
                <div className="icon">
                    <FontAwesomeIcon icon={theme === 'light-theme' ? faSun : faMoon} />
                </div>
                <div className="text">
                    {theme === 'light-theme' ? 'Light Theme' : 'Dark Theme'}
                </div>
        </button>
  );
}

export default ThemeToggle;