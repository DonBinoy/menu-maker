"use client";

import { useState, useEffect } from "react";
import Mandala from "@/components/Mandala";
import EditableText from "@/components/EditableText";
import { AllergenLegend, AllergenIconsList, AllergenType } from "@/components/AllergenIcons";
import { Plus, Printer, Trash2, Layout, BookOpen, Search, Library, X } from "lucide-react";
import { PRESET_ITEMS, PresetMenuItem } from "@/data/presetItems";

type LocationData = {
  id: string;
  name: string;
  hoursDays: string;
  hoursTime: string;
  kitchenClose: string;
  weekendDays: string;
  weekendTime: string;
  weekendKitchen: string;
  restName: string;
  addressLine1: string;
  addressLine2: string;
  phone: string;
};

type MenuItemData = {
  id: string;
  name: string;
  description_sv: string;
  description_en: string;
  price: string;
  allergens: AllergenType[];
};

type MenuPageData = {
  id: string;
  title: string;
  subtitle?: string;
  items: MenuItemData[];
};

export default function Home() {
  const [restaurantName, setRestaurantName] = useState("kontrast");
  const [subtitle, setSubtitle] = useState("NORTH INDIAN RESTAURANT & BAR");
  const [zoom, setZoom] = useState(0.8);
  const [isQuickAddOpen, setIsQuickAddOpen] = useState(false);
  const [quickAddTargetPageId, setQuickAddTargetPageId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const setMobileZoom = () => {
        if (window.innerWidth < 768) {
          // Calculate zoom to fit the 210mm page (~794px) perfectly into the screen
          const horizontalPadding = 40;
          const targetWidth = window.innerWidth - horizontalPadding;
          const fitZoom = targetWidth / 794;
          setZoom(Math.max(0.35, Math.min(0.9, fitZoom)));
        } else if (window.innerWidth < 1280) {
          setZoom(0.65);
        } else {
          setZoom(0.85);
        }
      };
      setMobileZoom();
      window.addEventListener('resize', setMobileZoom);
      return () => window.removeEventListener('resize', setMobileZoom);
    }
  }, []);
  
  const [locations, setLocations] = useState<LocationData[]>([
    {
      id: "loc1",
      name: "VÄSTRA HAMNEN",
      hoursDays: "SUNDAY - THURSDAY",
      hoursTime: "11:30 - 22:00",
      kitchenClose: "(KITCHEN CLOSES 21:30)",
      weekendDays: "FRIDAY - SATURDAY",
      weekendTime: "11:30 - 01:00",
      weekendKitchen: "(KITCHEN CLOSES 22:45)",
      restName: "RESTAURANG KONTRAST",
      addressLine1: "SUNDSPROMENADEN 7",
      addressLine2: "211 16 MALMÖ",
      phone: "040 - 677 14 03",
    },
    {
      id: "loc2",
      name: "MÖLLEVÅNGSTORGET",
      hoursDays: "SUNDAY - THURSDAY",
      hoursTime: "11:30 - 22:00",
      kitchenClose: "(KITCHEN CLOSES 21:30)",
      weekendDays: "FRIDAY - SATURDAY",
      weekendTime: "11:30 - 01:00",
      weekendKitchen: "(KITCHEN CLOSES 23:00)",
      restName: "RESTAURANG KONTRAST",
      addressLine1: "MÖLLEVÅNGSTORGET 6 B",
      addressLine2: "214 24 MALMÖ",
      phone: "040 - 30 33 13",
    }
  ]);

  const [menuPages, setMenuPages] = useState<MenuPageData[]>([
    {
      id: "page1",
      title: "Vår Meny Erbjudande",
      subtitle: "MENY ERBJUDANDE",
      items: [
        {
          id: "item1",
          name: "Lunch:",
          description_sv: "Den indiska tallriken Thali består av en tillfredsställande 'dagens lunch' vardagar (måndag till fredag) mellan 11:30 till 15:00. Tallriken har en inspirerande kombination av curryrätter tillsammans med ris, yoghurtsås, sallad, pickles samt bröd – allt till ett otroligt pris.",
          description_en: "Välj fritt bland dagens olika alternativ, varje dag. Är du dessutom en regelbunden gäst, är du sannolikt även lite extra nyfiken på vad som serveras varje dag!",
          price: "125 kr",
          allergens: []
        },
        {
          id: "item2",
          name: "À la carte:",
          description_sv: "Efter 15:00 på vardagar och under hela dagen på helgen väljer du själv din mat från vårt breda utbud.",
          description_en: "",
          price: "Varierar",
          allergens: []
        }
      ]
    },
    {
      id: "page2",
      title: "Dessert & Dryck",
      subtitle: "AVSLUTNING",
      items: [
        {
          id: "item3",
          name: "Kulfi (Indian Ice-Cream)",
          description_sv: "Långkokt mjölk med nio olika kryddor, serveras med nötter och torkad frukt.",
          description_en: "Long-cooked milk with nine different spices, served with nuts and dried fruits.",
          price: "85 kr",
          allergens: ['milk', 'nuts']
        },
        {
          id: "item4",
          name: "Gajrella",
          description_sv: "Morötter kokta i mjölk med malda nötter, serveras med vaniljglass och torkad frukt.",
          description_en: "Carrots cooked in milk with ground nuts, served with vanilla ice-cream and dried fruits.",
          price: "85 kr",
          allergens: ['milk', 'nuts']
        }
      ]
    }
  ]);

  const handlePrint = () => {
    window.print();
  };

  const addMenuPage = () => {
    setMenuPages([
      ...menuPages, 
      {
        id: `page${Date.now()}`,
        title: "Ny Rubrik",
        subtitle: "NY KATEGORI",
        items: []
      }
    ]);
  };

  const addMenuItem = (pageId: string) => {
    setMenuPages(menuPages.map(page => {
      if (page.id === pageId) {
        return {
          ...page,
          items: [
            ...page.items,
            {
              id: `item${Date.now()}`,
              name: "Ny Rätt",
              description_sv: "Beskrivning...",
              description_en: "",
              price: "0 kr",
              allergens: []
            }
          ]
        };
      }
      return page;
    }));
  };

  const addPresetItem = (pageId: string, preset: PresetMenuItem) => {
    setMenuPages(menuPages.map(page => {
      if (page.id === pageId) {
        return {
          ...page,
          items: [
            ...page.items,
            {
              id: `item${Date.now()}-${Math.random()}`,
              name: preset.name,
              description_sv: preset.description_sv,
              description_en: preset.description_en,
              price: preset.price,
              allergens: preset.allergens
            }
          ]
        };
      }
      return page;
    }));
    setIsQuickAddOpen(false);
    setSearchQuery("");
  };

  const deleteMenuItem = (pageId: string, itemId: string) => {
    setMenuPages(menuPages.map(page => {
      if (page.id === pageId) {
        return {
          ...page,
          items: page.items.filter(item => item.id !== itemId)
        };
      }
      return page;
    }));
  };

  const deleteMenuPage = (pageId: string) => {
    setMenuPages(menuPages.filter(p => p.id !== pageId));
  };

  const updateMenuItem = (pageId: string, itemId: string, field: keyof MenuItemData, value: any) => {
    setMenuPages(menuPages.map(page => {
      if (page.id === pageId) {
        return {
          ...page,
          items: page.items.map(item => {
            if (item.id === itemId) {
              return { ...item, [field]: value };
            }
            return item;
          })
        };
      }
      return page;
    }));
  };

  const updateMenuPage = (pageId: string, field: keyof MenuPageData, value: string) => {
    setMenuPages(menuPages.map(page => {
      if (page.id === pageId) {
        return { ...page, [field]: value };
      }
      return page;
    }));
  };

  const updateLocation = (locId: string, field: keyof LocationData, value: string) => {
    setLocations(locations.map(loc => {
      if (loc.id === locId) {
        return { ...loc, [field]: value };
      }
      return loc;
    }));
  };

  const toggleAllergen = (pageId: string, itemId: string, allergen: AllergenType) => {
    setMenuPages(menuPages.map(page => {
      if (page.id === pageId) {
        return {
          ...page,
          items: page.items.map(item => {
            if (item.id === itemId) {
              const hasAllergen = item.allergens.includes(allergen);
              return {
                ...item,
                allergens: hasAllergen 
                  ? item.allergens.filter(a => a !== allergen)
                  : [...item.allergens, allergen]
              };
            }
            return item;
          })
        };
      }
      return page;
    }));
  };

  return (
    <div className="min-h-screen bg-[#e8dfc7] pb-24 print-container font-lora text-[#2a2822] overflow-x-hidden">
      
      {/* Top Navbar - Professional Mobile Layout */}
      <div className="sticky top-0 z-50 bg-white border-b border-[#d8d0b7] shadow-sm no-print">
        <div className="max-w-[1600px] mx-auto">
          {/* Row 1: Brand & Status */}
          <div className="flex items-center justify-between px-4 py-2 border-b border-[#f0ece0] bg-[#fdfaf3]">
            <div className="flex items-center gap-2">
              <BookOpen className="text-[#3c3a32] w-4 h-4" />
              <h1 className="text-sm font-bold font-cormorant tracking-tight text-[#3c3a32] uppercase">Menu Booklet</h1>
              <span className="text-[8px] bg-[#2a2822] text-white px-1.5 py-0.5 rounded-full font-lora font-bold">BETA</span>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] text-[#8b8471] font-lora font-bold uppercase">
              <Layout size={12} className="text-amber-800" />
              <span>Zoom {Math.round(zoom * 100)}%</span>
            </div>
          </div>
          
          {/* Row 2: Actions - Hidden on mobile (moved to bottom) */}
          <div className="hidden sm:flex items-center gap-2 px-3 py-2 bg-white">
            <button 
              onClick={addMenuPage}
              className="flex-1 flex items-center justify-center gap-2 text-[#5c5643] bg-[#f5ead5]/40 hover:bg-[#f5ead5] px-4 py-2.5 rounded-md transition text-xs font-bold font-lora border border-[#d8d0b7] active:scale-95"
              suppressHydrationWarning
            >
              <Plus size={16} /> ADD PAGE
            </button>
            <button 
              onClick={handlePrint}
              className="flex-1 flex items-center justify-center gap-2 bg-[#2a2822] text-[#f5ead5] px-4 py-2.5 hover:bg-[#1a1814] transition shadow-md text-xs font-bold font-lora uppercase tracking-widest rounded-md active:scale-95"
              suppressHydrationWarning
            >
              <Printer size={16} /> SAVE PDF
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Action Bar - Always reachable */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-[100] bg-white/95 backdrop-blur-md border-t border-[#d8d0b7] p-4 shadow-[0_-4px_16px_rgba(0,0,0,0.1)] no-print flex gap-3">
        <button 
          onClick={addMenuPage}
          className="flex-1 flex items-center justify-center gap-2 text-[#5c5643] bg-[#f5ead5] px-4 py-3 rounded-xl transition text-xs font-bold font-lora border border-[#d8d0b7] active:scale-95"
          suppressHydrationWarning
        >
          <Plus size={18} /> ADD PAGE
        </button>
        <button 
          onClick={handlePrint}
          className="flex-1 flex items-center justify-center gap-2 bg-[#2a2822] text-[#f5ead5] px-4 py-3 transition shadow-lg text-xs font-bold font-lora uppercase tracking-widest rounded-xl active:scale-95"
          suppressHydrationWarning
        >
          <Printer size={18} /> SAVE PDF
        </button>
      </div>

      {/* Floating Hint - Less intrusive */}
      <div className="no-print flex justify-center mt-2 px-4">
        <div className="bg-[#5c5643]/10 backdrop-blur-sm border border-[#5c5643]/20 px-3 py-1 rounded-full">
          <p className="text-[#5c5643] text-[9px] sm:text-xs font-lora italic text-center">
            Tap text to edit • Hold item for allergens
          </p>
        </div>
      </div>

      {/* Main Preview Area */}
      <div className="flex justify-center py-4 sm:py-8 no-print">
        {/* Zoom Wrapper - uses CSS zoom for correct bounding box on mobile */}
        <div 
          className="transition-all duration-300 ease-out print:!zoom-1 print:!m-0"
          style={{ zoom: zoom } as React.CSSProperties}
        >
          {/* Pages Container - 1 col on small, 2 col on xl, block on print */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-16 gap-y-12 print:block print:!m-0 print:!p-0 w-fit mx-auto">
          
          {/* Cover Page */}
          <div className="w-[210mm] h-[297mm] bg-[#f5ead5] shadow-none border border-[#d8d0b7] print:!border-none relative overflow-hidden print-page flex flex-col justify-between shrink-0 p-12 mx-auto">
          
          {/* Background Watermark */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] overflow-hidden">
            <Mandala className="w-[140%] h-[140%] text-[#2a2822]" />
          </div>

          {/* Elegant Corner Brackets */}
          <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-[#5c5643] pointer-events-none opacity-60"></div>
          <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-[#5c5643] pointer-events-none opacity-60"></div>
          <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-[#5c5643] pointer-events-none opacity-60"></div>
          <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-[#5c5643] pointer-events-none opacity-60"></div>

          {/* Inner border */}
          <div className="absolute inset-10 border border-[#a59e8c] pointer-events-none opacity-30"></div>

          <div className="flex-1 flex flex-col items-center justify-center z-10 px-12">
            <EditableText 
              value={restaurantName} 
              onChange={setRestaurantName} 
              tagName="h1" 
              className="text-8xl font-cinzel text-center lowercase tracking-widest mb-2 hover:bg-[#e8dfc7] p-2 transition" 
            />
            
            <div className="flex justify-center mb-6 opacity-70">
              <svg width="160" height="15" viewBox="0 0 160 15" fill="none" className="text-[#5c5643]">
                <path d="M0 7.5 H 65 M 95 7.5 H 160" stroke="currentColor" strokeWidth="1" />
                <path d="M80 0 L85 7.5 L80 15 L75 7.5 Z" fill="currentColor" />
                <circle cx="68" cy="7.5" r="2" fill="currentColor" />
                <circle cx="92" cy="7.5" r="2" fill="currentColor" />
              </svg>
            </div>

            <EditableText 
              value={subtitle} 
              onChange={setSubtitle} 
              tagName="p" 
              className="text-sm font-lora tracking-[0.3em] text-[#5c5643] text-center mb-24 uppercase hover:bg-[#e8dfc7] p-2 transition" 
            />

            <div className="flex justify-between w-full gap-8">
              {locations.map((loc) => (
                <div key={loc.id} className="flex-1 text-center font-lora text-sm flex flex-col items-center group relative p-4 hover:bg-[#e8dfc7]/50 transition">
                  <EditableText value={loc.name} onChange={(v) => updateLocation(loc.id, 'name', v)} className="font-cormorant font-bold text-2xl mb-6 uppercase tracking-wider text-[#2a2822]" />
                  
                  <div className="mb-2 text-xs text-[#6b6452] tracking-widest uppercase">Opening Hours</div>
                  
                  <div className="flex items-center justify-center gap-2 mb-1 w-full">
                    <EditableText value={loc.hoursDays} onChange={(v) => updateLocation(loc.id, 'hoursDays', v)} className="uppercase text-xs tracking-wider" />
                    <span className="text-[#a59e8c]">|</span>
                    <EditableText value={loc.hoursTime} onChange={(v) => updateLocation(loc.id, 'hoursTime', v)} className="" />
                  </div>
                  <EditableText value={loc.kitchenClose} onChange={(v) => updateLocation(loc.id, 'kitchenClose', v)} className="text-xs mb-4 uppercase text-[#6b6452]" />
                  
                  <div className="flex items-center justify-center gap-2 mb-1 w-full">
                    <EditableText value={loc.weekendDays} onChange={(v) => updateLocation(loc.id, 'weekendDays', v)} className="uppercase text-xs tracking-wider" />
                    <span className="text-[#a59e8c]">|</span>
                    <EditableText value={loc.weekendTime} onChange={(v) => updateLocation(loc.id, 'weekendTime', v)} className="" />
                  </div>
                  <EditableText value={loc.weekendKitchen} onChange={(v) => updateLocation(loc.id, 'weekendKitchen', v)} className="text-xs mb-8 uppercase text-[#6b6452]" />

                  <EditableText value={loc.restName} onChange={(v) => updateLocation(loc.id, 'restName', v)} className="text-sm mb-1 uppercase tracking-wider font-bold font-cormorant" />
                  <EditableText value={loc.addressLine1} onChange={(v) => updateLocation(loc.id, 'addressLine1', v)} className="text-xs mb-1 uppercase tracking-wider" />
                  <EditableText value={loc.addressLine2} onChange={(v) => updateLocation(loc.id, 'addressLine2', v)} className="text-xs mb-8 uppercase tracking-wider" />

                  <EditableText value={loc.phone} onChange={(v) => updateLocation(loc.id, 'phone', v)} className="text-sm" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Menu Pages */}
        {menuPages.map((page, pageIndex) => (
          <div key={page.id} className="w-[210mm] h-[297mm] bg-[#f5ead5] shadow-none border border-[#d8d0b7] print:!border-none relative overflow-hidden print-page p-12 flex flex-col group/page shrink-0 mx-auto">
            
            {/* Background Watermark */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.02] overflow-hidden">
              <Mandala className="w-[120%] h-[120%] text-[#2a2822]" />
            </div>

            {/* Elegant Vintage Frame */}
            <div className="absolute inset-6 border border-[#c8bfa7] pointer-events-none opacity-60"></div>
            <div className="absolute top-5 left-1/2 -translate-x-1/2 bg-[#f5ead5] px-4 pointer-events-none opacity-60">
               <svg width="40" height="12" viewBox="0 0 40 12" fill="currentColor" className="text-[#a59e8c]"><path d="M20 0L24 6L20 12L16 6L20 0ZM8 6L12 9L10 12L6 8L8 6ZM32 6L28 9L30 12L34 8L32 6Z"/></svg>
            </div>
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-[#f5ead5] px-4 pointer-events-none opacity-60">
               <svg width="40" height="12" viewBox="0 0 40 12" fill="currentColor" className="text-[#a59e8c]"><path d="M20 12L24 6L20 0L16 6L20 12ZM8 6L12 3L10 0L6 4L8 6ZM32 6L28 3L30 0L34 4L32 6Z"/></svg>
            </div>

            <div className="flex-1 z-10 flex flex-col relative px-4">
              
              {/* Page Delete Button */}
              <button 
                onClick={() => deleteMenuPage(page.id)}
                className="absolute -top-12 -right-12 text-red-500 hover:bg-red-50 p-2 no-print opacity-100 sm:opacity-0 sm:group-hover/page:opacity-100 transition shadow-sm z-50 border border-red-200 rounded-full bg-white active:scale-90"
                title="Delete Page"
                suppressHydrationWarning
              >
                <Trash2 size={20} />
              </button>

              <div className="mb-6 text-left">
                <div className="border-t-[3px] border-double border-[#5c5643] w-24 mb-3 opacity-70"></div>
                
                <EditableText 
                  value={page.subtitle || "NY KATEGORI"} 
                  onChange={(v) => updateMenuPage(page.id, 'subtitle', v)} 
                  tagName="p" 
                  className="text-[10px] font-lora uppercase tracking-[0.2em] text-[#6b6452] mb-1 hover:bg-[#e8dfc7] p-1 transition inline-block" 
                />
                
                <EditableText 
                  value={page.title} 
                  onChange={(v) => updateMenuPage(page.id, 'title', v)} 
                  tagName="h2" 
                  className="text-[2.2rem] leading-none font-cormorant font-bold text-[#2a2822] hover:bg-[#e8dfc7] p-1 -ml-1 transition" 
                />
              </div>

              <div className="flex-1 flex flex-col gap-4">
                {page.items.map((item, itemIndex) => (
                  <div key={item.id} className="flex flex-col relative group hover:bg-[#e8dfc7]/60 focus-within:bg-[#e8dfc7]/60 p-2 -mx-2 transition">
                    <div className="flex items-baseline gap-3 mb-0.5">
                      <EditableText 
                        value={item.name} 
                        onChange={(v) => updateMenuItem(page.id, item.id, 'name', v)} 
                        className="text-[1.5rem] leading-none font-cormorant font-bold tracking-wide text-[#1a1814]" 
                      />
                      
                      <div className="ml-1 opacity-80 scale-90 origin-left flex items-center">
                        <AllergenIconsList allergens={item.allergens} />
                      </div>

                      <div className="flex-1"></div>

                      {/* Item Delete Button */}
                      <button 
                        onClick={() => deleteMenuItem(page.id, item.id)}
                        className="text-red-400 hover:text-red-600 ml-2 no-print opacity-100 sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-within:opacity-100 transition active:scale-90"
                        title="Delete Item"
                        suppressHydrationWarning
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                    
                    <EditableText 
                      value={item.description_sv} 
                      onChange={(v) => updateMenuItem(page.id, item.id, 'description_sv', v)} 
                      tagName="p" 
                      className="text-[14px] font-lora text-[#4a473e] leading-[1.5] mb-0.5 italic" 
                    />
                    
                    <div className="flex w-full items-end gap-2">
                      <div className="flex-1">
                        {item.description_en && (
                          <EditableText 
                            value={item.description_en} 
                            onChange={(v) => updateMenuItem(page.id, item.id, 'description_en', v)} 
                            tagName="p" 
                            className="text-[14px] font-lora text-[#4a473e] leading-[1.5] italic" 
                          />
                        )}
                      </div>
                      <EditableText 
                        value={item.price} 
                        onChange={(v) => updateMenuItem(page.id, item.id, 'price', v)} 
                        className="text-lg font-lora font-semibold tracking-wide whitespace-nowrap text-[#2a2822] mb-1" 
                      />
                    </div>

                    {/* Allergen Toggle UI - Improved for mobile/touch */}
                    <div className="no-print absolute top-full left-0 sm:left-auto sm:right-0 bg-[#fdfaf3] border border-[#d8d0b7] shadow-2xl p-4 sm:p-3 z-[60] flex flex-wrap gap-2 w-[280px] sm:w-64 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-all translate-y-2 pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto rounded-md">
                      <div className="w-full text-[10px] uppercase tracking-widest text-[#8b8471] mb-1 font-lora font-bold border-b border-[#d8d0b7] pb-1">Toggle Allergens</div>
                      {(['milk', 'nuts', 'gluten', 'fish', 'eggs', 'soya', 'crustaceans', 'celery', 'peanuts', 'sulphites', 'mustard', 'sesame'] as AllergenType[]).map(a => (
                        <button
                          key={a}
                          onClick={() => toggleAllergen(page.id, item.id, a)}
                          className={`flex-1 min-w-[80px] xs:min-w-[70px] sm:min-w-0 px-2 py-2 sm:py-1 text-[9px] sm:text-[10px] uppercase tracking-widest border transition font-lora rounded-sm flex items-center justify-center gap-1 ${item.allergens.includes(a) ? 'bg-[#2a2822] text-[#f5ead5] border-[#2a2822]' : 'bg-white text-[#5c5643] border-[#d8d0b7] hover:bg-[#e8dfc7]'}`}
                          suppressHydrationWarning
                        >
                          {item.allergens.includes(a) && <div className="w-1 h-1 rounded-full bg-amber-400" />}
                          {a}
                        </button>
                      ))}
                    </div>

                    {/* Full dotted separator between items */}
                    {itemIndex < page.items.length - 1 && (
                      <div className="w-full border-b-[1px] border-dotted border-[#b8b09d] mt-3 mb-1 opacity-60"></div>
                    )}
                  </div>
                ))}

                {/* Add Item Buttons */}
                <div className="no-print flex gap-2 mt-4">
                  <button 
                    onClick={() => addMenuItem(page.id)}
                    className="flex items-center gap-2 text-xs text-[#5c5643] hover:text-[#2a2822] hover:bg-[#e8dfc7] px-3 py-2 transition border border-dashed border-[#a59e8c] font-lora"
                    suppressHydrationWarning
                  >
                    <Plus size={14} /> Add Empty
                  </button>
                  <button 
                    onClick={() => {
                      setQuickAddTargetPageId(page.id);
                      setIsQuickAddOpen(true);
                    }}
                    className="flex items-center gap-2 text-xs bg-[#2a2822] text-[#f5ead5] hover:bg-[#1a1814] px-3 py-2 transition font-lora shadow-sm"
                    suppressHydrationWarning
                  >
                    <Library size={14} /> Quick Add from Library
                  </button>
                </div>
              </div>

              {/* Show legend conditionally */}
              {pageIndex === menuPages.length - 1 && (
                <div className="mt-auto opacity-90 border-t border-[#a59e8c] pt-4">
                  <AllergenLegend />
                </div>
              )}
            </div>
          </div>
        ))}
          </div>
        </div>
      </div>

      {/* Quick Add Library Modal - Full screen on mobile */}
      {isQuickAddOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center sm:p-6 no-print">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsQuickAddOpen(false)}></div>
          <div className="bg-[#fdfaf3] w-full h-full sm:h-auto sm:max-w-4xl sm:max-h-[85vh] sm:rounded-lg shadow-2xl overflow-hidden flex flex-col relative z-10 border-t sm:border border-[#d8d0b7]">
            {/* Modal Header */}
            <div className="p-6 border-b border-[#d8d0b7] flex justify-between items-center bg-[#2a2822] text-[#f5ead5]">
              <div className="flex items-center gap-3">
                <Library className="text-[#c8bfa7]" />
                <div>
                  <h2 className="text-xl font-bold font-cormorant tracking-wider uppercase">Menu Library</h2>
                  <p className="text-[10px] opacity-70 font-lora">Select a pre-designed dish to instantly add it to your menu</p>
                </div>
              </div>
              <button onClick={() => setIsQuickAddOpen(false)} className="hover:rotate-90 transition-transform p-1">
                <X size={24} />
              </button>
            </div>

            {/* Modal Search & Filters */}
            <div className="p-4 border-b border-[#d8d0b7] bg-white/30 flex flex-col sm:flex-row gap-4 items-center">
              <div className="relative flex-1 w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  type="text"
                  placeholder="Search library (e.g. Butter Chicken, Biryani...)"
                  className="w-full pl-10 pr-4 py-2 bg-white border border-[#d8d0b7] rounded focus:outline-none focus:ring-1 focus:ring-[#2a2822] font-lora"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0 w-full sm:w-auto">
                {Array.from(new Set(PRESET_ITEMS.map(i => i.category))).map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(selectedCategory === cat ? null : cat)}
                    className={`whitespace-nowrap px-3 py-1 rounded-full text-[10px] font-lora uppercase tracking-widest border transition ${selectedCategory === cat ? 'bg-[#2a2822] text-[#f5ead5] border-[#2a2822]' : 'bg-white border-[#d8d0b7] text-[#5c5643] hover:bg-[#e8dfc7]'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Modal Content */}
            <div className="flex-1 overflow-y-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#e8dfc7]/20">
              {PRESET_ITEMS
                .filter(item => {
                  const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                      item.description_sv.toLowerCase().includes(searchQuery.toLowerCase());
                  const matchesCategory = !selectedCategory || item.category === selectedCategory;
                  return matchesSearch && matchesCategory;
                })
                .map((item, idx) => (
                  <button 
                    key={idx}
                    onClick={() => quickAddTargetPageId && addPresetItem(quickAddTargetPageId, item)}
                    className="flex flex-col text-left bg-white p-4 rounded border border-[#d8d0b7] hover:border-[#2a2822] hover:shadow-md transition group"
                  >
                    <div className="flex justify-between items-baseline mb-1">
                      <span className="font-cormorant font-bold text-lg text-[#2a2822] group-hover:text-amber-800 transition-colors">{item.name}</span>
                      <span className="font-lora text-sm font-semibold text-[#5c5643]">{item.price}</span>
                    </div>
                    <p className="text-xs font-lora text-gray-500 line-clamp-2 mb-2 italic">{item.description_sv}</p>
                    <div className="flex justify-between items-center mt-auto pt-2 border-t border-gray-100">
                      <span className="text-[9px] uppercase tracking-widest text-gray-400">{item.category}</span>
                      <div className="flex gap-1">
                        <AllergenIconsList allergens={item.allergens} />
                      </div>
                    </div>
                  </button>
                ))
              }
              {PRESET_ITEMS.filter(item => {
                const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                    item.description_sv.toLowerCase().includes(searchQuery.toLowerCase());
                const matchesCategory = !selectedCategory || item.category === selectedCategory;
                return matchesSearch && matchesCategory;
              }).length === 0 && (
                <div className="col-span-full py-12 text-center">
                  <Search size={48} className="mx-auto mb-4 text-gray-300 opacity-50" />
                  <p className="text-gray-500 font-lora italic">No items found matching your search.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
