import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Taxyug - Accouting & Finance Solutions</title>
      </head>
      <body>
        <div className="main_container">
          {children}
        </div>
      </body>
    </html>
  );
}
