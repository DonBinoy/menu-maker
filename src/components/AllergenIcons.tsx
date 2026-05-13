import React from "react";
import { Wheat } from "lucide-react";

export type AllergenType = 'gluten' | 'celery' | 'fish' | 'nuts' | 'eggs' | 'peanuts' | 'lupin' | 'milk' | 'sulphites' | 'mustard' | 'soya' | 'crustaceans' | 'sesame';

// Custom SVGs matched to the requested design

const SvgIcon = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    {children}
  </svg>
);

const GlutenIcon = ({ className }: { className?: string }) => (
  <Wheat className={className} />
);

const CeleryIcon = ({ className }: { className?: string }) => (
  <SvgIcon className={className}>
    <defs>
      <mask id="celery-mask">
        <rect width="24" height="24" fill="white" />
        <g transform="translate(12 12) rotate(45) scale(0.85) translate(-12 -12)">
          <path d="M 8.5 6.5 Q 10 5.5 11 8" stroke="black" strokeWidth="2" strokeLinecap="round" fill="none" />
          <path d="M 14 7 Q 15.5 8 16 5.5" stroke="black" strokeWidth="2" strokeLinecap="round" fill="none" />
          <path d="M 14.5 11 Q 16 11 16 9" stroke="black" strokeWidth="2" strokeLinecap="round" fill="none" />
        </g>
      </mask>
    </defs>
    <g mask="url(#celery-mask)" transform="translate(12 12) rotate(45) scale(0.85) translate(-12 -12)">
      {/* Stalk */}
      <path d="M 6.5 11 L 6.5 19 C 6.5 23.5, 17.5 23.5, 17.5 19 L 17.5 11 L 13.5 11 L 13.5 18 C 13.5 20.5, 10.5 20.5, 10.5 18 L 10.5 11 Z" fill="currentColor" />
      
      {/* Cloud / Leaves */}
      <circle cx="12" cy="7" r="5" fill="currentColor" />
      <circle cx="8.5" cy="5.5" r="2.5" fill="currentColor" />
      <circle cx="15.5" cy="5.5" r="2.5" fill="currentColor" />
      <circle cx="6.5" cy="8.5" r="2.5" fill="currentColor" />
      <circle cx="17.5" cy="8.5" r="2.5" fill="currentColor" />
      <circle cx="7.5" cy="11.5" r="2" fill="currentColor" />
      <circle cx="16.5" cy="11.5" r="2" fill="currentColor" />
      <circle cx="10" cy="12.5" r="2" fill="currentColor" />
      <circle cx="14" cy="12.5" r="2" fill="currentColor" />
      <circle cx="12" cy="3.5" r="3" fill="currentColor" />
    </g>
  </SvgIcon>
);

const FishIcon = ({ className }: { className?: string }) => (
  <SvgIcon className={className}>
    <path d="M12 6C16 6 20 8 21 12C20 16 16 18 12 18C8 18 5 15 5 12C5 9 8 6 12 6Z" />
    <path d="M5 12L2 9V15L5 12Z" />
    <circle cx="16" cy="11" r="1" fill="#fff" />
    <path d="M11 6L14 3H10L11 6Z" />
    <path d="M11 18L14 21H10L11 18Z" />
  </SvgIcon>
);

const NutsIcon = ({ className }: { className?: string }) => (
  <SvgIcon className={className}>
    <g transform="translate(12 12) rotate(25) translate(-12 -12)">
      {/* Stem */}
      <path d="M12 4 Q10.5 1.5 11.5 0.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      
      {/* Cap */}
      <path d="M3.5 8.5 C 3.5 2, 20.5 2, 20.5 8.5 A 1.5 1.5 0 0 1 19.5 10 Q 12 12 4.5 10 A 1.5 1.5 0 0 1 3.5 8.5 Z" fill="currentColor"/>
      
      {/* Body */}
      <path d="M5.5 11.5 Q 12 13.5 18.5 11.5 C 18.5 18, 14.5 21, 12 21 C 9.5 21, 5.5 18, 5.5 11.5 Z" fill="currentColor"/>
      
      {/* Tip */}
      <circle cx="12" cy="21.5" r="1.2" fill="currentColor"/>
    </g>
  </SvgIcon>
);

