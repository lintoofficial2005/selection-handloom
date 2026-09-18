import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { HeritageIntro } from '../components/home/HeritageIntro';
import { CategoryBento } from '../components/home/CategoryBento';
import { FeaturedGrid } from '../components/home/FeaturedGrid';
import { TextileExperience } from '../components/home/TextileExperience';
import { CurtainSpotlight } from '../components/home/CurtainSpotlight';
import { BlindsShowcase } from '../components/home/BlindsShowcase';
import { HomeLinenShowcase } from '../components/home/HomeLinenShowcase';
import { SuitsFabricsShowcase } from '../components/home/SuitsFabricsShowcase';
import { HeritageTimeline } from '../components/home/HeritageTimeline';
import { WhySelection } from '../components/home/WhySelection';
import { StoreExperience } from '../components/home/StoreExperience';
import { VisualJournal } from '../components/home/VisualJournal';
import { Newsletter } from '../components/home/Newsletter';

export const HomePage = ({ onNavigate }) => {
  return (
    <div className="animate-in fade-in duration-500">
      {/* SECTION 1: HERO */}
      <HeroSection onNavigate={onNavigate} />

      {/* SECTION 2: HERITAGE INTRO */}
      <HeritageIntro onNavigate={onNavigate} />

      {/* SECTION 3: SHOP BY CATEGORY */}
      <CategoryBento onNavigate={onNavigate} />

      {/* SECTION 4: FEATURED MASTERPIECES */}
      <FeaturedGrid onNavigate={onNavigate} />

      {/* SECTION 5: TEXTILE EXPERIENCE */}
      <TextileExperience />

      {/* SECTION 6: CURTAIN SPOTLIGHT */}
      <CurtainSpotlight onNavigate={onNavigate} />

      {/* SECTION 7: BLINDS SHOWCASE */}
      <BlindsShowcase onNavigate={onNavigate} />

      {/* SECTION 8: HOME LINEN */}
      <HomeLinenShowcase onNavigate={onNavigate} />

      {/* SECTION 9: SUITS & FABRICS */}
      <SuitsFabricsShowcase onNavigate={onNavigate} />

      {/* SECTION 10: 75-YEAR HERITAGE TIMELINE */}
      <HeritageTimeline onNavigate={onNavigate} />

      {/* SECTION 11: WHY SELECTION HANDLOOM */}
      <WhySelection />

      {/* SECTION 12: MEERUT STORE EXPERIENCE */}
      <StoreExperience onNavigate={onNavigate} />

      {/* SECTION 13: VISUAL JOURNAL */}
      <VisualJournal />

      {/* SECTION 14: NEWSLETTER */}
      <Newsletter />
    </div>
  );
};
