
import "@styles/globals.css";
import Projects from '@components/Project/Projects'
 



export const metadata = {
  title: "Nguyen Pham",
  description: "Website Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap" rel="stylesheet"></link>
      </head>
      <body>
        <div className="main">      
        </div>
        <main className="app">
            
           {children}
           <Projects />
        </main>
      </body>
    </html>
  );
}