const EggsIcon = ({ className }: { className?: string }) => (
  <SvgIcon className={className}>
    <path d="M 12 2 C 7 2 4 9 4 14 C 4 19 7 22 12 22 C 17 22 20 19 20 14 C 20 9 17 2 12 2 Z" stroke="currentColor" strokeWidth="2.5" fill="none" />
  </SvgIcon>
);

const PeanutsIcon = ({ className }: { className?: string }) => (
  <SvgIcon className={className}>
    <defs>
      <mask id="peanut-gap">
        <rect width="24" height="24" fill="white" />
        <path d="M 5 17 C 1 12 6 3 14 2 C 20 1 23 8 18 14 C 13 19 8 22 4 19 C 2.5 18 3 16.5 5 17 Z" fill="black" stroke="black" strokeWidth="2" strokeLinejoin="round" />
      </mask>
    </defs>

    {/* Bottom Peanut */}
    <g mask="url(#peanut-gap)">
      <path fillRule="evenodd" d="M 6 22 C 2 22 0 17 3 15 C 7 13 14 13 19 14 C 24 15 24 21 19 22 C 15 23 10 22 6 22 Z M 19.5 16.5 C 14.5 18.5 8.5 18.5 5.5 17 C 8.5 17.5 14.5 17.5 20.5 15.5 Z" fill="currentColor" />
    </g>

    {/* Top Peanut */}
    <path fillRule="evenodd" d="M 5 17 C 1 12 6 3 14 2 C 20 1 23 8 18 14 C 13 19 8 22 4 19 C 2.5 18 3 16.5 5 17 Z M 14.5 4.5 C 12.5 10 7.5 15 3.5 16 C 6.5 15 11.5 11 15.5 5.5 Z" fill="currentColor" />
  </SvgIcon>
);

const LupinIcon = ({ className }: { className?: string }) => (
  <SvgIcon className={className}>
    <circle cx="12" cy="12" r="2.5" fill="currentColor" />
    <circle cx="12" cy="6.5" r="2.2" fill="currentColor" />
    <circle cx="12" cy="17.5" r="2.2" fill="currentColor" />
    <circle cx="6.5" cy="12" r="2.2" fill="currentColor" />
    <circle cx="17.5" cy="12" r="2.2" fill="currentColor" />
    <circle cx="8.5" cy="8.5" r="2" fill="currentColor" />
    <circle cx="15.5" cy="15.5" r="2" fill="currentColor" />
    <circle cx="8.5" cy="15.5" r="2" fill="currentColor" />
    <circle cx="15.5" cy="8.5" r="2" fill="currentColor" />
  </SvgIcon>
);

const MilkIcon = ({ className }: { className?: string }) => (
  <SvgIcon className={className}>
    <path d="M9 2H15V4H9V2Z" />
    <path d="M8 5H16L17 8V20C17 21.1046 16.1046 22 15 22H9C7.89543 22 7 21.1046 7 20V8L8 5Z" />
  </SvgIcon>
);

const SulphitesIcon = ({ className }: { className?: string }) => (
  <SvgIcon className={className}>
    <path d="M10 2H14M10 2V7L4 20C3.5 21 4.5 22 5.5 22H18.5C19.5 22 20.5 21 20 20L14 7V2M10 2H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <path d="M5 18C7 17 9 19 12 18C15 17 17 19 19 18" stroke="currentColor" strokeWidth="2" fill="none" />
    <circle cx="10" cy="14" r="1" fill="currentColor" />
    <circle cx="14" cy="16" r="1" fill="currentColor" />
  </SvgIcon>
);

