let cuisines = [
    "Afghan",
    "Alpine, Modern Cuisine",
    "Alsatian",
    "Alsatian, Country cooking",
    "Alsatian, Traditional Cuisine",
    "American",
    "American, American Contemporary",
    "American, Bakery",
    "American, Californian",
    "American, Chinese",
    "American, Classic Cuisine",
    "American, Contemporary",
    "American, French",
    "American, Italian",
    "American, Italian-American",
    "American, Southern",
    "Anago / Saltwater Eel",
    "Andalusian",
    "Apulian",
    "Asian",
    "Asian Contemporary",
    "Asian Contemporary, Modern Cuisine",
    "Asian Influences",
    "Asian Influences, Classic French",
    "Asian Influences, Contemporary",
    "Asian Influences, Creative",
    "Asian, Asian Contemporary",
    "Asian, Asian Influences",
    "Asian, Chinese",
    "Asian, Contemporary",
    "Asian, Creative",
    "Asian, French",
    "Asian, Fusion",
    "Asian, Modern Cuisine",
    "Asian, Sichuan",
    "Asian, South East Asian",
    "Asian, Taiwanese",
    "Austrian",
    "Austrian, Contemporary",
    "Austrian, Country cooking",
    "Austrian, Traditional Cuisine",
    "Barbecue",
    "Barbecue, American",
    "Barbecue, Regional Cuisine",
    "Basque",
    "Basque, Modern Cuisine",
    "Bavarian, International",
    "Beef Specialities",
    "Beijing Cuisine",
    "Belgian",
    "Belgian, Classic Cuisine",
    "Brazilian",
    "Brazilian, Contemporary",
    "Brazilian, Regional Cuisine",
    "Breton",
    "British Contemporary",
    "British Contemporary, Classic Cuisine",
    "Bulgogi",
    "Burmese",
    "Calabrian",
    "Californian",
    "Californian, American",
    "Californian, Contemporary",
    "Californian, Creative",
    "Californian, Italian Contemporary",
    "Californian, Market Cuisine",
    "Californian, Mediterranean Cuisine",
    "Californian, Modern Cuisine",
    "Californian, Pizza",
    "Californian, Vegetarian",
    "Cambodian, Contemporary",
    "Campanian",
    "Campanian, Mediterranean Cuisine",
    "Campanian, Regional Cuisine",
    "Cantonese",
    "Cantonese Roast Meats",
    "Cantonese, Sichuan",
    "Caribbean, Regional Cuisine",
    "Catalan",
    "Catalan, Contemporary",
    "Catalan, Grills",
    "Catalan, Traditional Cuisine",
    "Central Asian",
    "Central Asian, Regional Cuisine",
    "Chankonabe",
    "Chao Zhou",
    "Chicken Specialities",
    "Chinese",
    "Chinese Contemporary",
    "Chinese, Asian",
    "Chinese, Beijing Cuisine",
    "Chinese, Cantonese",
    "Chinese, Contemporary",
    "Chinese, Dim Sum",
    "Chinese, Duck Specialities",
    "Chinese, Dumplings",
    "Chinese, Hunanese",
    "Chinese, Modern Cuisine",
    "Chinese, Noodles",
    "Chinese, Regional Cuisine",
    "Chinese, Shanghainese",
    "Chinese, Sichuan",
    "Chinese, Taiwanese",
    "Chiu Chow",
    "Chueotang",
    "Classic Cuisine",
    "Classic Cuisine, Belgian",
    "Classic Cuisine, Contemporary",
    "Classic Cuisine, Country cooking",
    "Classic Cuisine, Creative",
    "Classic Cuisine, Cuisine from Abruzzo",
    "Classic Cuisine, French",
    "Classic Cuisine, French Contemporary",
    "Classic Cuisine, Home Cooking",
    "Classic Cuisine, International",
    "Classic Cuisine, Italian Contemporary",
    "Classic Cuisine, Market Cuisine",
    "Classic Cuisine, Mediterranean Cuisine",
    "Classic Cuisine, Modern Cuisine",
    "Classic Cuisine, Modern French",
    "Classic Cuisine, Regional Cuisine",
    "Classic Cuisine, Seasonal Cuisine",
    "Classic Cuisine, Traditional Cuisine",
    "Classic French",
    "Classic French, Classic Cuisine",
    "Classic French, Contemporary",
    "Classic French, Country cooking",
    "Classic French, Creative",
    "Classic French, French",
    "Classic French, Home Cooking",
    "Classic French, International",
    "Classic French, Market Cuisine",
    "Classic French, Mediterranean Cuisine",
    "Classic French, Modern Cuisine",
    "Classic French, Regional Cuisine",
    "Classic French, Seasonal Cuisine",
    "Classic French, Traditional Cuisine",
    "Colombian",
    "Colombian, Contemporary",
    "Congee",
    "Contemporary",
    "Contemporary, Alsatian",
    "Contemporary, American",
    "Contemporary, American Contemporary",
    "Contemporary, Andalusian",
    "Contemporary, Apulian",
    "Contemporary, Asian",
    "Contemporary, Bakery",
    "Contemporary, Basque",
    "Contemporary, Californian",
    "Contemporary, Classic Cuisine",
    "Contemporary, Classic French",
    "Contemporary, Creative",
    "Contemporary, English",
    "Contemporary, European Contemporary",
    "Contemporary, French",
    "Contemporary, French Contemporary",
    "Contemporary, Fusion",
    "Contemporary, Innovative",
    "Contemporary, International",
    "Contemporary, Italian",
    "Contemporary, Japanese Contemporary",
    "Contemporary, Market Cuisine",
    "Contemporary, Mediterranean Cuisine",
    "Contemporary, Modern Cuisine",
    "Contemporary, Modern French",
    "Contemporary, Regional Cuisine",
    "Contemporary, Seafood",
    "Contemporary, Seasonal Cuisine",
    "Contemporary, Sicilian",
    "Contemporary, Traditional Cuisine",
    "Contemporary, Venetian",
    "Corsican",
    "Corsican, Modern Cuisine",
    "Country cooking",
    "Country cooking, Alpine",
    "Country cooking, Alsatian",
    "Country cooking, Asian",
    "Country cooking, Classic Cuisine",
    "Country cooking, Classic French",
    "Country cooking, Contemporary",
    "Country cooking, Creative",
    "Country cooking, Cuisine from the Marches",
    "Country cooking, Emilian",
    "Country cooking, German",
    "Country cooking, Grills",
    "Country cooking, Home Cooking",
    "Country cooking, International",
    "Country cooking, Market Cuisine",
    "Country cooking, Mediterranean Cuisine",
    "Country cooking, Modern Cuisine",
    "Country cooking, Regional Cuisine",
    "Country cooking, Seasonal Cuisine",
    "Country cooking, Swiss",
    "Country cooking, Traditional Cuisine",
    "Crab Specialities",
    "Creative",
    "Creative British",
    "Creative British, Modern Cuisine",
    "Creative French",
    "Creative French, Classic Cuisine",
    "Creative French, Creative",
    "Creative French, Market Cuisine",
    "Creative French, Modern Cuisine",
    "Creative French, Modern French",
    "Creative, Alpine",
    "Creative, Andalusian",
    "Creative, Asian Contemporary",
    "Creative, Castilian",
    "Creative, Classic Cuisine",
    "Creative, Classic French",
    "Creative, Contemporary",
    "Creative, Country cooking",
    "Creative, French",
    "Creative, French Contemporary",
    "Creative, Fusion",
    "Creative, Innovative",
    "Creative, International",
    "Creative, Italian",
    "Creative, Italian Contemporary",
    "Creative, Japanese",
    "Creative, Market Cuisine",
    "Creative, Mediterranean Cuisine",
    "Creative, Modern Cuisine",
    "Creative, Modern French",
    "Creative, North African",
    "Creative, Organic",
    "Creative, Polish",
    "Creative, Regional Cuisine",
    "Creative, Sardinian",
    "Creative, Scandinavian",
    "Creative, Seafood",
    "Creative, Seasonal Cuisine",
    "Creative, Sicilian",
    "Creative, Swiss",
    "Creative, Traditional Cuisine",
    "Creative, World Cuisine",
    "Creole",
    "Croatian, Seafood",
    "Cuisine from Abruzzo",
    "Cuisine from Abruzzo, Regional Cuisine",
    "Cuisine from Alentejo",
    "Cuisine from Aveyron",
    "Cuisine from Basilicata",
    "Cuisine from Lazio, Seasonal Cuisine",
    "Cuisine from Romagna, Market Cuisine",
    "Cuisine from South West France",
    "Cuisine from South West France, Country cooking",
    "Cuisine from the Marches",
    "Cuisine from the Marches, Regional Cuisine",
    "Cuisine from Valtellina, Mediterranean Cuisine",
    "Cuisine from Valtellina, Regional Cuisine",
    "Curry",
    "Czech",
    "Danish",
    "Deli",
    "Deli, American",
    "Dim Sum",
    "Doganitang",
    "Dongbei",
    "Dubu",
    "Dumplings",
    "Dwaeji-gukbap",
    "Emilian",
    "Emilian, Classic Cuisine",
    "Emilian, Modern Cuisine",
    "Emilian, Regional Cuisine",
    "Emilian, Seasonal Cuisine",
    "Ethiopian",
    "Ethiopian, Regional Cuisine",
    "European",
    "European Contemporary",
    "European, French",
    "Filipino, Asian",
    "Filipino, Contemporary",
    "Finnish, Modern Cuisine",
    "Flemish, Regional Cuisine",
    "French",
    "French Contemporary",
    "French Contemporary, Creative French",
    "French Contemporary, French",
    "French Contemporary, Modern Cuisine",
    "French, Californian",
    "French, Classic Cuisine",
    "French, Classic French",
    "French, Contemporary",
    "French, Country cooking",
    "French, Creative",
    "French, European Contemporary",
    "French, French Contemporary",
    "French, International",
    "French, Market Cuisine",
    "French, Modern Cuisine",
    "French, Modern French",
    "French, Seasonal Cuisine",
    "French, Traditional Cuisine",
    "Friulian, Regional Cuisine",
    "Friulian, Traditional Cuisine",
    "Fugu / Pufferfish",
    "Fujian",
    "Fusion",
    "Fusion, Asian",
    "Fusion, Chinese",
    "Fusion, Contemporary",
    "Fusion, Creative",
    "Fusion, Japanese",
    "Fusion, Modern Cuisine",
    "Fusion, Regional Cuisine",
    "Fusion, Traditional Cuisine",
    "Galician",
    "Galician, Creative",
    "Gastropub",
    "Gastropub, American Contemporary",
    "Gastropub, Bavarian",
    "Gastropub, English",
    "Gejang",
    "German, Austrian",
    "German, Modern Cuisine",
    "German, Polish",
    "Gomtang",
    "Greek",
    "Greek, Regional Cuisine",
    "Grills",
    "Grills, Classic Cuisine",
    "Grills, Traditional Cuisine",
    "Hakkanese",
    "Hang Zhou",
    "Home Cooking",
    "Home Cooking, Country cooking",
    "Home Cooking, Creative French",
    "Home Cooking, Grills",
    "Hotpot",
    "Huaiyang",
    "Huaiyang, Sichuan",
    "Hubei",
    "Hunanese",
    "Hunanese, Jiangzhe",
    "Hunanese, Sichuan",
    "Hungarian",
    "Hungarian, Portuguese",
    "Indian",
    "Indian Vegetarian",
    "Indian, Asian",
    "Indian, Contemporary",
    "Indian, Gastropub",
    "Indian, Nepali",
    "Indian, Regional Cuisine",
    "Indonesian",
    "Indonesian, Thai and Vietnamese",
    "Innovative",
    "Innovative, Creative",
    "Innovative, International",
    "Innovative, Italian Contemporary",
    "Innovative, Market Cuisine",
    "Innovative, Modern Cuisine",
    "Innovative, Singaporean",
    "International",
    "International, American",
    "International, Asian",
    "International, Asian Influences",
    "International, Classic Cuisine",
    "International, Contemporary",
    "International, Country cooking",
    "International, Fusion",
    "International, Grills",
    "International, Innovative",
    "International, Market Cuisine",
    "International, Mediterranean Cuisine",
    "International, Middle Eastern",
    "International, Modern Cuisine",
    "International, Regional Cuisine",
    "International, Seafood",
    "International, Seasonal Cuisine",
    "International, Swiss",
    "International, Traditional Cuisine",
    "Irish",
    "Isan",
    "Israeli, Modern Cuisine",
    "Italian",
    "Italian Contemporary",
    "Italian Contemporary, Contemporary",
    "Italian Contemporary, Creative",
    "Italian Contemporary, Japanese",
    "Italian Contemporary, Modern Cuisine",
    "Italian Contemporary, Piedmontese",
    "Italian Contemporary, Regional Cuisine",
    "Italian, American",
    "Italian, Californian",
    "Italian, Campanian",
    "Italian, Classic Cuisine",
    "Italian, Contemporary",
    "Italian, Creative",
    "Italian, Emilian",
    "Italian, Gastropub",
    "Italian, Innovative",
    "Italian, Italian Contemporary",
    "Italian, Italian-American",
    "Italian, Mediterranean Cuisine",
    "Italian, Milanese",
    "Italian, Modern Cuisine",
    "Italian, Modern French",
    "Italian, Pizza",
    "Italian, Regional Cuisine",
    "Italian, Sardinian",
    "Italian, Seasonal Cuisine",
    "Italian, Sicilian",
    "Italian, Steakhouse",
    "Italian, Tuscan",
    "Izakaya",
    "Japanese",
    "Japanese Contemporary",
    "Japanese Contemporary, Fusion",
    "Japanese, Asian Contemporary",
    "Japanese, Classic Cuisine",
    "Japanese, Contemporary",
    "Japanese, Creative",
    "Japanese, Izakaya",
    "Japanese, Japanese Contemporary",
    "Japanese, Modern Cuisine",
    "Japanese, Noodles",
    "Japanese, Ramen",
    "Japanese, Seafood",
    "Japanese, Seasonal Cuisine",
    "Japanese, Soba",
    "Japanese, Sushi",
    "Japanese, Tempura",
    "Japanese, Traditional Cuisine",
    "Japanese, Udon",
    "Japanese, Vegan",
    "Jiangzhe",
    "Jokbal",
    "Kalguksu",
    "Korean",
    "Korean, American",
    "Korean, Asian",
    "Korean, Barbecue",
    "Korean, Contemporary",
    "Korean, Duck Specialities",
    "Korean, Korean Contemporary",
    "Korean, Steakhouse",
    "Korean, Vegetarian",
    "Kushiage",
    "Lao",
    "Latin American",
    "Latin American, Fusion",
    "Latin American, International",
    "Lebanese",
    "Ligurian",
    "Ligurian, Seasonal Cuisine",
    "Ligurian, Traditional Cuisine",
    "Lombardian",
    "Lombardian, Regional Cuisine",
    "Lombardian, Traditional Cuisine",
    "Macanese",
    "Malaysian",
    "Mandu",
    "Mantuan, Lombardian",
    "Mantuan, Seasonal Cuisine",
    "Market Cuisine",
    "Market Cuisine, Bavarian",
    "Market Cuisine, Classic Cuisine",
    "Market Cuisine, Country cooking",
    "Market Cuisine, Creative",
    "Market Cuisine, Creative French",
    "Market Cuisine, German",
    "Market Cuisine, Home Cooking",
    "Market Cuisine, International",
    "Market Cuisine, Italian",
    "Market Cuisine, Mediterranean Cuisine",
    "Market Cuisine, Modern Cuisine",
    "Market Cuisine, Modern French",
    "Market Cuisine, Regional Cuisine",
    "Market Cuisine, Regional European",
    "Market Cuisine, Seasonal Cuisine",
    "Market Cuisine, Traditional Cuisine",
    "Meats and Grills",
    "Meats and Grills, Barbecue",
    "Meats and Grills, Classic Cuisine",
    "Meats and Grills, International",
    "Meats and Grills, Regional Cuisine",
    "Meats and Grills, Traditional Cuisine",
    "Mediterranean Cuisine",
    "Mediterranean Cuisine, American Contemporary",
    "Mediterranean Cuisine, Classic Cuisine",
    "Mediterranean Cuisine, Contemporary",
    "Mediterranean Cuisine, Country cooking",
    "Mediterranean Cuisine, Creative",
    "Mediterranean Cuisine, French",
    "Mediterranean Cuisine, French Contemporary",
    "Mediterranean Cuisine, Greek",
    "Mediterranean Cuisine, International",
    "Mediterranean Cuisine, Italian",
    "Mediterranean Cuisine, Italian Contemporary",
    "Mediterranean Cuisine, Italian-American",
    "Mediterranean Cuisine, Market Cuisine",
    "Mediterranean Cuisine, Middle Eastern",
    "Mediterranean Cuisine, Modern Cuisine",
    "Mediterranean Cuisine, Regional Cuisine",
    "Mediterranean Cuisine, Seasonal Cuisine",
    "Mediterranean Cuisine, Sicilian",
    "Mediterranean Cuisine, Spanish",
    "Memil-guksu",
    "Mexican",
    "Mexican, Californian",
    "Mexican, Contemporary",
    "Mexican, Regional Cuisine",
    "Mexican, Seafood",
    "Mexican, Tex-Mex",
    "Middle Eastern",
    "Middle Eastern, Grills",
    "Middle Eastern, Vegetarian",
    "Modern British",
    "Modern British, Creative",
    "Modern British, Regional Cuisine",
    "Modern Cuisine",
    "Modern Cuisine, Alpine",
    "Modern Cuisine, Alsatian",
    "Modern Cuisine, Asian Contemporary",
    "Modern Cuisine, Asian Influences",
    "Modern Cuisine, Catalan",
    "Modern Cuisine, Classic Cuisine",
    "Modern Cuisine, Classic French",
    "Modern Cuisine, Contemporary",
    "Modern Cuisine, Country cooking",
    "Modern Cuisine, Creative",
    "Modern Cuisine, Cuisine from Romagna",
    "Modern Cuisine, Cuisine from the Marches",
    "Modern Cuisine, Danish",
    "Modern Cuisine, European",
    "Modern Cuisine, French",
    "Modern Cuisine, French Contemporary",
    "Modern Cuisine, Fusion",
    "Modern Cuisine, Innovative",
    "Modern Cuisine, International",
    "Modern Cuisine, Irish",
    "Modern Cuisine, Italian",
    "Modern Cuisine, Italian Contemporary",
    "Modern Cuisine, Japanese Contemporary",
    "Modern Cuisine, Ligurian",
    "Modern Cuisine, Market Cuisine",
    "Modern Cuisine, Mediterranean Cuisine",
    "Modern Cuisine, Modern French",
    "Modern Cuisine, Piedmontese",
    "Modern Cuisine, Regional Cuisine",
    "Modern Cuisine, Regional European",
    "Modern Cuisine, Russian",
    "Modern Cuisine, Sardinian",
    "Modern Cuisine, Scottish",
    "Modern Cuisine, Seafood",
    "Modern Cuisine, Seasonal Cuisine",
    "Modern Cuisine, Sicilian",
    "Modern Cuisine, Spanish",
    "Modern Cuisine, Sushi",
    "Modern Cuisine, Swedish",
    "Modern Cuisine, Traditional Cuisine",
    "Modern Cuisine, Umbrian",
    "Modern Cuisine, World Cuisine",
    "Modern French",
    "Modern French, Classic Cuisine",
    "Modern French, Contemporary",
    "Modern French, Country cooking",
    "Modern French, Creative",
    "Modern French, Creative French",
    "Modern French, French",
    "Modern French, International",
    "Modern French, Market Cuisine",
    "Modern French, Mediterranean Cuisine",
    "Modern French, Modern Cuisine",
    "Modern French, Regional Cuisine",
    "Modern French, Seasonal Cuisine",
    "Modern French, World Cuisine",
    "Moroccan",
    "Moroccan, Contemporary",
    "Moroccan, North African",
    "Naengmyeon",
    "Ningbo",
    "Noodles",
    "Noodles and Congee",
    "North African, Mediterranean Cuisine",
    "Northern Thai",
    "Norwegian, Contemporary",
    "Norwegian, Modern Cuisine",
    "Obanzai",
    "Oden",
    "Okinawa Cuisine",
    "Okonomiyaki",
    "Onigiri",
    "Organic",
    "Organic, Country cooking",
    "Organic, Creative",
    "Organic, Creative French",
    "Organic, Vegetarian",
    "Pakistani, Regional Cuisine",
    "Peranakan",
    "Persian",
    "Persian, Middle Eastern",
    "Peruvian",
    "Peruvian, Chicken Specialities",
    "Peruvian, Latin American",
    "Peruvian, Market Cuisine",
    "Peruvian, South American",
    "Piedmontese",
    "Piedmontese, Classic Cuisine",
    "Piedmontese, Creative",
    "Piedmontese, Modern Cuisine",
    "Piedmontese, Regional Cuisine",
    "Pizza",
    "Pizza, American",
    "Pizza, Californian",
    "Pizza, Italian",
    "Pizza, Italian-American",
    "Polish, Dumplings",
    "Polish, Modern Cuisine",
    "Polish, Traditional Cuisine",
    "Portuguese",
    "Portuguese, Californian",
    "Portuguese, Mediterranean Cuisine",
    "Portuguese, Seafood",
    "Provençal",
    "Provençal, Modern Cuisine",
    "Ramen",
    "Regional Cuisine",
    "Regional Cuisine, Alpine",
    "Regional Cuisine, Apulian",
    "Regional Cuisine, Campanian",
    "Regional Cuisine, Castilian",
    "Regional Cuisine, Catalan",
    "Regional Cuisine, Classic Cuisine",
    "Regional Cuisine, Contemporary",
    "Regional Cuisine, Country cooking",
    "Regional Cuisine, Cuisine from Abruzzo",
    "Regional Cuisine, Cuisine from Romagna",
    "Regional Cuisine, Cuisine from Valtellina",
    "Regional Cuisine, Emilian",
    "Regional Cuisine, International",
    "Regional Cuisine, Italian",
    "Regional Cuisine, Ligurian",
    "Regional Cuisine, Lombardian",
    "Regional Cuisine, Market Cuisine",
    "Regional Cuisine, Meats and Grills",
    "Regional Cuisine, Mediterranean Cuisine",
    "Regional Cuisine, Modern Cuisine",
    "Regional Cuisine, Piedmontese",
    "Regional Cuisine, Seafood",
    "Regional Cuisine, Seasonal Cuisine",
    "Regional Cuisine, Sicilian",
    "Regional Cuisine, Spanish Contemporary",
    "Regional Cuisine, Traditional Cuisine",
    "Regional Cuisine, Umbrian",
    "Rice Dishes",
    "Rice Dishes, Traditional Cuisine",
    "Roman, Classic Cuisine",
    "Roman, Cuisine from Lazio",
    "Roman, Market Cuisine",
    "Roman, Regional Cuisine",
    "Sardinian, Regional Cuisine",
    "Savoyard",
    "Scandinavian",
    "Scandinavian, Contemporary",
    "Scottish, Traditional British",
    "Seafood",
    "Seafood, American",
    "Seafood, Classic Cuisine",
    "Seafood, Contemporary",
    "Seafood, Creative",
    "Seafood, French",
    "Seafood, Italian",
    "Seafood, Italian-American",
    "Seafood, Ligurian",
    "Seafood, Market Cuisine",
    "Seafood, Mexican",
    "Seafood, Modern Cuisine",
    "Seafood, Regional Cuisine",
    "Seafood, Sardinian",
    "Seafood, Seasonal Cuisine",
    "Seafood, Traditional Cuisine",
    "Seasonal Cuisine",
    "Seasonal Cuisine, Contemporary",
    "Seasonal Cuisine, Country cooking",
    "Seasonal Cuisine, International",
    "Seasonal Cuisine, Italian",
    "Seasonal Cuisine, Market Cuisine",
    "Seasonal Cuisine, Modern Cuisine",
    "Seasonal Cuisine, Regional Cuisine",
    "Seasonal Cuisine, Traditional Cuisine",
    "Seolleongtang",
    "Shandong",
    "Shanghainese",
    "Shanghainese, Sichuan",
    "Sharing",
    "Sharing, Country cooking",
    "Sharing, Modern Cuisine",
    "Shojin",
    "Shun Tak",
    "Sichuan",
    "Sicilian",
    "Sicilian, Regional Cuisine",
    "Sicilian, Traditional Cuisine",
    "Singaporean",
    "Singaporean and Malaysian",
    "Small eats",
    "Smørrebrød",
    "Smørrebrød, Seasonal Cuisine",
    "Soba",
    "South African",
    "South East Asian, Lao",
    "South Indian",
    "Southern",
    "Southern Thai",
    "Southern, American",
    "Southern, Creole",
    "Southern, Regional Cuisine",
    "Spanish",
    "Spanish Contemporary",
    "Spanish, Basque",
    "Spanish, Contemporary",
    "Spanish, Sharing",
    "Spanish, Spanish Contemporary",
    "Sri Lankan",
    "Sri Lankan, Contemporary",
    "Steakhouse",
    "Steakhouse, American",
    "Street Food",
    "Sujebi",
    "Sukiyaki",
    "Sushi",
    "Swedish",
    "Swiss",
    "Swiss, Market Cuisine",
    "Swiss, Mediterranean Cuisine",
    "Swiss, Traditional Cuisine",
    "Taiwanese",
    "Taizhou",
    "Tempura",
    "Teochew",
    "Teppanyaki",
    "Thai",
    "Thai contemporary",
    "Thai-Chinese",
    "Thai, Asian",
    "Thai, Asian Contemporary",
    "Thai, Californian",
    "Thai, Contemporary",
    "Thai, Fusion",
    "Thai, Traditional Cuisine",
    "Tibetan",
    "Tonkatsu",
    "Traditional British",
    "Traditional Cuisine",
    "Traditional Cuisine, Alsatian",
    "Traditional Cuisine, Belgian",
    "Traditional Cuisine, Classic Cuisine",
    "Traditional Cuisine, Classic French",
    "Traditional Cuisine, Contemporary",
    "Traditional Cuisine, Country cooking",
    "Traditional Cuisine, Creative",
    "Traditional Cuisine, Cuisine from Franche-Comté",
    "Traditional Cuisine, French",
    "Traditional Cuisine, Home Cooking",
    "Traditional Cuisine, International",
    "Traditional Cuisine, Market Cuisine",
    "Traditional Cuisine, Meats and Grills",
    "Traditional Cuisine, Mediterranean Cuisine",
    "Traditional Cuisine, Modern Cuisine",
    "Traditional Cuisine, Modern French",
    "Traditional Cuisine, Provençal",
    "Traditional Cuisine, Regional Cuisine",
    "Traditional Cuisine, Rice Dishes",
    "Traditional Cuisine, Savoyard",
    "Traditional Cuisine, Seafood",
    "Traditional Cuisine, Seasonal Cuisine",
    "Traditional Cuisine, Swiss",
    "Turkish",
    "Turkish, Regional Cuisine",
    "Tuscan",
    "Tuscan, Regional Cuisine",
    "Udon",
    "Umbrian, Regional Cuisine",
    "Unagi / Freshwater Eel",
    "Vegan",
    "Vegan, Creative",
    "Vegan, Innovative",
    "Vegan, Mexican",
    "Vegan, Vegetarian",
    "Vegetarian",
    "Vegetarian, Modern Cuisine",
    "Vegetarian, Seasonal Cuisine",
    "Venetian",
    "Venetian, Regional Cuisine",
    "Vietnamese",
    "Vietnamese, Contemporary",
    "Vietnamese, Modern Cuisine",
    "Vietnamese, Noodles",
    "Vietnamese, South East Asian",
    "World Cuisine",
    "World Cuisine, Creative French",
    "Xibei",
    "Xinjiang",
    "Yakitori",
    "Yoshoku",
    "Yukhoe",
    "Yunnanese",
    "Zhejiang"
];

// prefill scrolling text with ten distinct cuisines
function prefillScrollingText() {
    let scrolls = document.querySelectorAll('div.scrolling-text-container p');
    for (let s of scrolls) {
        let text = "";
        for (let i = 0; i < 10; i++) {
            // get a random cuisine
            let cuisine = cuisines[Math.round(Math.random()*cuisines.length)];
            // if cuisine not in text, use it
            if (!s.innerText.split(' | ').includes(cuisine)) {
                text += cuisine + (i < 9 ? ' | ' : '');
            }
            // otherwise, repeat 
            else {
                i--;
            }
        }
        s.innerText = text;
    }
}
prefillScrollingText();