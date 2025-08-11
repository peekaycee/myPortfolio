import type { Metadata } from "next";
import './globals.css';
import styles from './homepage.module.css'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";


export const metadata: Metadata = {
  title: "Portfolio",
  description: "This is my portfolio with a brief description of my experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {;
  return (
    <html lang="en">
      <body className={styles.container}>
        <Header />
        {children}  
        <Footer />     
      </body>
    </html>
  );
}

