"use client";

import { useState, useEffect, Fragment } from "react";
import Mandala from "@/components/Mandala";
import EditableText from "@/components/EditableText";
import { AllergenLegend, AllergenIconsList, AllergenType } from "@/components/AllergenIcons";
import { Plus, Printer, Trash2, Layout, BookOpen, Search, Library, X, Download, Upload } from "lucide-react";
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

type SubItem = {
  id: string;
  name: string;
  price: string;
  allergens: AllergenType[];
};

type MenuItemData = {
  id: string;
  name: string;
  description_sv: string;
  description_en: string;
  price: string;
  allergens: AllergenType[];
  isHeader?: boolean;
  subItems?: SubItem[];
  hasTopSeparator?: boolean;
};

type MenuPageData = {
  id: string;
  title: string;
  subtitle?: string;
  items: MenuItemData[];
  hideHeader?: boolean;
  headerAllergen?: AllergenType;
};

export default function Home() {
  const [restaurantName, setRestaurantName] = useState("kontrast");
  const [subtitle, setSubtitle] = useState("NORTH INDIAN RESTAURANT & BAR");
  const [zoom, setZoom] = useState(0.8);
  const [isQuickAddOpen, setIsQuickAddOpen] = useState(false);
  const [quickAddTargetPageId, setQuickAddTargetPageId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isLibraryEnabled, setIsLibraryEnabled] = useState(false); // Set to true to enable library features

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
      id: "page-dessert",
      title: "DESSERT",
      subtitle: "SWEET FINISH",
      items: [
        { id: "d1", name: "Kulfi (Indian Ice-Cream)", description_sv: "Långkokt mjölk med nio olika kryddor, serveras med nötter och torkad frukt.", description_en: "Long-cooked milk with nine different spices, served with nuts and dried fruits.", price: "85 kr", allergens: ["milk", "nuts"] },
        { id: "d2", name: "Gajrella", description_sv: "Morötter kokta i mjölk med malda nötter, serveras med vaniljglass och torkad frukt.", description_en: "Carrots cooked in milk with ground nuts, served with vanilla ice-cream and dried fruits.", price: "85 kr", allergens: ["milk", "nuts"] },
        { id: "d3", name: "Gulaab Jamun", description_sv: "Klassisk indisk dessert baserad på mjölk och sockerbollar i rosensirap. (1 Piece served with Vanilla ice cream)", description_en: "Classic Indian dessert made of milk, sugar and rose syrup. (1 Piece served with Vanilla ice cream)", price: "85 kr", allergens: ["milk"] },
        { id: "d4", name: "Kheer", description_sv: "Indisk rispudding gjord på ris och långkokt mjölk, serveras med rivna nötter och torkad frukt.", description_en: "Indian rice pudding made with rice and long-cooked milk, served with grated nuts and dried fruits.", price: "85 kr", allergens: ["milk", "nuts"] },
        { id: "d5", name: "Burfi (1 pcs)", description_sv: "En mjölk baserad sötsak.", description_en: "A milk-based sweet.", price: "35 kr", allergens: ["milk", "nuts"] },
        { id: "d6", name: "Three scoops of ice-cream", description_sv: "Vanilj, jordgubb och chokladglass serveras med chokladsås.", description_en: "Vanilla, strawberry and chocolate ice-cream served with chocolate sauce.", price: "75 kr", allergens: ["milk"] }
      ]
    },
    {
      id: "page-cover",
      title: "COVER",
      subtitle: "",
      items: []
    },
    {
      id: "page-starters-1",
      title: "STARTERS",
      subtitle: "BEGIN YOUR JOURNEY",
      items: [
        { 
          id: "s1", 
          name: "Papadam (2 pcs) (Vegan)", 
          description_sv: "Krispig majs, ris och linsmjöl bröd. Serveras med mango chutney.", 
          description_en: "Crispy corn, rice and lentil-flour bread. Served with mango chutney.", 
          price: "35 kr", 
          allergens: [] 
        },
        { 
          id: "s2", 
          name: "Samosas (1 st)", 
          description_sv: "Stekt vetemjöl Pirog med kryddig fyllning, serveras med mango koriander-mynta-chili och tamarind chutney.", 
          description_en: "Fried wheat flour short crust with savoury filling, served with mango, coriander-mint-chilli and tamarind chutney.", 
          price: "", 
          allergens: ["gluten"],
          subItems: [
            { id: "s2-v", name: "Vegetariskt/Vegetarian (Can be made Vegan)", price: "50 kr", allergens: [] },
            { id: "s2-c", name: "Kyckling/Chicken", price: "55 kr", allergens: [] },
            { id: "s2-b", name: "Biff/Beef", price: "60 kr", allergens: [] }
          ]
        },
        { 
          id: "s3", 
          name: "Chat pata Samosa Chaat (Can be made Vegan)", 
          description_sv: "En annan läcker indisk aptitretare som har krossad samosa som bas, toppad med varm kikärtsgryta tillagad i svart te. Tamarind och koriander-mynta-chili chutney, stekt krispig potatis nudlar, hackad lök, färsk koriander och granatäpple.", 
          description_en: "Another fine dainty Indian appetizer that has smashed samosa as the base, topped with hot chickpea curry cooked in black tea. It is then filled with tamarind and coriander-mint-chili chutney, fried crispy potato-noodles, chopped onions, fresh coriander and pomegranate.", 
          price: "95 kr", 
          allergens: ["gluten", "milk"] 
        },
        { 
          id: "s4", 
          name: "Pakoras (3 pcs)", 
          description_sv: "Klassisk indisk Plockmat – serveras med mango, koriander-mynta-chili och tamarind chutney.", 
          description_en: "Classic Indian finger-food – served with mango, coriander-mint-chilli and tamarind chutney.", 
          price: "", 
          allergens: ["milk"],
          subItems: [
            { id: "s4-v", name: "Vegetariskt/Vegetarian (Can be made Vegan)", price: "80 kr", allergens: [] },
            { id: "s4-c", name: "Kyckling/Chicken", price: "90 kr", allergens: ["gluten"] },
            { id: "s4-f", name: "Fisk/Fish", price: "95 kr", allergens: ["gluten", "fish", "soya"] },
            { id: "s4-m", name: "Mix Pakora (2 Vegeterian, 2 Chicken & 2 Fish)", price: "115 kr", allergens: ["gluten", "soya", "fish"] }
          ]
        }
      ]
    },
    {
      id: "page-sides",
      title: "SIDE ORDERS",
      subtitle: "BREADS & ACCOMPANIMENTS",
      items: [
        { 
          id: "br-group", 
          name: "Breads", 
          description_sv: "", 
          description_en: "", 
          price: "", 
          allergens: [],
          isHeader: true,
          subItems: [
            { id: "br1", name: "Smör/Butter naan", price: "30 kr", allergens: ["milk", "gluten"] },
            { id: "br2", name: "Vitlök/Garlic Naan", price: "35 kr", allergens: ["milk", "gluten"] },
            { id: "br3", name: "Parontha (Vegan)", price: "35 kr", allergens: ["gluten"] },
            { id: "br4", name: "Peshawari Naan (Mandel, Russin, Kokos)", price: "50 kr", allergens: ["milk", "nuts", "gluten"] },
            { id: "br5", name: "Makki di roti (Majsbröd/Cornbread)(Glutenfri) (Vegan)", price: "35 kr", allergens: [] },
            { id: "br6", name: "Ost/Cheese Naan", price: "45 kr", allergens: ["milk", "gluten"] },
            { id: "br7", name: "Vitlök Ost/Garlic Cheese Naan", price: "55 kr", allergens: ["milk", "gluten"] },
            { id: "br8", name: "Vitlök chili Ost/Garlic Chilli Cheese Naan", price: "60 kr", allergens: ["milk", "gluten"] },
            { id: "br9", name: "Lacha Parontha", price: "55 kr", allergens: ["milk", "gluten"] },
            { id: "br10", name: "Aaloo Parontha (Vegan)", price: "65 kr", allergens: ["gluten"] },
            { id: "br11", name: "Tandori Aaloo Naan", price: "75 kr", allergens: ["milk", "gluten"] },
            { id: "br12", name: "Tandoori Roti (Vegan)", price: "35 kr", allergens: ["gluten"] }
          ]
        },
        { id: "si1", name: "Seasonal Salad", description_sv: "", description_en: "", price: "20 kr", allergens: [], hasTopSeparator: true },
        { 
          id: "raita-group", 
          name: "Yoghurt sås/Yoghurt Sauce", 
          description_sv: "", 
          description_en: "", 
          price: "", 
          allergens: ["milk"],
          isHeader: true,
          subItems: [
            { id: "si2", name: "Plain Raita", price: "30 kr", allergens: ["milk"] },
            { id: "si3", name: "Boondi Raita", price: "40 kr", allergens: ["milk", "gluten"] },
            { id: "si4", name: "Kachumber Raita", price: "45 kr", allergens: ["milk"] }
          ]
        },
        { 
          id: "si5", 
          name: "Pickles (Vegan)", 
          description_sv: "Fråga personalen om alternativen. Please ask the staff regarding selection", 
          description_en: "", 
          price: "30 kr", 
          allergens: ["mustard", "sesame"],
          hasTopSeparator: true 
        },
        { 
          id: "chutney-group", 
          name: "Chutneys", 
          description_sv: "", 
          description_en: "", 
          price: "", 
          allergens: [],
          isHeader: true,
          subItems: [
            { id: "si6", name: "Mango (Vegan)", price: "15 kr", allergens: [] },
            { id: "si7", name: "Tamarind (Vegan)", price: "15 kr", allergens: [] },
            { id: "si8", name: "Koriander-mint-chilli/ Coriander-mint-chillies (Can be made Vegan)", price: "15 kr", allergens: ["milk"] },
            { id: "si9", name: "Tomat/Tomato (Vegan)", price: "20 kr", allergens: [] },
            { id: "si10", name: "SET OF 3 CHUTNEY", price: "45 kr", allergens: [] }
          ]
        }
      ]
    },
    {
      id: "page-chaat",
      title: "CHAAT SPECIALS",
      subtitle: "STREET FOOD FAVORITES",
      hideHeader: true,
      items: [
        { id: "ch1", name: "Blooming Onion (Can be made Vegan )", description_sv: "En version av Onion Bhaji, friterad skuren lök likt en blomma. Serveras med mango, koriander-mynta-chilli och tamarindsås.", description_en: "A version of onion bhaji, onion cut as a flower, breaded and fried. Served with mango, coriander-mint-chilli and tamarind chutney.", price: "90 kr", allergens: ["milk", "mustard", "eggs", "gluten"] },
        { id: "ch2", name: "Pataka Papdi (Can be made Vegan )", description_sv: "Krispiga vetemjölskex som bas, linsdumplings, sötad yoghurt, koriander-mynta-chilli och tamarind chutney, Sev som är knapriga nudlar från kikärtsmjöl, Toppat med granatäpple, färsk koriander och hackad rödlök. Sprinklad med chat masala.", description_en: "This is meant to be like fire-crackers in your mouth, with crispy wheat-flour crackers as the base; lentil dumpling, sweet yoghurt, coriander-mint-chilli and tamarind chutney, sev (crunchy noodles from chickpea flour), garnished with pomegranate, fresh coriander and chopped red onions and sprinkled with chaat masala.", price: "90 kr", allergens: ["milk", "mustard", "eggs", "gluten"] },
        { id: "ch5", name: "Tangri Kebab (Not Halal)", description_sv: "Friterade Dhaba- stil panerade kycklingklubbor marinerade i aromatiska kryddor, vitlök-ingefära och citron, Serveras med tamarind, koriander-mynta-chili och raita sås.", description_en: "Dhaba style breaded chicken drumsticks marinated in aromatic spices, garlic-ginger paste and lemon juice. Fried and served with tamarind and coriander-mint-chilli and raita sauce.", price: "85 kr", allergens: ["lupin", "milk", "eggs", "gluten"] },
        { id: "ch4", name: "Papdi Chaat (Can be made Vegan )", description_sv: "Stekt potatisbiff med söt och syrlig smak, krispiga vetemjölsstekta kakor, linsdumplings toppat med en kryddig kikärtssås och mango, koriander-mynta-chili, tamarind chutney och garnerad med lök, äpplen, gurka och koriander.", description_en: "Sweet and tangy flavoured fried potato patty, crispy wheat flour fried cakes, lentil dumplings, topped with a spicy chickpea gravy and mango, coriander-mint-chilli, tamarind chutney, and sprinkled with onions, apples, cucumber and coriander.", price: "100 kr", allergens: ["lupin", "gluten"] }
      ]
    },
    {
      id: "page-veg-1",
      title: "CURRYS VEGETARIAN",
      subtitle: "SERVED WITH A PORTION OF RICE",
      hideHeader: true,
      items: [
        { id: "v1", name: "Mix Veg", description_sv: "Säsongens grönsaker ångkokas i en stekt lök och tomat baserad sås.", description_en: "Seasonal vegetables steamed in fried onions and tomato-based sauce. (Vegan)", price: "170 kr", allergens: ["soya"] },
        { id: "v2", name: "Shahi Navratan Veg", description_sv: "Säsongens grönsaker curry med kokos, grädde, smör och yoghurt.", description_en: "Seasonal vegetable curry with coconut-cream, butter and yoghurt.", price: "170 kr", allergens: ["milk", "soya"] },
        { id: "v3", name: "Tadka Daal", description_sv: "Linsgryta på en blandning av fyra olika gula linser.", description_en: "Lentil curry with a blend of four different yellow lentils. (Vegan)", price: "170 kr", allergens: ["soya"] },
        { id: "v4", name: "Mutter Paneer", description_sv: "En curry bestående av vår hemmalagade ost och ärtor som kokas i en tomat och lök baserad sås.", description_en: "Curry with home-made Indian cheese and peas, cooked in tomato and onion-based sauce. ( Can be done vegan with Tofu/Soya chunks )", price: "170 kr", allergens: ["milk", "soya"] },
        { id: "v5", name: "Paneer Tikka Butter Masala", description_sv: "Hemmalagad Indisk ost curry som kokas i en sås bestående av tomat, ingefära, smör och grädde.", description_en: "Home-made Indian cheese curry, cooked along tomatoes, ginger, butter and cream.", price: "170 kr", allergens: ["milk"] },
        { id: "v6", name: "Daal Makhni", description_sv: "Klassisk Punjabi rätt, tillagad med svarta linser, smör, grädde och kryddor.", description_en: "Classic Punjabi dish made with black lentils, butter, cream and spices. (Can be made Vegan)", price: "170 kr", allergens: ["milk", "soya"] },
        { id: "v7", name: "Karahi Paneer", description_sv: "Indisk Färskost, tillagad med lök, tomat, vitlök och ingefärasås med bitar av paprika och lök.", description_en: "Indian cheese curry cooked in onion, tomato, garlic and ginger sauce with chunks of peppers and onions. ( Can be done vegan with Tofu/Soya chunks )", price: "170 kr", allergens: ["milk", "soya"] }
      ]
    },
    {
      id: "page-biryani",
      title: "PUNJABI BIRYANI ( Spicy)",
      subtitle: "",
      hideHeader: true,
      items: [
        { 
          id: "bi-group", 
          name: "PUNJABI BIRYANI ( Spicy)", 
          description_sv: "Stekt ris med säsongens grönsaker och indiska kryddor. Serveras med raita.", 
          description_en: "Fried rice with seasonal vegetables and Indian spices. Served with raita.", 
          price: "", 
          allergens: ["milk"],
          subItems: [
            { id: "bi1", name: "Kyckling/Chicken", price: "195 kr", allergens: [] },
            { id: "bi2", name: "Lamm/Lamb", price: "205 kr", allergens: [] },
            { id: "bi3", name: "Vegetarisk (på säsongens grönsaker) / Vegetarian (Made with seasonal vegetables)", price: "170 kr", allergens: [] },
            { id: "bi4", name: "Shrimp", price: "209 kr", allergens: ["crustaceans"] }
          ]
        }
      ]
    },
    {
      id: "page-golgappe",
      title: "GOLGAPPE SPECIALS",
      subtitle: "",
      hideHeader: true,
      items: [
        { 
          id: "s7", 
          name: "Bread Pakora (4 pcs) ( Can be done vegan with Tofu/Soya chunks )", 
          description_sv: "Friterad “småratt” känt som “Bread Bhaji” – Spenat i en brödsmet fylld med kryddig potatis och paneer, toppad med färsk lök serveras med mango, koriander-mynta-chili och tamarind chutney.", 
          description_en: "Deep-fried snack known as “Bread Bhaji” – Spinach battered bread, filled with spicy potatoes and paneer, topped with fresh onions served with mango, coriander-mint-chilli and tamarind chutney.", 
          price: "99 kr", 
          allergens: ["gluten", "milk"] 
        },
        { 
          id: "s5", 
          name: "Veggie Bullets (4 Pcs)", 
          description_sv: "Morot, ingefära och vitlök formade kulor med tillsatt majsmjöl och panerade med cornflakes och sedan friterade. Serveras med mango, koriander-mynta-chili och tamarind chutney.", 
          description_en: "Carrots, ginger and garlic; shaped into bullets by adding cornflour and battered with cornflakes then deep-fried. Served with mango, coriander-mint-chilli and tamarind chutney.", 
          price: "90 kr", 
          allergens: ["milk", "eggs", "gluten"] 
        },
        { 
          id: "s4", 
          name: "Golgappe (8 pcs)", 
          description_sv: "Känd som “Pani Puri” består av runda ihåliga stekta bröd fyllda med smaksatt myntavatten, tamarind, koriander-mynta-chili, mango och chaat masala. \n\nVälj ett av följande alternativ/ choose one of the following choices : \n- Äpple, mynta och morot / Apple, mint and carrots. \n- Kokt potatis och svart kikärtor / Boiled potatoes and black chickpeas. \n- Stekt potatis nudlar, koriander, tomat, lime / Fried potato-noodles, tomatoes, lime, coriander", 
          description_en: "Known as “Pani Puri”; consists of round hollow fried bread, filled with flavoured mint water, tamarind, coriander-mint-chilli, mango and chaat masala. (Can be made Vegan)", 
          price: "80 kr", 
          allergens: ["gluten", "milk", "sulphites"] 
        },
        { 
          id: "s6", 
          name: "Gandhi's Revenge Golgappa Chaat (8 Pcs)", 
          description_sv: "Kryddig chaat med krispiga puff puri bollar fyllda med potatis och svarta kikärtor. Toppad med sötsur, och het chutney, vispad yoghurt och en massa grön chilli, spriklat med hackad rödlök, koriander, stark sev och granatäpple.", 
          description_en: "Spicy chaat that is made with crispy puffed puri balls, filled with boiled potatoes and black chickpeas, topped with sweet, tangy, sour and spicy chutneys, beaten curd and lots of green chillies, sprinkled with chopped red onions, coriander, spicy potato sev and pomegranate.", 
          price: "99 kr", 
          allergens: ["milk", "sulphites", "gluten"] 
        }
      ]
    },

    {
      id: "page-chicken-1",
      title: "CURRYS CHICKEN (HALAL)",
      subtitle: "( CONTAINS- MILK PROTEIN/ MJÖLKPROTEIN ) \nServeras med en portion ris / Served with a portion of rice",
      items: [
        { id: "c1", name: "Davate Punjab", description_sv: "Mer känd som “Teekha Murgh”. Curry med fänkålsfrön, curryblad, mynta och svart kummin.", description_en: "Known as “Teekha Murgh”. Curry with fennel-seeds, curry-leaves, mint and black cumin.", price: "195 kr", allergens: [] },
        { id: "c2", name: "Shan-e-Kashmir", description_sv: "Curry med saffran, harissa pasta, rosvatten, honung, apelsin, kanel, mandel och sesamfrön.", description_en: "Curry with saffron, harissa paste, rose water, honey, orange-syrup, cinnamon, almond and sesame seeds.", price: "215 kr", allergens: ["nuts", "sesame"] },
        { id: "c3", name: "Jalfrezi", description_sv: "Curry med paprika, yoghurt, lök och rikligt med chili.", description_en: "Curry with peppers, yoghurt, onions and plenty of chillies.", price: "195 kr", allergens: ["milk"] },
        { id: "c4", name: "Chicken Tikka Masala", description_sv: "Grillad marinerad kyckling i kryddad tomat och ingefära baserad curry.", description_en: "Grilled marinated chicken in a spicy tomato and ginger-based curry.", price: "195 kr", allergens: [] },
        { id: "c5", name: "Butter Chicken (Kontrast Special)", description_sv: "Curry med tomat, yoghurt, riven kokos, grädde, smör och tandoori masala.", description_en: "Curry with tomatoes, yoghurt, butter, coconut, cream and tandoori masala.", price: "185 kr", allergens: ["milk", "mustard"] },
        { id: "c6", name: "Murgh Makhni", description_sv: "Curry med yoghurt, smör, grädde, riven kokos, och garam masala.", description_en: "Curry with yoghurt, butter, cream, coconut and garam masala.", price: "185 kr", allergens: ["milk"] },
        { id: "c13", name: "Mango Chicken", description_sv: "En söt och mild curry med bitar av kyckling och mango.", description_en: "A sweet and mild chicken curry with mango pieces.", price: "195 kr", allergens: [] }
      ]
    },
    {
      id: "page-seafood",
      title: "CURRY FISH AND SEA FOOD",
      subtitle: "Serveras med en portion ris och sallad / Served with a portion of rice",
      headerAllergen: "fish",
      items: [
        { id: "f1", name: "Coconut Curry", description_sv: "Kryddig curry med stora räkor och smaker av kokosmjölk, koriander, grön paprika och grön chilipasta.", description_en: "Spiced curry of big shrimps with flavours of coconut-milk, coriander, green peppers and green chilli paste.", price: "215 kr", allergens: ["crustaceans"] },
        { id: "f2", name: "Ghee Roast", description_sv: "Räkor stekta i klarat smör med bitar av lök och vitlök som sedan kokas i en tomat baserad gräddsås.", description_en: "Shrimps fried in clarified butter, onions and garlic chunks, then cooked in tomato-based cream sauce.", price: "195 kr", allergens: ["crustaceans", "milk"] },
        { id: "f3", name: "Mirch Masala", description_sv: "Räk curry med lök, tomat, vitlök, ingefära och bockhornsklöver.", description_en: "Shrimp-curry with onions, tomatoes, garlic, ginger and fenugreek leaves.", price: "195 kr", allergens: ["crustaceans"] },
        { id: "f4", name: "Malai Macchi", description_sv: "Kryddad torsk curry med skirat smör, yoghurt, grädde och bockhornsklöver.", description_en: "Spiced cod curry with butter, yoghurt, cream and fenugreek leaves.", price: "195 kr", allergens: ["milk"] },
        { id: "f5", name: "Haryali Machhi", description_sv: "Het curry med torskrygg, spenat, bockhornsklöver, lök, vitlök, och chilli.", description_en: "Spicy codfish curry with spinach, fenugreek, onions, garlic and chillies.", price: "195 kr", allergens: [] },
        { id: "f6", name: "Machhi Masala Mar ke", description_sv: "Het och kryddig curry på torskrygg, med bitar av ingefära, vitlök och grön chilli.", description_en: "Hot and spicy fish with chunks of ginger, garlic and green chillies.", price: "195 kr", allergens: [] }
      ]
    },
    {
      id: "page-veg-2",
      title: "CURRYS VEGETARIAN",
      subtitle: "Serveras med en portion ris / Served with a portion of rice",
      items: [
        { id: "v8", name: "Palaak Paneer", description_sv: "Vår hemmagjorda indiska ost i en spenatbaserad curry.", description_en: "Home-made Indian cheese in a spinach based curry. ( Can be done vegan with Tofu/Soya chunks )", price: "170 kr", allergens: ["milk"] },
        { id: "v9", name: "Chilli Paneer", description_sv: "Vår hemmagjorda indiska ost serveras i en sötsur gryta baserad på tomat, ingefära, soja, rörsocker, lök och paprika.", description_en: "Homemade Indian cheese served in a sweet and sour curry based on tomatoes, soy sauce, cane sugar, peppers and onions. ( Can be done vegan with Tofu/Soya chunks )", price: "170 kr", allergens: ["milk", "soya", "gluten"] },
        { id: "v10", name: "Punjabi Daal", description_sv: "Linsgryta på fyra olika linser och röda kidneybönor.", description_en: "Blend of four different lentils and red kidney-beans. (Vegan )", price: "170 kr", allergens: [] },
        { id: "v11", name: "Veggie Balls Korma", description_sv: "Säsongens grönsaker strimlas och rullas till små bollar som sedan paneras och friteras. Serveras i en curry på lök, malda cashewnötter och kokosmjölk.", description_en: "Seasonal vegetables shredded and rolled into balls, then breaded and deep-fried. Served in a curry with onions, grinded cashew-nuts and coconut-milk. (Vegan )", price: "170 kr", allergens: ["nuts", "gluten"] },
        { id: "v12", name: "Ambersari Cholle", description_sv: "Kikärtsgryta, en variant av chana masala med smaker av svart te och bockhornsklöver.", description_en: "Chickpeas curry - A version of chana masala with flavours of black tea and fenugreek leaves. (Vegan )", price: "170 kr", allergens: [] },
        { id: "v13", name: "Paneer Jalfreezy", description_sv: "Curry med paprika, yoghurt, lök och rikligt med chili.", description_en: "Home made Indian cheese curry with peppers, yoghurt, onions and plenty of chillies.", price: "170 kr", allergens: ["milk"] },
        { id: "v14", name: "Rajma", description_sv: "Red Kidney bönor curry med lök, tomat, vitlök och ingefära.", description_en: "Red Kidney-bean curry with onions, tomatoes, garlic and ginger.", price: "170 kr", allergens: [] }
      ]
    },
    {
      id: "page-grills",
      title: "GRILLS (HALAL)",
      subtitle: "Serveras med en portion ris / Served with a portion of rice",
      items: [
        { id: "g1", name: "Chicken Tikka", description_sv: "Bitar av benfri kyckling, marineras över natten med yoghurt,örter och kryddor. Serveras med en tomat och ingefärasås.", description_en: "Pieces of chicken marinated in yoghurt, herbs and spices. Served with tomato and ginger sauce.", price: "185 kr", allergens: ["milk"] },
        { id: "g2", name: "Paneer Tikka", description_sv: "Vår hemmagjorda indiska ost. Marineras över natten med örter och kryddor. Serveras med tomat och ingefära sås.", description_en: "Home-made Indian cheese, marinated overnight then carefully grilled. Served with tomato and ginger sauce.", price: "170 kr", allergens: ["milk"] },
        { id: "g3", name: "Seekh Kebab", description_sv: "Malet nötkött, som marineras över natten med örter och kryddor. Grillas på spett och serveras med en currysås.", description_en: "Minced beef with coriander, mint, green chillies and spices, grilled on skewers.", price: "195 kr", allergens: [] },
        { id: "g4", name: "Tandori Murgh", description_sv: "Kyckling lår som syras över natten med örter kryddor och yoghurt. Serveras med en currysås.", description_en: "Chicken thigh that's been marinated in yoghurt, herbs and spices. Served with a curry sauce.", price: "195 kr", allergens: ["milk"] },
        { id: "g5", name: "Mixed Grill", description_sv: "Mix av paneer, chicken tikka, seekh kebab, lamm, Tandoori Murgh. Serveras med en currysås.", description_en: "Mix of paneer, chicken, seekh kebab, lamb, tandoori murgh. Served with a curry sauce.", price: "225 kr", allergens: ["milk"] }
      ]
    },
    {
      id: "page-beef",
      title: "CURRY BEEF (HALAL)",
      subtitle: "Serveras med en portion ris / Served with a portion of rice",
      items: [
        { id: "b1", name: "Kofta Karahi", description_sv: "Indiska köttbullar i en aromatisk och välbalanserad curry.", description_en: "Indian meatballs in aromatic and well balanced curry.", price: "195 kr", allergens: [] },
        { id: "b2", name: "Bhayankar Maas (Super Spicy)", description_sv: "En curry för chili fanatiker med massor av chili, vitlök, ingefära och bockhornsklöver.", description_en: "A Curry for chili fanatics with lots of chilies, garlic, ginger and fenugreek leaves.", price: "195 kr", allergens: [] },
        { id: "b3", name: "Tawa Isthtyle", description_sv: "Långkokt nötkött med bitar av paprika och lök i en reducerad sås på lök och vitlök.", description_en: "Long-cooked beef with chunks of peppers and onions in garlic and onion-based sauce.", price: "195 kr", allergens: [] },
        { id: "b4", name: "Lassoni Gosht", description_sv: "Biff curry med en skarp smak av vitlök, chili, gurkmeja, kummin och koriander.", description_en: "Beef curry with strong taste of garlic, chilies, turmeric, cumin and coriander.", price: "195 kr", allergens: ["mustard"] },
        { id: "b5", name: "Vindaloo (Spicy)", description_sv: "Originalrecept på nötkött marinerat i vinäger, vitlök och chili, från tiden med portugisiska kolonier i Indien.", description_en: "Original recipe of beef marinated in vinegar, garlic and chilies from the time of the portuguese colonies in India.", price: "195 kr", allergens: ["sulphites"] },
        { id: "b6", name: "Firdausi Makhni", description_sv: "Mild och aromatisk curry med smaker av krossade nötter, grädde och kardemumma.", description_en: "Very mild and aromatic curry with flavours of crushed nuts, cream and cardamoms.", price: "195 kr", allergens: ["milk", "nuts"] }
      ]
    },
    {
      id: "page-chicken-remaining",
      title: "CURRYS CHICKEN",
      subtitle: "",
      hideHeader: true,
      items: [
        { id: "c7", name: "Chicken Dhaba Karahi", description_sv: "Curry med lök, tomater, vitlök, ingefära och bockhornsklöverblad.", description_en: "Curry with onions, tomatoes, garlic, ginger and fenugreek leaves.", price: "195 kr", allergens: [] },
        { id: "c8", name: "Chili Chicken", description_sv: "Indo-kinesisk curry i sötsur sås med soja, tomat, paprika, stekt lök och rörsocker.", description_en: "Indo-Chinese chicken curry cooked in sweet and sour sauce with soy sauce, tomatoes, peppers, fried onions and cane suger.", price: "195 kr", allergens: ["soya", "gluten"] },
        { id: "c9", name: "Adraki Kukkad", description_sv: "Aromatisk och smakfull curry med massor av ingefära.", description_en: "Aromatic and tasteful chicken curry with alot of ginger.", price: "195 kr", allergens: [] },
        { id: "c10", name: "Saag Chicken", description_sv: "Curry gjord på spenat, senapsblad och kikärtsmjöl.", description_en: "Curry made with spinach, mustard leaves and chickpea flour", price: "195 kr", allergens: ["mustard"] },
        { id: "c11", name: "Chicken Korma", description_sv: "Curry på lök, malda cashewnötter, kokosmjölk, lagerblad, muskot, majsmjöl och kardemumma. Marinerad över natten i sexton olika kryddor", description_en: "Curry with onion-sauce, cashew-paste, coconut-milk, bayleaves, nutmeg, cornflour and cardamom. Marinated overnight in sixteen different spices.", price: "195 kr", allergens: ["nuts"] },
        { id: "c12", name: "Chicken Madras ( spicy)", description_sv: "Kryddig kycklingcurry med currymadras & tamarind", description_en: "Spicy Chicken stew with curry madras & tamarind", price: "195 kr", allergens: [] }
      ]
    },


    {
      id: "page-lamb",
      title: "CURRYS LAMB (HALAL)",
      subtitle: "Serveras med en portion ris / Served with a portion of rice",
      items: [
        { id: "l1", name: "Gosht Darbari", description_sv: "Curry med Kanel, kardemumma, svart peppar, korianderfrön, muskot, kummin, yoghurt, stekt lök och dyvelsträck.", description_en: "Curry with cinnamon, black cardamom, black peppers, coriander-seeds, nutmeg, cumin, yoghurt, fried onions and asafoetida.", price: "205 kr", allergens: ["milk", "mustard"] },
        { id: "l2", name: "Pahadi Lamb", description_sv: "Mynta,koriander,paprika baserad curry med smaker av lime, honung, muskot, kardemumma och lagerblad.", description_en: "Mint,coriander,peppers mixed curry with flavours of lime, honey, nutmeg, cardamom and bayleaves.", price: "205 kr", allergens: [] },
        { id: "l3", name: "Palaak Lamb", description_sv: "Spenat baserad curry med mört lamm.", description_en: "Spinach based curry with tender-lamb.", price: "205 kr", allergens: [] },
        { id: "l4", name: "Dopiaza", description_sv: "Curry gjord på tre variationer av lök-gullök, rödlök samt friterad lök.", description_en: "Curry made of three variations of onions- yellow onions, red onions and deep-fried onions.", price: "205 kr", allergens: ["gluten"] },
        { id: "l5", name: "Muglai Lamb", description_sv: "Mer känd som “Korma”. Curry på lök, malda cashewnötter, kokosmjölk, lagerblad, muskot, majsmjöl och kardemumma. Marinerad över natten med sexton olika kryddor", description_en: "Also known as “Korma”. Curry with onion-sauce, cashewpaste, coconut milk, bayleaves, nutmeg, cornflour and cardamom. Marinated overnight with sixteen different spices.", price: "205 kr", allergens: ["nuts"] },
        { id: "l6", name: "Kashmiri Lamb", description_sv: "En lite mildare curry med fänkålsfrön, kardemumma, riven mandel, grädde, kryddnejlika, vallmofrön och tomat.", description_en: "A milder curry variant with fennel-seeds, cardamom, ground almond cream, cloves, poppy seeds and tomatoes.", price: "205 kr", allergens: ["milk", "nuts"] }
      ]
    },
    {
      id: "page-lamb-2",
      title: "CURRYS LAMB",
      subtitle: "",
      hideHeader: true,
      items: [
        { id: "l7", name: "Ambersari Bhuna Lamb ( Kontrast Special )", description_sv: "Vad som gör denna curry speciell är “Bhuna” delen. Köttet är stekt i en panna med indiska kryddor, lök, vitlök, ingefära och tomater. Köttet kokas sedan i sin egen saft, vilket ger den sin djupa och rika smak. Denna rätt är tidskrävande men resultatet är fantastiskt.", description_en: "What makes this dish so special is the “Bhuna” part. The meat is pan-fried with Indian spices, onions, garlic, ginger and tomatoes, cooked in its own stock, adding deep and rich flavours, It is time consuming, but the end result is amazing.", price: "205 kr", allergens: [] },
        { id: "l8", name: "Lamb Rogan Josh ( Spicy )", description_sv: "Curry gjord på tomat, kryddpasta, cayennepeppar, lagerblad, yoghurt och grädde.", description_en: "Curry made with tomatoes, spice paste, cayenne pepper, bayleaves, yoghurt and cream.", price: "205 kr", allergens: ["milk"] },
        { id: "l9", name: "Shahi Lamb", description_sv: "Mildare curry gjord på grädde, kardemumma, smör, honung och tomat.", description_en: "Milder curry made with cream, cardemom, butter, honey and tomatoes.", price: "205 kr", allergens: ["milk"] }
      ]
    },

  ]);

  const handlePrint = () => {
    // Save current zoom and force 100% for the print engine
    const originalZoom = zoom;
    setZoom(1);
    
    // Give the browser a moment to re-render at 100% before opening the print dialog
    setTimeout(() => {
      window.print();
      // Restore the user's zoom after the print dialog opens
      setTimeout(() => {
        setZoom(originalZoom);
      }, 500);
    }, 1000);
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

  const updateSubItem = (pageId: string, itemId: string, subId: string, field: keyof SubItem, value: any) => {
    setMenuPages(menuPages.map(page => {
      if (page.id === pageId) {
        return {
          ...page,
          items: page.items.map(item => {
            if (item.id === itemId) {
              return {
                ...item,
                subItems: (item.subItems || []).map(sub => {
                  if (sub.id === subId) {
                    return { ...sub, [field]: value };
                  }
                  return sub;
                })
              };
            }
            return item;
          })
        };
      }
      return page;
    }));
  };

  const addSubItem = (pageId: string, itemId: string) => {
    setMenuPages(menuPages.map(page => {
      if (page.id === pageId) {
        return {
          ...page,
          items: page.items.map(item => {
            if (item.id === itemId) {
              const newSub: SubItem = {
                id: `sub-${Date.now()}`,
                name: "New Option",
                price: "0 kr",
                allergens: []
              };
              return {
                ...item,
                subItems: [...(item.subItems || []), newSub]
              };
            }
            return item;
          })
        };
      }
      return page;
    }));
  };

  const deleteSubItem = (pageId: string, itemId: string, subId: string) => {
    setMenuPages(menuPages.map(page => {
      if (page.id === pageId) {
        return {
          ...page,
          items: page.items.map(item => {
            if (item.id === itemId) {
              return {
                ...item,
                subItems: (item.subItems || []).filter(sub => sub.id !== subId)
              };
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

  const handleExportConfig = () => {
    const config = {
      restaurantName,
      subtitle,
      locations,
      menuPages
    };
    const blob = new Blob([JSON.stringify(config, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${restaurantName.toLowerCase()}_menu_config.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleImportConfig = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const config = JSON.parse(event.target?.result as string);
        if (config.restaurantName) setRestaurantName(config.restaurantName);
        if (config.subtitle) setSubtitle(config.subtitle);
        if (config.locations) setLocations(config.locations);
        if (config.menuPages) setMenuPages(config.menuPages);
        alert("Menu configuration applied successfully!");
      } catch (error) {
        alert("Failed to parse the configuration file. Please ensure it's a valid JSON.");
      }
    };
    reader.readAsText(file);
    // Reset file input so same file can be uploaded again
    e.target.value = "";
  };

  return (
    <div className="min-h-screen bg-[#e8dfc7] pb-24 font-lora text-[#2a2822] print:overflow-visible print:p-0 print:m-0">
      
      {/* Top Navbar - Professional Mobile Layout */}
      <div className="fixed top-0 left-0 right-0 z-[100] bg-white/95 backdrop-blur-md border-b border-[#d8d0b7] shadow-sm no-print">
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
            {isLibraryEnabled && (
              <button 
                onClick={() => setIsQuickAddOpen(true)}
                className="w-12 flex items-center justify-center bg-white text-[#5c5643] border border-[#d8d0b7] rounded-md hover:bg-[#f5ead5] transition shadow-sm active:scale-95"
                title="Library"
              >
                <Library size={18} />
              </button>
            )}
            <button 
              onClick={handleExportConfig}
              className="w-12 flex items-center justify-center bg-white text-blue-600 border border-blue-200 rounded-md hover:bg-blue-50 transition shadow-sm active:scale-95"
              title="Export Config (JSON)"
            >
              <Download size={18} />
            </button>
            <label className="w-12 flex items-center justify-center bg-white text-green-600 border border-green-200 rounded-md hover:bg-green-50 transition shadow-sm active:scale-95 cursor-pointer" title="Import Config (JSON)">
              <Upload size={18} />
              <input 
                type="file" 
                accept=".json" 
                onChange={handleImportConfig} 
                className="hidden" 
              />
            </label>
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
        {isLibraryEnabled && (
          <button 
            onClick={() => setIsQuickAddOpen(true)}
            className="w-14 flex items-center justify-center bg-white text-[#5c5643] border border-[#d8d0b7] rounded-xl transition shadow-md active:scale-95"
          >
            <Library size={20} />
          </button>
        )}
        <button 
          onClick={handleExportConfig}
          className="w-14 flex items-center justify-center bg-white text-blue-600 border border-blue-200 rounded-xl transition shadow-md active:scale-95"
        >
          <Download size={20} />
        </button>
        <label className="w-14 flex items-center justify-center bg-white text-green-600 border border-green-200 rounded-xl transition shadow-md active:scale-95 cursor-pointer">
          <Upload size={20} />
          <input 
            type="file" 
            accept=".json" 
            onChange={handleImportConfig} 
            className="hidden" 
          />
        </label>
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
      <div className="flex justify-center py-4 sm:py-8 pt-32 sm:pt-40 print-visible print:block print:p-0 print:m-0">
        {/* Zoom Wrapper - uses CSS zoom for correct bounding box on mobile */}
        <div 
          className="transition-all duration-300 ease-out print:!transform-none print:!m-0 print:!p-0 origin-top"
          style={{ zoom: zoom } as React.CSSProperties}
        >
          {/* Pages Container - 1 col on small, 2 col on xl, block on print */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-16 gap-y-12 print:grid-cols-2 print:gap-0 print:!m-0 print:!p-0 w-fit mx-auto print:w-[420mm] print:!mx-0 print-container print-visible">
          
        {/* Menu Pages */}
        {menuPages.map((page, pageIndex) => (
          page.id === 'page-cover' ? (
            <div key={page.id} className="w-[210mm] h-[297mm] bg-[#f5ead5] shadow-none border border-[#d8d0b7] print:!border-none relative print-page flex flex-col justify-between shrink-0 p-12 mx-auto overflow-hidden">
              {/* Background Watermark */}
              <div className="absolute -top-[20%] -left-[20%] pointer-events-none opacity-[0.05]">
                <Mandala className="w-[800px] h-[800px] text-[#2a2822]" />
              </div>
              <div className="absolute -bottom-[20%] -right-[20%] pointer-events-none opacity-[0.05]">
                <Mandala className="w-[800px] h-[800px] text-[#2a2822]" />
              </div>

              {/* Inner border */}
              <div className="absolute inset-10 border border-[#a59e8c] pointer-events-none opacity-30"></div>

              <div className="flex-1 flex flex-col items-center justify-center z-10 px-12">
                <div className="mb-6 flex justify-center">
                  <img 
                    src="/image.png" 
                    alt={restaurantName} 
                    className="h-32 w-auto object-contain"
                  />
                </div>
                
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

                {/* Gallery QR Code */}
                <div className="mt-12 flex flex-col items-center">
                  <div className="w-32 h-32 p-2 bg-white border border-[#d8d0b7] shadow-sm">
                    <img 
                      src="/gallery_qr.png" 
                      alt="Gallery QR Code" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="mt-2 text-[10px] font-lora uppercase tracking-[0.2em] text-[#6b6452]">Scan for Gallery</p>
                </div>
              </div>
            </div>
          ) : (
          <div key={page.id} className="w-[210mm] h-[297mm] bg-[#f5ead5] shadow-none border border-[#d8d0b7] print:!border-none relative print-page p-12 flex flex-col group/page shrink-0 mx-auto">
            
            {/* Background Watermark - Clipped to page */}
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

              {!page.hideHeader && (
                <div className={`${page.id === 'page-sides' ? 'mb-2' : 'mb-6'} text-left`}>
                  <div className="border-t-[3px] border-double border-[#5c5643] w-24 mb-3 opacity-70"></div>
                  
                  <div className="flex items-center gap-4 mb-1">
                    <EditableText 
                      value={page.title} 
                      onChange={(v) => updateMenuPage(page.id, 'title', v)} 
                      tagName="h2" 
                      className="text-[2.2rem] leading-none font-cormorant font-bold text-[#2a2822] hover:bg-[#e8dfc7] p-1 -ml-1 transition" 
                    />
                    {page.headerAllergen && (
                      <div className="scale-150 origin-left">
                        <AllergenIconsList allergens={[page.headerAllergen]} />
                      </div>
                    )}
                  </div>

                  <EditableText 
                    value={page.subtitle || ""} 
                    onChange={(v) => updateMenuPage(page.id, 'subtitle', v)} 
                    tagName="p" 
                    className="text-[10px] font-lora uppercase tracking-[0.15em] text-[#6b6452] mb-1 hover:bg-[#e8dfc7] p-1 transition inline-block whitespace-pre-wrap" 
                  />
                </div>
              )}

              <div className={`flex-1 flex flex-col ${page.id === 'page-sides' ? 'gap-0' : 'gap-2.5'}`}>
                {page.items.map((item, itemIndex) => (
                  item.isHeader ? (
                    <div key={item.id} className={`${page.id === 'page-sides' ? 'mt-1 first:mt-0 mb-0' : 'mt-6 first:mt-0 mb-2'}`}>
                      <EditableText 
                        value={item.name} 
                        onChange={(v) => updateMenuItem(page.id, item.id, 'name', v)} 
                        className={`${page.id === 'page-sides' ? 'text-[1.6rem]' : 'text-[1.8rem]'} font-cormorant font-bold text-[#2a2822] border-b border-[#d8d0b7] pb-1 inline-block`} 
                      />
                      
                      {/* Render Sub-items for headers too */}
                      {item.subItems && item.subItems.length > 0 && (
                        <div className={`mt-1 flex flex-col gap-0 ${page.id === 'page-sides' ? 'mb-1' : 'mb-4'}`}>
                          {item.subItems.map((sub) => (
                            <div key={sub.id} className="flex items-center gap-2 group/sub">
                              <EditableText 
                                value={sub.name} 
                                onChange={(v) => updateSubItem(page.id, item.id, sub.id, 'name', v)} 
                                className="text-[14px] font-lora text-[#2a2822] flex-1" 
                              />
                              <div className="scale-75 origin-left">
                                <AllergenIconsList allergens={sub.allergens} />
                              </div>
                              <div className="flex-1 border-b border-dotted border-[#b8b09d] mx-2 opacity-30"></div>
                              <EditableText 
                                value={sub.price} 
                                onChange={(v) => updateSubItem(page.id, item.id, sub.id, 'price', v)} 
                                className="text-[14px] font-lora font-bold text-[#2a2822]" 
                              />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Fragment key={item.id}>
                      {item.hasTopSeparator && (
                        <div className="w-full border-b-[1px] border-dotted border-[#b8b09d] mt-2 mb-1 opacity-60"></div>
                      )}
                      <div className={`flex flex-col relative group hover:bg-[#e8dfc7]/60 focus-within:bg-[#e8dfc7]/60 -mx-2 transition ${(!item.description_sv && !item.description_en && (!item.subItems || item.subItems.length === 0)) ? 'py-0.5 px-2' : 'p-2'}`}>
                      <div className="flex items-baseline gap-3 mb-0.5">
                        <div className={`${page.id === 'page-sides' ? 'text-[1.25rem]' : 'text-[1.5rem]'} leading-none font-cormorant font-bold tracking-wide text-[#1a1814] flex items-baseline gap-2`}>
                          <EditableText 
                            value={item.name} 
                            onChange={(v) => updateMenuItem(page.id, item.id, 'name', v)} 
                            renderValue={(val) => {
                              const parts = val.split(/(\(.*?\))/);
                              return (
                                <>
                                  {parts.map((part, i) => 
                                    part.startsWith('(') ? (
                                      <span key={i} className="text-sm font-lora font-normal text-[#1a1814] italic">{part}</span>
                                    ) : (
                                      <span key={i}>{part}</span>
                                    )
                                  )}
                                </>
                              );
                            }}
                          />
                        </div>
                        
                        <div className="ml-1 opacity-100 flex items-center">
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
                        className="text-[14px] font-lora text-[#4a473e] leading-[1.5] mb-0.5 italic whitespace-pre-wrap" 
                      />
                      
                      <div className="flex w-full items-end gap-2">
                        <div className="flex-1">
                          {item.description_en && (
                            <EditableText 
                              value={item.description_en} 
                              onChange={(v) => updateMenuItem(page.id, item.id, 'description_en', v)} 
                              tagName="p" 
                              className="text-[14px] font-lora text-[#4a473e] leading-[1.5] italic whitespace-pre-wrap" 
                            />
                          )}
                        </div>
                        {item.price && (
                          <EditableText 
                            value={item.price} 
                            onChange={(v) => updateMenuItem(page.id, item.id, 'price', v)} 
                            className="text-lg font-lora font-semibold tracking-wide whitespace-nowrap text-[#2a2822] mb-1" 
                          />
                        )}
                      </div>

                      {/* Render Sub-items (Options like Chicken/Veg) */}
                      {item.subItems && item.subItems.length > 0 && (
                        <div className="mt-2 flex flex-col gap-1">
                          {item.subItems.map((sub, subIndex) => (
                            <div key={sub.id} className="flex items-center gap-2 group/sub">
                              <EditableText 
                                value={sub.name} 
                                onChange={(v) => updateSubItem(page.id, item.id, sub.id, 'name', v)} 
                                className="text-[14px] font-lora text-[#2a2822] flex-1" 
                                renderValue={(val) => {
                                  const parts = val.split(/(\(.*?\))/);
                                  return (
                                    <>
                                      {parts.map((part, i) => 
                                        part.startsWith('(') ? (
                                          <span key={i} className="text-[11px] font-lora font-normal text-[#1a1814] italic">{part}</span>
                                        ) : (
                                          <span key={i}>{part}</span>
                                        )
                                      )}
                                    </>
                                  );
                                }}
                              />
                              <div className="flex items-center">
                                <AllergenIconsList allergens={sub.allergens} />
                              </div>
                              <div className="flex-1 border-b border-dotted border-[#b8b09d] mx-2 opacity-30"></div>
                              <EditableText 
                                value={sub.price} 
                                onChange={(v) => updateSubItem(page.id, item.id, sub.id, 'price', v)} 
                                className="text-[14px] font-lora font-bold text-[#2a2822]" 
                              />
                              <button 
                                onClick={() => deleteSubItem(page.id, item.id, sub.id)}
                                className="text-red-300 hover:text-red-500 no-print opacity-0 group-hover/sub:opacity-100 transition"
                              >
                                <Trash2 size={12} />
                              </button>
                            </div>
                          ))}
                          <button 
                            onClick={() => addSubItem(page.id, item.id)}
                            className="text-[10px] text-[#8b8471] hover:text-[#5c5643] no-print mt-1 self-start flex items-center gap-1 font-bold"
                          >
                            <Plus size={10} /> ADD OPTION
                          </button>
                        </div>
                      )}

                      {/* Allergen Toggle UI */}
                      <div className={`no-print absolute left-0 bg-[#fdfaf3] border border-[#d8d0b7] shadow-2xl p-4 sm:p-3 z-[60] flex flex-col gap-2 w-[300px] sm:w-[320px] opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-all pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto rounded-md ${itemIndex > 2 ? 'bottom-[90%] mb-2' : 'top-full mt-2'}`}>
                        {/* Hover Bridge */}
                        <div className={`absolute left-0 right-0 h-8 bg-transparent hidden sm:block ${itemIndex > 2 ? 'top-full' : 'bottom-full'}`} />
                        <div className="w-full text-[10px] uppercase tracking-widest text-[#8b8471] mb-1 font-lora font-bold border-b border-[#d8d0b7] pb-1">Toggle Allergens</div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
                          {(['milk', 'nuts', 'gluten', 'fish', 'eggs', 'soya', 'crustaceans', 'celery', 'peanuts', 'sulphites', 'mustard', 'sesame'] as AllergenType[]).map(a => (
                            <button
                              key={a}
                              onClick={() => toggleAllergen(page.id, item.id, a)}
                              className={`px-2 py-2 sm:py-1.5 text-[9px] sm:text-[10px] uppercase tracking-widest border transition font-lora rounded-sm flex items-center justify-center gap-1 ${item.allergens.includes(a) ? 'bg-[#2a2822] text-[#f5ead5] border-[#2a2822]' : 'bg-white text-[#5c5643] border-[#d8d0b7] hover:bg-[#e8dfc7]'}`}
                              suppressHydrationWarning
                            >
                              {item.allergens.includes(a) && <div className="w-1 h-1 rounded-full bg-amber-400" />}
                              {a}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Full dotted separator between items */}
                      {itemIndex < page.items.length - 1 && (
                        (page.id === 'page-sides' ? page.items[itemIndex+1].isHeader : !page.items[itemIndex+1].isHeader) && (
                          <div className={`w-full border-b-[1px] border-dotted border-[#b8b09d] ${page.id === 'page-sides' ? 'mt-1 mb-1' : 'mt-3 mb-1'} opacity-60`}></div>
                        )
                      )}
                    </div>
                    </Fragment>
                  )
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
                  {isLibraryEnabled && (
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
                  )}
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
        )
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
