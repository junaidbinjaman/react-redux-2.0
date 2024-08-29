import React, { useContext } from 'react';
import { ThemeContext } from './App';

const Page = () => {
    const [theme, setTheme] = useContext(ThemeContext);

    setTheme('I like the black theme from the page');
    return (
        <div>
            <h1>Hello, World</h1>
        </div>
    );
};

export default Page;