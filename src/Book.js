import React, { useContext } from 'react';
import { ThemeContext } from './App';

const Book = () => {
    const [theme] = useContext(ThemeContext);
    return (
        <div>
            {theme}
        </div>
    );
};

export default Book;