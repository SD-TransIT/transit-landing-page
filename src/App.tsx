// import Button from 'components/Button';
// import FeaturesNavButton from 'components/FeaturesNavButton';
// import Input from 'components/Input';
import React from 'react';
import "@fontsource/mulish";
import "@fontsource/inter";
import './styles/global.css';

// import CaseStudiesTile from 'components/CaseStudiesTile';
import FirstSection from './sections/FirstSection';
import SecondSection from './sections/SecondSection';
import ThirdSection from './sections/ThirdSection';
import FourthSection from './sections/FourthSection';
import FifthSection from './sections/FifthSection';
import SixthSection from './sections/SixthSection';

function App() {
  return (
    <div className="App">
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
    </div>
  );
}

export default App;
