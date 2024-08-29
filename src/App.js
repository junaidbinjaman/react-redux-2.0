import logo from './logo.svg';
import './App.css';
import {createContext, useState} from 'react';
import Book from './Book';
import Page from './Page';

export const ThemeContext = createContext('light');

function App() {
    const [theme, setTheme] = useState('light');

    return (
        <div className='App'>
            <ThemeContext.Provider value={[theme, setTheme]}>
                <Book />
                <Page />
            </ThemeContext.Provider>
            <header className='App-header'>
                <img src={logo} className='App-logo' alt='logo' />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className='App-link'
                    href='https://reactjs.org'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
