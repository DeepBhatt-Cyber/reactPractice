import React from 'react';
import { useState } from 'react';

const {Provider, Consumer} = React.createContext();

function ThemeContextProvider (props) {
    const [theme , setTheme] = useState('light');
    let time = new Date().toLocaleTimeString();
    const [currentTime, setCurrentTime] = useState(time);
  
    const updateTime = () => {
      let time = new Date().toLocaleTimeString();
      setCurrentTime(time);
    }
  
    setInterval(updateTime, 1000);
    
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    return <Provider value={{theme, toggleTheme, currentTime}}>
        {props.children}
    </Provider>;
}

export {ThemeContextProvider , Consumer as ThemeContextConsumer};