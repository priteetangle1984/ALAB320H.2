import { useState } from 'react'

import './App.css'

// Main App component
function App() {
  return (
    <div>
      <Header />
      <main>
        <Article 
          date="2013-11-12"
          title="On the Street in Brooklyn"
          image="images/blog-image-1.jpg"
          content="Your content goes here..."
        />
        <Article 
          date="2013-11-11"
          title="Vintage in Vogue"
          image="images/blog-image-2.jpg"
          content="Your content goes here..."
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;