import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { CategoryBento } from '../components/home/CategoryBento';
import { NewArrivals } from '../components/home/NewArrivals';
import { CurtainSpotlight } from '../components/home/CurtainSpotlight';
import { HomeLinenShowcase } from '../components/home/HomeLinenShowcase';
import { TextileExperience } from '../components/home/TextileExperience';
import { SuitsFabricsShowcase } from '../components/home/SuitsFabricsShowcase';
import { HeritageIntro } from '../components/home/HeritageIntro';
import { HeritageTimeline } from '../components/home/HeritageTimeline';
import { StoreExperience } from '../components/home/StoreExperience';
import { WhySelection } from '../components/home/WhySelection';
import { VisualJournal } from '../components/home/VisualJournal';
import { Newsletter } from '../components/home/Newsletter';

export const HomePage = ({ onNavigate }) => {
  return (
    <div className="animate-in fade-in duration-500">
      {/* 1. HERO */}
      <HeroSection onNavigate={onNavigate} />

      {/* 2. SHOP BY CATEGORY ("Explore Our Collections") */}
      <CategoryBento onNavigate={onNavigate} />

      {/* 3. NEW ARRIVALS */}
      <NewArrivals onNavigate={onNavigate} />

      {/* 4. HOME FURNISHINGS: CURTAINS (Stitched vs Unstitched) */}
      <CurtainSpotlight onNavigate={onNavigate} />

      {/* 5. HOME FURNISHINGS: HEIRLOOM BEDDING & SOFT FURNISHINGS */}
      <HomeLinenShowcase onNavigate={onNavigate} />

      {/* 6. COLOURFUL TEXTILE / BRAND STORY */}
      <TextileExperience />

      {/* 7. LADIES' SUITS (UNSTITCHED SILKS & FABRICS) */}
      <SuitsFabricsShowcase onNavigate={onNavigate} />

      {/* 8. HERITAGE INTRO & 75-YEAR TIMELINE */}
      <HeritageIntro onNavigate={onNavigate} />
      <HeritageTimeline onNavigate={onNavigate} />

      {/* 9. WHY SELECTION HANDLOOM */}
      <WhySelection />

      {/* 10. PHYSICAL STORE EXPERIENCE */}
      <StoreExperience onNavigate={onNavigate} />

      {/* 11. VISUAL JOURNAL */}
      <VisualJournal />

      {/* 12. NEWSLETTER */}
      <Newsletter />
    </div>
  );
};
