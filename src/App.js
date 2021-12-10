import React, {createContext, useState} from 'react';

import Counter from "./Counter";

export const ThemeContext = createContext();


function App() {
  const [theme, setTheme] = useState('blue')
  return (
    <ThemeContext.Provider value={{ backgroundColor: theme }}>
      <Counter initialCount={0} />
      <button onClick={
        () => setTheme(prevTheme => {
          return prevTheme === 'blue' ? 'green' : 'blue';
        })
      }>Toggle theme</button>
    </ThemeContext.Provider>
  );
}

export default App;
