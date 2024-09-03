"use client"; // Mark this file as a client component

import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import foodStore from '../../../store/food';
import { Provider } from 'react-redux';


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body>
                <Provider store={foodStore}>
                    {children}
                </Provider>
            </body>
        </html>
    );
}
