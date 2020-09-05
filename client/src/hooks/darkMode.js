import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage('dark', false)

    useEffect(()=>{
        if (darkMode) {
          document.body.classList.remove("dark-mode");
          document.querySelector(".dark-mode__toggle").classList.remove("dark-mode__toggle-on");
        } else {
          document.body.classList.add("dark-mode");
          document.querySelector(".dark-mode__toggle").classList.add("dark-mode__toggle-on");
        }
    }, [darkMode]);

    return [darkMode, setDarkMode];
}
