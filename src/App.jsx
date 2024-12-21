import React from 'react';
import BeautifulReadme from './components/BeautifulReadme';
import Footer from './components/Footer';


function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <div className="flex-grow">
        <BeautifulReadme />
      </div>
      <Footer />
    </div>
  );
}

export default App;