const MustardIcon = ({ className }: { className?: string }) => (
  <SvgIcon className={className}>
    <path d="M12 2L13 6H11L12 2Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <path d="M9 6H15V8H9V6Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <path d="M8 9H16L17 13V20C17 21.1 16.1 22 15 22H9C7.9 22 7 21.1 7 20V13L8 9Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <rect x="10" y="13" width="4" height="6" stroke="currentColor" strokeWidth="1.5" fill="none" />
  </SvgIcon>
);

const SoyaBeansIcon = ({ className }: { className?: string }) => (
  <SvgIcon className={className}>
    <path d="M3 18C2 15 5 10 9 6L18 3C21 2 22 5 21 8L15 17C11 21 6 22 3 18Z" stroke="currentColor" strokeWidth="2" fill="none" />
    <circle cx="8" cy="15" r="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <circle cx="12" cy="11" r="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <circle cx="16" cy="7" r="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
  </SvgIcon>
);

const CrustaceansIcon = ({ className }: { className?: string }) => (
  <SvgIcon className={className}>
    {/* Central Antenna */}
    <polygon points="11.8,4 12.2,4 12,8" fill="currentColor" />
    
    {/* Small Antennae / Head Spikes */}
    <path d="M11.5 7 L10 4 L10.5 8 Z M12.5 7 L14 4 L13.5 8 Z" fill="currentColor"/>
    
    {/* Body */}
    <path d="M10 8 Q 12 6.5 14 8 C 15.5 10 15.5 14 13.5 16 L 10.5 16 C 8.5 14 8.5 10 10 8 Z" fill="currentColor" />
    
    {/* Tail Segments */}
    <path d="M10.2 16 L 13.8 16 L 13.2 18 L 10.8 18 Z" fill="currentColor" />
    <path d="M10.8 18 L 13.2 18 L 12.5 20 L 11.5 20 Z" fill="currentColor" />
    
    {/* Fan Tail */}
    <circle cx="12" cy="21.5" r="1.8" fill="currentColor" />
    <circle cx="9.8" cy="21" r="1.5" fill="currentColor" />
    <circle cx="14.2" cy="21" r="1.5" fill="currentColor" />
    <polygon points="9.5,20 14.5,20 12,21.5" fill="currentColor" />
    
    {/* Legs */}
    <path d="M10 11 Q 5 12 4 10 M9.5 13.5 Q 4 14.5 4 12.5 M10 16 Q 5 17 4 15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    <path d="M14 11 Q 19 12 20 10 M14.5 13.5 Q 20 14.5 20 12.5 M14 16 Q 19 17 20 15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    
    {/* Arms */}
    <path d="M13 9.5 L 15 11 M11 9.5 L 9 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    
    {/* Left Claw */}
    <path d="M9 11 C 4 14 0 8 4 3 C 5 4 6 6.5 6 8 L 8.5 4 C 10 6 10 9 9 11 Z" fill="currentColor" />
    
    {/* Right Claw */}
    <path d="M15 11 C 20 14 24 8 20 3 C 19 4 18 6.5 18 8 L 15.5 4 C 14 6 14 9 15 11 Z" fill="currentColor" />
  </SvgIcon>
);

const SesameIcon = ({ className }: { className?: string }) => (
  <SvgIcon className={className}>
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <ellipse cx="9" cy="8" rx="1" ry="1.5" transform="rotate(45 9 8)" fill="currentColor" />
    <ellipse cx="14" cy="9" rx="1" ry="1.5" transform="rotate(-30 14 9)" fill="currentColor" />
    <ellipse cx="11" cy="12" rx="1" ry="1.5" transform="rotate(15 11 12)" fill="currentColor" />
    <ellipse cx="15" cy="14" rx="1" ry="1.5" transform="rotate(-60 15 14)" fill="currentColor" />
    <ellipse cx="9" cy="15" rx="1" ry="1.5" transform="rotate(75 9 15)" fill="currentColor" />
    <ellipse cx="12" cy="17" rx="1" ry="1.5" transform="rotate(-15 12 17)" fill="currentColor" />
  </SvgIcon>
);

