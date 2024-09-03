"use client"; // Mark this file as a client component

import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import './globals.css';

const inter = Inter({subsets: ['latin']});
import {Provider} from 'react-redux';
import store from '../../store';


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={inter.className}>
                    <Provider store={store}>{children}</Provider>
            </body>
        </html>
    );
}
