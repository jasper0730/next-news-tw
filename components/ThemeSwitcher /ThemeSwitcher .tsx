'use client'

import { useState, useEffect } from 'react';

const ThemeSwitcher : React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    
    setIsDarkMode(savedMode === 'true');
  }, []);

  const handleToggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.body.classList.toggle('dark', newMode);
    localStorage.setItem('darkMode', newMode.toString());
  };

  return (
    <button onClick={handleToggleDarkMode}>
      Mode
    </button>
  );
};

export default ThemeSwitcher ;