export const AllergenLegend = () => {
  const allergens = [
    { type: 'gluten', icon: <GlutenIcon className="w-8 h-8 mb-2" />, label: 'GLUTEN' },
    { type: 'celery', icon: <CeleryIcon className="w-8 h-8 mb-2" />, label: 'CELERY' },
    { type: 'fish', icon: <FishIcon className="w-8 h-8 mb-2" />, label: 'FISH' },
    { type: 'nuts', icon: <NutsIcon className="w-8 h-8 mb-2" />, label: 'NUTS' },
    { type: 'eggs', icon: <EggsIcon className="w-8 h-8 mb-2" />, label: 'EGGS' },
    { type: 'peanuts', icon: <PeanutsIcon className="w-8 h-8 mb-2" />, label: 'PEANUTS' },
    { type: 'lupin', icon: <LupinIcon className="w-8 h-8 mb-2" />, label: 'LUPIN' },
    { type: 'milk', icon: <MilkIcon className="w-8 h-8 mb-2" />, label: 'MILK' },
    { type: 'sulphites', icon: <SulphitesIcon className="w-8 h-8 mb-2" />, label: 'SULPHITES' },
    { type: 'mustard', icon: <MustardIcon className="w-8 h-8 mb-2" />, label: 'MUSTARD' },
    { type: 'soya', icon: <SoyaBeansIcon className="w-8 h-8 mb-2" />, label: 'SOYA BEANS' },
    { type: 'crustaceans', icon: <CrustaceansIcon className="w-8 h-8 mb-2" />, label: 'CRUSTACEANS' },
    { type: 'sesame', icon: <SesameIcon className="w-8 h-8 mb-2" />, label: 'SESAME SEEDS' },
  ];

  return (
    <div className="grid grid-cols-7 gap-y-6 gap-x-2 w-full mt-4 justify-items-center">
      {allergens.map((a) => (
        <div key={a.type} className="flex flex-col items-center text-center">
          {a.icon}
          <span className="text-[7px] uppercase tracking-wider font-lora font-bold">{a.label}</span>
        </div>
      ))}
    </div>
  );
};

export const AllergenIconsList = ({ allergens }: { allergens: AllergenType[] }) => {
  const getIcon = (type: AllergenType) => {
    switch (type) {
      case 'gluten': return <GlutenIcon className="w-5 h-5 mx-0.5 text-[#1a1814]" />;
      case 'celery': return <CeleryIcon className="w-5 h-5 mx-0.5 text-[#1a1814]" />;
      case 'fish': return <FishIcon className="w-5 h-5 mx-0.5 text-[#1a1814]" />;
      case 'nuts': return <NutsIcon className="w-5 h-5 mx-0.5 text-[#1a1814]" />;
      case 'eggs': return <EggsIcon className="w-5 h-5 mx-0.5 text-[#1a1814]" />;
      case 'peanuts': return <PeanutsIcon className="w-5 h-5 mx-0.5 text-[#1a1814]" />;
      case 'lupin': return <LupinIcon className="w-5 h-5 mx-0.5 text-[#1a1814]" />;
      case 'milk': return <MilkIcon className="w-5 h-5 mx-0.5 text-[#1a1814]" />;
      case 'sulphites': return <SulphitesIcon className="w-5 h-5 mx-0.5 text-[#1a1814]" />;
      case 'mustard': return <MustardIcon className="w-5 h-5 mx-0.5 text-[#1a1814]" />;
      case 'soya': return <SoyaBeansIcon className="w-5 h-5 mx-0.5 text-[#1a1814]" />;
      case 'crustaceans': return <CrustaceansIcon className="w-5 h-5 mx-0.5 text-[#1a1814]" />;
      case 'sesame': return <SesameIcon className="w-5 h-5 mx-0.5 text-[#1a1814]" />;
      default: return null;
    }
  };

  return (
    <div className="inline-flex items-center">
      {allergens.map((a, i) => <span key={i} className="text-[#1a1814]">{getIcon(a)}</span>)}
    </div>
  );
};
