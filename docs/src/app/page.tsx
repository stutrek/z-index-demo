'use client';
import { useState } from 'react';
import Bears from './Bears.mdx';
import './demo.css';

export default function IndexPage() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <main>
            <div className="bg-gray-200 h-screen w-screen p-4 content">
                <button onClick={() => setSidebarOpen(!sidebarOpen)}>
                    Toggle Sidebar
                </button>
                <button onClick={() => setMenuOpen(!menuOpen)}>
                    Toggle Menu
                </button>
                <div className="prose">
                    <Bears />
                </div>
            </div>
            <div
                className={`bg-green-300 w-40 h-20 menu shadow-lg p-4 ${menuOpen ? 'open' : 'closed'}`}
            >
                <h3>Menu</h3>
            </div>
            <div
                className={`bg-blue-300 h-full sidebar shadow-lg p-4 ${sidebarOpen ? 'open' : 'closed'}`}
            >
                <h2>Sidebar</h2>
                {/* <div className="curtain" /> */}
            </div>
        </main>
    );
}
