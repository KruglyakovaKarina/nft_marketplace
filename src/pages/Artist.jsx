import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Top from '../components/artist/Top';
import Bottom from '../components/artist/Bottom';

const Artist = () => {
  return (
    <div>
      <Navbar />
      <Top />
      <Bottom />
      <Footer />
    </div>
  );
};

export default Artist;
