
import React from 'react';
import HomeIntro from './HomeIntro';
import AboutSection from './AboutSection';
import FeaturesSection from './FeaturesSection';
import CallToAction from './CallToAction';

function HomePage() {
  return (
    <div>
      <HomeIntro />
      <AboutSection />
      <FeaturesSection />
      {/* <CallToAction /> */}
    </div>
  );
}

export default HomePage;
