import React from "react";

const WikiPage = () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                height: "100vh",
            }}
        >
            {/* Header */}
            <div className="site-container">
                <header
                    style={{
                        backgroundColor: "#f4f4f4",
                        padding: "10px",
                        textAlign: "center",
                    }}
                >
                    <h1>Wiki Page</h1>
                </header>
            </div>

            <div
                className="site-container site-stack"
                style={{ display: "flex", flex: 1 }}
            >
                {/* Sidebar */}
                <aside
                    style={{
                        width: "250px",
                        backgroundColor: "#ddd",
                        padding: "10px",
                    }}
                >
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Topics</li>
                        <li>Contact</li>
                    </ul>
                </aside>

                {/* Body */}
                <main style={{ flex: 1, padding: "10px" }}>
                    <h2>Welcome to the Wiki</h2>
                    <p>This is the body content of the wiki page.</p>
                </main>
            </div>

            {/* Footer */}
            <footer
                style={{
                    backgroundColor: "#f4f4f4",
                    padding: "10px",
                    textAlign: "center",
                }}
            >
                <p>&copy; 2023 Wiki Page. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default WikiPage;
