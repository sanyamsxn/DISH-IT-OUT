import HeaderPage from './components/header/main-header';
import HeaderBackground from './components/header/main-header-background';
import './globals.css';

export const metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Irish+Grover&display=swap" 
          rel="stylesheet"
        />
      </head>
      <body>
        <HeaderBackground/>
        <HeaderPage/>
        {children}
      </body>
    </html>
  );
}
