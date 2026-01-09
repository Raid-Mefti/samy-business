import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LanguageProvider } from "@/contexts/LanguageContext";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "Samy Business",
    description: "Samy Business - Importation de produits sidérurgiques",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" data-theme="dark">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
                style={{
                    margin: 0,
                    padding: 0,
                    minHeight: "100vh",
                    width: "100%",
                }}
            >
                <ThemeProvider>
                    <LanguageProvider>{children}</LanguageProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
