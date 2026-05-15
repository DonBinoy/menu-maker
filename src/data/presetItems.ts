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
    name: "Papadam (2 pcs)",
    description_sv: "Krispig majs, ris och linsmjöl bröd. Serveras med mango chutney.",
    description_en: "Crispy corn, rice and lentil flour bread. Served with mango chutney.",
    price: "30 kr",
    allergens: [],
    category: "STARTERS"
  },
  {
    name: "Samosas (1 st)",
    description_sv: "Stekt vetemjöl skorpa med kryddig fyllning, serveras med mango koriander-mint-chili och tamarind chutney.",
    description_en: "Fried wheat flour short crust with savoury filling, served with mango, coriander-mint-chilli and tamarind chutney.",
    price: "50 kr",
    allergens: ["gluten"],
    category: "STARTERS"
  },
  {
    name: "Chat pata Samosa Chaat",
    description_sv: "En annan läcker indisk aptitretare som har krossad samosa som bas, toppad med varm kikärtscurry tillagad i svart te.",
    description_en: "Another fine dainty Indian appetizer that has battered samosa as the base, topped with hot chickpea curry cooked in black tea.",
    price: "90 kr",
    allergens: ["gluten"],
    category: "STARTERS"
  },
  {
    name: "Pakoras (3 pcs)",
    description_sv: "Klassisk indisk fingermat – serveras med mango, koriander-mint-chili och tamarind chutney.",
    description_en: "Classic Indian fingerfood – served with mango, coriander-mint-chilli and tamarind chutney.",
    price: "65 kr",
    allergens: [],
    category: "STARTERS"
  },
  {
    name: "Bread Pakoras (4 pcs)",
    description_sv: "Morot, ingefära och vitlök formade kulor med tillsatt majsmjöl och insmetade med cornflakes och sedan friterade.",
    description_en: "Carrot, ginger and garlic shaped into bullets by adding cornflour and battered with cornflakes then deep-fried.",
    price: "80 kr",
    allergens: ["gluten"],
    category: "STARTERS"
  },
  {
    name: "Golgappe (6 pcs)",
    description_sv: "Känd som “Pani Puri” består av runda ihåliga stekta bröd fyllda med smaksatt myntavatten, tamarind, koriander-mint-chili.",
    description_en: "Known as “Pani Puri” consists of round hollow of fried bread filled with flavoured mint water, tamarind, coriander-mint-chilli.",
    price: "80 kr",
    allergens: ["gluten"],
    category: "STARTERS"
  },
  {
    name: "Gandhi’s Revenge Golgappa Chaat",
    description_sv: "Kryddig chaat med krispiga puff puri bollar fyllda med potatis och svarta kikärtor.",
    description_en: "Spicy chaat that is made with crispy puffed puri balls filled with boiled potato and black chickpea.",
    price: "99 kr",
    allergens: ["gluten", "milk"],
    category: "STARTERS"
  },

  // CHICKEN CURRIES
  {
    name: "Davate Punjab",
    description_sv: "Mer känd som “Teekha Murgh”. Curry med fänkålsfrön, curryblad, mynta och svart kummi.",
    description_en: "Known as “Teekha Murgh”. Curry with fennelseeds, curryleaves, mint and black cumin.",
    price: "170 kr",
    allergens: [],
    category: "CURRYS CHICKEN"
  },
  {
    name: "Shan-e-Kashmir",
    description_sv: "Curry med saffran, harissa pasta, rosvatten, honung, apelsin, kanel, mandel och sesamfrön.",
    description_en: "Curry with saffron, harissa paste, rosewater, honey, orange-syrup, cinnamon, almond and sesameseeds.",
    price: "195 kr",
    allergens: ["nuts", "sesame"],
    category: "CURRYS CHICKEN"
  },
  {
    name: "Jalfrezi",
    description_sv: "Curry med paprika, yoghurt, lök och rikligt med chili.",
    description_en: "Curry with peppers, yoghurt, onion and plenty of chillies.",
    price: "170 kr",
    allergens: ["milk"],
    category: "CURRYS CHICKEN"
  },
  {
    name: "Chicken Tikka Masala",
    description_sv: "Grillad marinerad kyckling i kryddad tomat och ingefära baserad curry.",
    description_en: "Grilled marinated chicken in a spicy tomato and ginger-based curry.",
    price: "170 kr",
    allergens: ["milk"],
    category: "CURRYS CHICKEN"
  },
  {
    name: "Butter Chicken",
    description_sv: "Curry med tomat, yoghurt, riven kokos, grädde, smör och tandoori masala.",
    description_en: "Curry with tomatoes, yoghurt, butter, coconut, cream and tandoori masala.",
    price: "170 kr",
    allergens: ["milk"],
    category: "CURRYS CHICKEN"
  },
  {
    name: "Murgh Makhni",
    description_sv: "Curry med yoghurt, smör, grädde, riven kokos, och garam masala.",
    description_en: "Curry with yoghurt, butter, cream, coconut, garam masala.",
    price: "170 kr",
    allergens: ["milk"],
    category: "CURRYS CHICKEN"
  },
  {
    name: "Mango Chicken",
    description_sv: "Kycklingfilé i bitar tillagade i en rik, krämig, mango-infuserad curry med aromatiska kryddor.",
    description_en: "Chicken chunks cooked in rich, creamy, mango-infused curry with aromatic spices.",
    price: "195 kr",
    allergens: [],
    category: "CURRYS CHICKEN"
  },
  {
    name: "Chicken Dhaba Karahai",
    description_sv: "Djupa och intensiva smaksat kyckling curry, mör textur och balanserade kryddor.",
    description_en: "Deep and intense flavoured chicken curry, bold in texture and spice.",
    price: "170 kr",
    allergens: [],
    category: "CURRYS CHICKEN"
  },
  {
    name: "Chili Chicken",
    description_sv: "Indo-kinesisk curry i sötsur sås med soja, tomat, paprika, stekt lök och rörsocker.",
    description_en: "Indo-Chinese curry chicken in sweet and sour sauce with soy,tomato, peppers, fried onion and canesuger.",
    price: "170 kr",
    allergens: ["soya"],
    category: "CURRYS CHICKEN"
  },
  {
    name: "Adraki Kukkad",
    description_sv: "Aromatisk och smakfull curry med massor av ingefära.",
    description_en: "Aromatic and tasteful curry with alot of ginger.",
    price: "170 kr",
    allergens: [],
    category: "CURRYS CHICKEN"
  },

  // VEGETARIAN CURRIES
  {
    name: "Palaak Paneer",
    description_sv: "Vår hemmagjorda indiska ost i en spenatbaserad curry.",
    description_en: "Homemade indian cheese in a spinach based curry.",
    price: "155 kr",
    allergens: ["milk"],
    category: "CURRYS VEGETARIAN"
  },
  {
    name: "Chilli Paneer",
    description_sv: "Vår hemmagjorda indiska ost serveras i en sötsur gryta baserad på tomat, ingefära, soja, lök och paprika.",
    description_en: "Homemade indian cheese served in a sweet and sour curry based on tomato, soy, peppers and onion.",
    price: "155 kr",
    allergens: ["milk", "soya"],
    category: "CURRYS VEGETARIAN"
  },
  {
    name: "Punjabi Daal",
    description_sv: "Linsgryta på fyra olika linser och röda kidneybönor.",
    description_en: "Blend of four different lentils and red kidney beans based curry.",
    price: "155 kr",
    allergens: [],
    category: "CURRYS VEGETARIAN"
  },
  {
    name: "Veggie Balls Korma",
    description_sv: "Säsongens grönsaker rullas till små bollar, paneras och friteras. Serveras i en curry på lök, malda cashewnötter och kokosmjölk.",
    description_en: "Seasonal vegetables rolled into balls, breaded and deepfried. Served in a curry with onion, grinded cashewnuts and coconutmilk.",
    price: "155 kr",
    allergens: ["nuts", "gluten"],
    category: "CURRYS VEGETARIAN"
  },
  {
    name: "Ambersari Cholle",
    description_sv: "Kikärtsgryta, en variant av chana masala med smaker av svart te och bockhornsklöver.",
    description_en: "Chickpea curry - A version of chana masala with flavours of black tea and fenugreek leavs.",
    price: "155 kr",
    allergens: [],
    category: "CURRYS VEGETARIAN"
  },
  {
    name: "Shahi Navratan Veg",
    description_sv: "Säsongens grönsaker i en curry med kokos, grädde, smör och yoghurt.",
    description_en: "Seasonal vegetables in a curry with coconut-cream, butter and yoghurt.",
    price: "155 kr",
    allergens: ["milk"],
    category: "CURRYS VEGETARIAN"
  },
  {
    name: "Paneer Tikka Butter Masala",
    description_sv: "Hemmalagad Indisk ost curry som kokas i en sås bestående av tomat, ingefära, smör och grädde.",
    description_en: "Home-made Indian cheese curry, cooked along tomato, ginger, butter and cream.",
    price: "155 kr",
    allergens: ["milk"],
    category: "CURRYS VEGETARIAN"
  },
  {
    name: "Daal Makhni",
    description_sv: "Klassisk Punjabi rätt tillagad med svarta linser, smör, grädde och kryddor.",
    description_en: "Classic Punjabi dish made black lentils, butter, cream and spices.",
    price: "155 kr",
    allergens: ["milk"],
    category: "CURRYS VEGETARIAN"
  },

  // FISH & SEAFOOD
  {
    name: "Coconut Curry (Shrimps)",
    description_sv: "Kryddig curry med stora räkor och smaker av kokosmjölk, koriander, grön paprika och grön chili.",
    description_en: "Spiced curry of big shrimps with flavours of coconut-milk, corinader, green paprika and green chilli paste.",
    price: "185 kr",
    allergens: ["crustaceans"],
    category: "CURRY FISH AND SEA FOOD"
  },
  {
    name: "Malai Macchi",
    description_sv: "Kryddad torsk curry med skirat smör, yoghurt, grädde och bockhornskläver.",
    description_en: "Spiced Cod Curry with butter, yoghurt, cream and fenugreek leaves.",
    price: "185 kr",
    allergens: ["fish", "milk"],
    category: "CURRY FISH AND SEA FOOD"
  },

  // BEEF
  {
    name: "Kofta Karahi",
    description_sv: "Indiska köttbullar i en aromatisk och välbalanserad curry.",
    description_en: "Indian meatballs in aromatic and well balanced Curry.",
    price: "180 kr",
    allergens: [],
    category: "CURRY BEEF"
  },
  {
    name: "Vindaloo (Beef)",
    description_sv: "Originalrecept på nöttkött marinerat i vinäger, vitlök och chili.",
    description_en: "Original recipe of beef marinated in vinegar, garlic and chili.",
    price: "180 kr",
    allergens: [],
    category: "CURRY BEEF"
  },

  // LAMB
  {
    name: "Gosht Darbari",
    description_sv: "Curry med Kanel, kardemumma, muskot, kummin, yoghurt och stekt lök.",
    description_en: "Curry with cinnamon, black cardamom, nutmeg, cumin, yoghurt and fried onion.",
    price: "189 kr",
    allergens: ["milk"],
    category: "CURRYS LAMB"
  },
  {
    name: "Palaak Lamb",
    description_sv: "Spenatbaserad curry med mört lamm.",
    description_en: "Spinach based curry with tender-lamb.",
    price: "189 kr",
    allergens: [],
    category: "CURRYS LAMB"
  },
  {
    name: "Muglai Lamb (Korma)",
    description_sv: "Curry på lök, malda cashewnötter, kokosmjölk, lagerblad, muskot och kardemumma.",
    description_en: "Also known as “Korma”. Curry with onion sauce, cashewpaste, coconut milk, bayleaves and nutmeg.",
    price: "189 kr",
    allergens: ["nuts"],
    category: "CURRYS LAMB"
  },

  // BIRYANI
  {
    name: "Punjabi Biryani (Chicken)",
    description_sv: "Stekt ris med säsongens grönsaker och indiska kryddor. Serveras med raita.",
    description_en: "Fried rice with seasonal vegetables and Indian spices. Served with raita.",
    price: "170 kr",
    allergens: ["milk"],
    category: "PUNJABI BIRYANI"
  },
  {
    name: "Punjabi Biryani (Lamb)",
    description_sv: "Stekt ris med säsongens grönsaker och indiska kryddor. Serveras med raita.",
    description_en: "Fried rice with seasonal vegetables and Indian spices. Served with raita.",
    price: "180 kr",
    allergens: ["milk"],
    category: "PUNJABI BIRYANI"
  }
];
