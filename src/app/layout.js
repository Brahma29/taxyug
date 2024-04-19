import { Header } from "@/components/Header";
import "./globals.css";
import { Footer } from "@/components/Footer";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Taxyug - Accouting & Finance Solutions</title>
      </head>
      <body>
        <div className="main_container">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
