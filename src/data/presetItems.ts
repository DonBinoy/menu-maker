import { AllergenType } from "@/components/AllergenIcons";

export type PresetMenuItem = {
  name: string;
  description_sv: string;
  description_en: string;
  price: string;
  allergens: AllergenType[];
  category: string;
};

export const PRESET_ITEMS: PresetMenuItem[] = [
  // STARTERS
  {
    name: "Papadam (2 pcs) (Vegan)",
    description_sv: "Krispig majs, ris och linsmjöl bröd. Serveras med mango chutney.",
    description_en: "Crispy corn, rice and lentil-flour bread. Served with mango chutney.",
    price: "35 kr",
    allergens: [],
    category: "STARTERS"
  },
  {
    name: "Samosas (1 st)",
    description_sv: "Stekt vetemjöl Pirog med kryddig fyllning, serveras med mango koriander-mynta-chili och tamarind chutney.",
    description_en: "Fried wheat flour short crust with savoury filling, served with mango, coriander-mint-chilli and tamarind chutney.",
    price: "50 kr",
    allergens: ["gluten"],
    category: "STARTERS"
  },
  {
    name: "Chat pata Samosa Chaat (Can be made Vegan)",
    description_sv: "En annan läcker indisk aptitretare som har krossad samosa som bas, toppad med varm kikärtsgryta tillagad i svart te. Tamarind och koriander-mynta-chili chutney, stekt krispig potatis nudlar, hackad lök, färsk koriander och granatäpple.",
    description_en: "Another fine dainty Indian appetizer that has smashed samosa as the base, topped with hot chickpea curry cooked in black tea. It is then filled with tamarind and coriander-mint-chili chutney, fried crispy potato-noodles, chopped onions, fresh coriander and pomegranate.",
    price: "95 kr",
    allergens: ["gluten", "milk"],
    category: "STARTERS"
  },
  {
    name: "Pakoras (3 pcs)",
    description_sv: "Klassisk indisk Plockmat – serveras med mango, koriander-mynta-chili och tamarind chutney.",
    description_en: "Classic Indian finger-food – served with mango, coriander-mint-chilli and tamarind chutney.",
    price: "80 kr",
    allergens: ["milk"],
    category: "STARTERS"
  },
  {
    name: "Blooming Onion (Can be made Vegan )",
    description_sv: "En version av Onion Bhaji, friterad skuren lök likt en blomma. Serveras med mango, koriander-mynta-chilli och tamarindsås.",
    description_en: "A version of onion bhaji, onion cut as a flower, breaded and fried. Served with mango, coriander-mint-chilli and tamarind chutney.",
    price: "90 kr",
    allergens: ["milk", "mustard", "eggs", "gluten"],
    category: "STARTERS"
  },
  {
    name: "Pataka Papdi (Can be made Vegan )",
    description_sv: "Krispiga vetemjölskex som bas, linsdumplings, sötad yoghurt, koriander-mynta-chilli och tamarind chutney, Sev som är knapriga nudlar från kikärtsmjöl, Toppat med granatäpple, färsk koriander och hackad rödlök. Sprinklad med chat masala.",
    description_en: "This is meant to be like fire-crackers in your mouth, with crispy wheat-flour crackers as the base; lentil dumpling, sweet yoghurt, coriander-mint-chilli and tamarind chutney, sev (crunchy noodles from chickpea flour), garnished with pomegranate, fresh coriander and chopped red onions and sprinkled with chaat masala.",
    price: "90 kr",
    allergens: ["milk", "mustard", "eggs", "gluten"],
    category: "STARTERS"
  },
  {
    name: "Tangri Kebab (Not Halal)",
    description_sv: "Friterade Dhaba- stil panerade kycklingklubbor marinerade i aromatiska kryddor, vitlök-ingefära och citron, Serveras med tamarind, koriander-mynta-chili och raita sås.",
    description_en: "Dhaba style breaded chicken drumsticks marinated in aromatic spices, garlic-ginger paste and lemon juice. Fried and served with tamarind and coriander-mint-chilli and raita sauce.",
    price: "85 kr",
    allergens: ["lupin", "milk", "eggs", "gluten"],
    category: "STARTERS"
  },
  {
    name: "Papdi Chaat (Can be made Vegan )",
    description_sv: "Stekt potatisbiff med söt och syrlig smak, krispiga vetemjölsstekta kakor, linsdumplings toppat med en kryddig kikärtssås och mango, koriander-mynta-chili, tamarind chutney och garnerad med lök, äpplen, gurka och koriander.",
    description_en: "Sweet and tangy flavoured fried potato patty, crispy wheat flour fried cakes, lentil dumplings, topped with a spicy chickpea gravy and mango, coriander-mint-chilli, tamarind chutney, and sprinkled with onions, apples, cucumber and coriander.",
    price: "100 kr",
    allergens: ["lupin", "gluten"],
    category: "STARTERS"
  },

  // CHICKEN CURRIES
  {
    name: "Davate Punjab",
    description_sv: "Mer känd som “Teekha Murgh”. Curry med fänkålsfrön, curryblad, mynta och svart kummin.",
    description_en: "Known as “Teekha Murgh”. Curry with fennel-seeds, curry-leaves, mint and black cumin.",
    price: "195 kr",
    allergens: [],
    category: "CURRYS CHICKEN"
  },
  {
    name: "Shan-e-Kashmir",
    description_sv: "Curry med saffran, harissa pasta, rosvatten, honung, apelsin, kanel, mandel och sesamfrön.",
    description_en: "Curry with saffron, harissa paste, rose water, honey, orange-syrup, cinnamon, almond and sesame seeds.",
    price: "215 kr",
    allergens: ["nuts", "sesame"],
    category: "CURRYS CHICKEN"
  },
  {
    name: "Jalfrezi",
    description_sv: "Curry med paprika, yoghurt, lök och rikligt med chili.",
    description_en: "Curry with peppers, yoghurt, onions and plenty of chillies.",
    price: "195 kr",
    allergens: ["milk"],
    category: "CURRYS CHICKEN"
  },
  {
    name: "Chicken Tikka Masala",
    description_sv: "Grillad marinerad kyckling i kryddad tomat och ingefära baserad curry.",
    description_en: "Grilled marinated chicken in a spicy tomato and ginger-based curry.",
    price: "195 kr",
    allergens: [],
    category: "CURRYS CHICKEN"
  },
  {
    name: "Butter Chicken",
    description_sv: "Curry med tomat, yoghurt, riven kokos, grädde, smör och tandoori masala.",
    description_en: "Curry with tomatoes, yoghurt, butter, coconut, cream and tandoori masala.",
    price: "185 kr",
    allergens: ["milk", "mustard"],
    category: "CURRYS CHICKEN"
  },
  {
    name: "Murgh Makhni",
    description_sv: "Curry med yoghurt, smör, grädde, riven kokos, och garam masala.",
    description_en: "Curry with yoghurt, butter, cream, coconut and garam masala.",
    price: "195 kr",
    allergens: ["milk"],
    category: "CURRYS CHICKEN"
  },
  {
    name: "Mango Chicken",
    description_sv: "En söt och mild curry med bitar av kyckling och mango.",
    description_en: "A sweet and mild chicken curry with mango pieces.",
    price: "195 kr",
    allergens: [],
    category: "CURRYS CHICKEN"
  },

  // VEGETARIAN CURRIES
  {
    name: "Mix Veg",
    description_sv: "Säsongens grönsaker ångkokas i en stekt lök och tomat baserad sås.",
    description_en: "Seasonal vegetables steamed in fried onions and tomato-based sauce. (Vegan)",
    price: "170 kr",
    allergens: ["soya"],
    category: "CURRYS VEGETARIAN"
  },
  {
    name: "Shahi Navratan Veg",
    description_sv: "Säsongens grönsaker curry med kokos, grädde, smör och yoghurt.",
    description_en: "Seasonal vegetable curry with coconut-cream, butter and yoghurt.",
    price: "170 kr",
    allergens: ["milk", "soya"],
    category: "CURRYS VEGETARIAN"
  },
  {
    name: "Tadka Daal",
    description_sv: "Linsgryta på en blandning av fyra olika gula linser.",
    description_en: "Lentil curry with a blend of four different yellow lentils. (Vegan)",
    price: "170 kr",
    allergens: ["soya"],
    category: "CURRYS VEGETARIAN"
  },
  {
    name: "Mutter Paneer",
    description_sv: "En curry bestående av vår hemmalagade ost och ärtor som kokas i en tomat och lök baserad sås.",
    description_en: "Curry with home-made Indian cheese and peas, cooked in tomato and onion-based sauce. ( Can be done vegan with Tofu/Soya chunks )",
    price: "170 kr",
    allergens: ["milk", "soya"],
    category: "CURRYS VEGETARIAN"
  },
  {
    name: "Paneer Tikka Butter Masala",
    description_sv: "Hemmalagad Indisk ost curry som kokas i en sås bestående av tomat, ingefära, smör och grädde.",
    description_en: "Home-made Indian cheese curry, cooked along tomatoes, ginger, butter and cream.",
    price: "170 kr",
    allergens: ["milk"],
    category: "CURRYS VEGETARIAN"
  },
  {
    name: "Daal Makhni",
    description_sv: "Klassisk Punjabi rätt, tillagad med svarta linser, smör, grädde och kryddor.",
    description_en: "Classic Punjabi dish made with black lentils, butter, cream and spices. (Can be made Vegan)",
    price: "170 kr",
    allergens: ["milk", "soya"],
    category: "CURRYS VEGETARIAN"
  },
  {
    name: "Karahi Paneer",
    description_sv: "Indisk Färskost, tillagad med lök, tomat, vitlök och ingefärasås med bitar av paprika och lök.",
    description_en: "Indian cheese curry cooked in onion, tomato, garlic and ginger sauce with chunks of peppers and onions. ( Can be done vegan with Tofu/Soya chunks )",
    price: "170 kr",
    allergens: ["milk", "soya"],
    category: "CURRYS VEGETARIAN"
  },
  {
    name: "Palaak Paneer",
    description_sv: "Vår hemmagjorda indiska ost i en spenatbaserad curry.",
    description_en: "Home-made Indian cheese in a spinach based curry. ( Can be done vegan with Tofu/Soya chunks )",
    price: "170 kr",
    allergens: ["milk"],
    category: "CURRYS VEGETARIAN"
  },

  // SIDE ORDERS
  {
    name: "Mixed Salad",
    description_sv: "",
    description_en: "",
    price: "20 kr",
    allergens: [],
    category: "SIDE ORDERS"
  },
  {
    name: "Yoghurt sås/Yoghurt Sauce",
    description_sv: "",
    description_en: "",
    price: "",
    allergens: ["milk"],
    category: "SIDE ORDERS"
  },
  {
    name: "Pickles (Vegan)",
    description_sv: "Fråga personalen om alternativen. Please ask the staff regarding selection",
    description_en: "",
    price: "30 kr",
    allergens: ["mustard", "sesame"],
    category: "SIDE ORDERS"
  }
];
