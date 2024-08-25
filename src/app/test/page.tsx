// src/app/about/page.tsx
"use client";

import { useState, useEffect } from 'react';

export default function AboutPage() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('Component mounted');
    }, []);

    return (
        <div>
            <h1>About Page</h1>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}
