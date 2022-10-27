import React from 'react';
import "@fontsource/mulish";
import "@fontsource/inter";
import './styles/global.css';

import FirstSection from './sections/FirstSection';
import SecondSection from './sections/SecondSection';
import ThirdSection from './sections/ThirdSection';
import FourthSection from './sections/FourthSection';
import FifthSection from './sections/FifthSection';
import SixthSection from './sections/SixthSection';
import CaseStudiesSection from './sections/CaseStudiesSection';
import SeventhSection from 'sections/SeventhSection';
import Footer from 'sections/Footer';

function App() {
  return (
    <div className="App">
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <CaseStudiesSection />
      <SeventhSection />
      <Footer />
    </div>
  );
}

export default App;
