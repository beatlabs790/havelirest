const menuData = {
    starters: {
        title: "Starters (Veg & Non-Veg)",
        icon: "🔥",
        items: [
            { name: "Paneer Chilli", pcs: "6 Pcs", price: 155, type: "veg", description: "Cottage cheese cubes tossed in spicy chilli sauce with bell peppers." },
            { name: "Paneer Pakora", pcs: "6 Pcs", price: 140, type: "veg", description: "Crispy fried cottage cheese fritters." },
            { name: "Veg Pakora", pcs: "6 Pcs", price: 120, type: "veg", description: "Assorted crispy deep-fried vegetable fritters." },
            { name: "Onion Pakora", pcs: "", price: 110, type: "veg", description: "Crispy spiced onion fritters." },
            { name: "Honey Chilli Potato", pcs: "", price: 150, type: "veg", description: "Crispy potato fingers tossed in a sweet and spicy honey chilli sauce." },
            { name: "French Fry", pcs: "", price: 149, type: "veg", description: "Classic golden fried potato strips." },
            { name: "Baby Corn Chilly", pcs: "", price: 175, type: "veg", description: "Tender baby corn tossed in a spicy green chilli and soy sauce." },
            { name: "Mushroom Chilly", pcs: "", price: 180, type: "veg", description: "Fresh button mushrooms stir-fried with onions, capsicum, and chilli." },
            { name: "Mushroom Baby Corn Chilly", pcs: "", price: 180, type: "veg", description: "Combination of mushroom and baby corn in a tangy spicy sauce." },
            { name: "Veg Manchurian", pcs: "8 Pcs", price: 140, type: "veg", description: "Deep-fried veggie balls tossed in tangy, savory Manchurian sauce." },
            { name: "Paneer Manchurian", pcs: "8 Pcs", price: 170, type: "veg", description: "Golden paneer cubes tossed in classic Manchurian sauce." },
            { name: "Egg Pakora", pcs: "", price: 130, type: "non-veg", description: "Deep-fried boiled eggs coated in spiced gram flour batter." },
            { name: "Chicken Pakora", pcs: "", price: 140, type: "non-veg", description: "Crispy spiced chicken fritters." },
            { name: "Chicken Manchurian", pcs: "8 Pcs", price: 190, type: "non-veg", description: "Crispy chicken bites tossed in dark soy and Manchurian sauce." },
            { name: "Chicken Chilli Boneless", pcs: "", price: 200, type: "non-veg", description: "Boneless chicken pieces tossed with green chillies, onions, and bell peppers." },
            { name: "Chicken Chilli Bone", pcs: "", price: 160, type: "non-veg", description: "Chicken on the bone cooked in Indo-Chinese chilli style." },
            { name: "Chicken Lollipop", pcs: "6 Pcs", price: 200, type: "non-veg", description: "Crispy fried chicken wings shaped like lollipops, served with hot garlic sauce." },
            { name: "Chicken 65", pcs: "", price: 230, type: "non-veg", description: "Spicy, deep-fried chicken appetizer originating from South India." }
        ]
    },
    soup: {
        title: "Soups",
        icon: "🍲",
        items: [
            { name: "Veg Manchow Soup", pcs: "", price: 55, type: "veg", description: "Spicy and hot soup with mixed vegetables, topped with crispy noodles." },
            { name: "Veg Soup", pcs: "", price: 55, type: "veg", description: "Clear, healthy vegetable broth." },
            { name: "Veg Hot & Sour Soup", pcs: "", price: 60, type: "veg", description: "Tangy and spicy broth loaded with minced mushrooms and veggies." },
            { name: "Tomato Soup", pcs: "", price: 55, type: "veg", description: "Rich, creamy, and warm tomato soup." },
            { name: "Chicken Hot & Sour Soup", pcs: "", price: 80, type: "non-veg", description: "Spicy and sour soup with chicken shreds and egg drop." },
            { name: "Chicken Garlic Soup", pcs: "", price: 70, type: "non-veg", description: "Warm chicken soup infused with roasted garlic flavor." }
        ]
    },
    desiSwad: {
        title: "Desi Swad (Mother's Kitchen Masala)",
        icon: "🏺",
        items: [
            { name: "Aloo Dum", pcs: "", price: 130, type: "veg", description: "Slow-cooked baby potatoes in a rich, spiced tomato-onion gravy." },
            { name: "Aloo Mutter", pcs: "", price: 140, type: "veg", description: "Potatoes and green peas cooked in a home-style gravy." },
            { name: "Mix Veg", pcs: "", price: 145, type: "veg", description: "Seasonal fresh vegetables cooked together in a aromatic blend of spices." },
            { name: "Paneer Butter Masala", pcs: "8 Pcs", price: 190, type: "veg", description: "Cottage cheese cubes in a rich, creamy, and buttery tomato gravy." },
            { name: "Paneer Masala", pcs: "8 Pcs", price: 180, type: "veg", description: "Paneer cooked in a semi-dry, spice-laden onion-tomato gravy." },
            { name: "Mutter Paneer", pcs: "8 Pcs", price: 165, type: "veg", description: "Classic combination of peas and paneer in a spiced gravy." },
            { name: "Paneer Handi", pcs: "", price: 175, type: "veg", description: "Paneer cooked in an earthen handi pot with rich spices." },
            { name: "Paneer Do Pyaza", pcs: "8 Pcs", price: 195, type: "veg", description: "Paneer cooked with twice the amount of onions, spices, and herbs." },
            { name: "Paneer Kadahi", pcs: "8 Pcs", price: 185, type: "veg", description: "Paneer cooked with bell peppers in fresh ground kadai spice." },
            { name: "Shahi Paneer", pcs: "", price: 249, type: "veg", description: "Royal preparation of paneer in a sweetish creamy cashew nut gravy." },
            { name: "Palak Paneer", pcs: "", price: 175, type: "veg", description: "Paneer cubes in a smooth, spiced spinach purée." },
            { name: "Paneer Punjabi", pcs: "", price: 199, type: "veg", description: "Spicy and robust Punjabi-style paneer gravy." },
            { name: "Paneer Bhurji", pcs: "", price: 199, type: "veg", description: "Scrambled cottage cheese cooked with onions, tomatoes, and green chillies." },
            { name: "Malai Kofta", pcs: "", price: 149, type: "veg", description: "Fried potato and paneer balls in a rich, creamy, mild gravy." },
            { name: "Malai Methi Paneer", pcs: "", price: 249, type: "veg", description: "Creamy gravy flavored with fresh fenugreek leaves and paneer." },
            { name: "Mushroom Butter Masala", pcs: "", price: 179, type: "veg", description: "Fresh mushrooms cooked in a rich, buttery, creamy tomato sauce." },
            { name: "Mushroom Masala", pcs: "", price: 160, type: "veg", description: "Mushrooms sautéed in a rich tomato-onion masala gravy." },
            { name: "Mushroom Curry", pcs: "", price: 165, type: "veg", description: "Home-style mushroom curry." },
            { name: "Mushroom Kadahi", pcs: "", price: 180, type: "veg", description: "Mushrooms cooked in a wok with capsicum and fresh kadai spices." },
            { name: "Mushroom Handi", pcs: "", price: 175, type: "veg", description: "Mushrooms slow-cooked in a traditional clay handi pot style." },
            { name: "Mushroom Do Pyaza", pcs: "", price: 190, type: "veg", description: "Mushrooms cooked with lots of onions in a thick gravy." }
        ]
    },
    chickenSpecial: {
        title: "Egg & Chicken Specials",
        icon: "🍗",
        items: [
            { name: "Egg Curry", pcs: "2 Pcs", price: 95, type: "non-veg", description: "Hard-boiled eggs cooked in a flavorful spiced gravy." },
            { name: "Omelette Curry", pcs: "", price: 109, type: "non-veg", description: "Spiced omelette folded and simmered in a rich gravy." },
            { name: "Egg Bhurji", pcs: "", price: 80, type: "non-veg", description: "Scrambled eggs cooked with onions, green chillies, and Indian spices." },
            { name: "Egg Do Pyaza", pcs: "", price: 139, type: "non-veg", description: "Eggs cooked in a sweet and spicy double onion gravy." },
            { name: "Egg Butter Masala", pcs: "", price: 155, type: "non-veg", description: "Boiled eggs cooked in a buttery tomato gravy." },
            { name: "Chicken Curry", pcs: "4 Pcs", price: 180, type: "non-veg", description: "Traditional home-style chicken curry." },
            { name: "Chicken Kadai", pcs: "4 Pcs", price: 210, type: "non-veg", description: "Chicken cooked in a wok with bell peppers and freshly ground spices." },
            { name: "Chicken Handi", pcs: "4 Pcs", price: 230, type: "non-veg", description: "Chicken slow-cooked in an earthen handi pot with authentic spices." },
            { name: "Chicken Stew", pcs: "", price: 235, type: "non-veg", description: "Lightly spiced, aromatic chicken dish slow-cooked with vegetables." },
            { name: "Chicken Kassa", pcs: "", price: 300, type: "non-veg", description: "Dry, spicy chicken dish cooked with caramelized onions and dry spices." },
            { name: "Chicken Dehati (Half)", pcs: "6 Pcs", price: 200, type: "non-veg", description: "Traditional local bihari-style country chicken gravy (Half portion)." },
            { name: "Chicken Dehati (Full)", pcs: "12 Pcs", price: 390, type: "non-veg", description: "Traditional local bihari-style country chicken gravy (Full portion)." },
            { name: "Chicken Butter Masala", pcs: "4 Pcs", price: 270, type: "non-veg", description: "Rich, creamy, buttery tomato-cashew gravy with tender chicken." },
            { name: "Chicken Masala", pcs: "4 Pcs", price: 240, type: "non-veg", description: "Chicken cooked in a thick spice-rich onion-tomato gravy." },
            { name: "Chicken Do Pyaza", pcs: "4 Pcs", price: 230, type: "non-veg", description: "Chicken gravy cooked with loads of caramelized onions." },
            { name: "Chicken Rara", pcs: "4 Pcs", price: 289, type: "non-veg", description: "A combination of chicken pieces and chicken minced meat cooked in rich gravy." },
            { name: "Chicken Tikka Masala", pcs: "", price: 240, type: "non-veg", description: "Roasted marinated chicken chunks in a spiced sauce." },
            { name: "Chicken Tikka Butter Masala", pcs: "", price: 250, type: "non-veg", description: "Chicken tikka pieces served in a luscious butter gravy." }
        ]
    },
    mutton: {
        title: "Mutton Delicacies",
        icon: "🐐",
        items: [
            { name: "Mutton Kassa (Half)", pcs: "2 Pcs", price: 135, type: "non-veg", description: "Rich and spicy mutton slow-cooked with caramelized onions (Half)." },
            { name: "Mutton Kassa (Full)", pcs: "4 Pcs", price: 270, type: "non-veg", description: "Rich and spicy mutton slow-cooked with caramelized onions (Full)." },
            { name: "Mutton Stew", pcs: "4 Pcs", price: 290, type: "non-veg", description: "Slow-cooked, highly aromatic mutton with whole spices and onions." },
            { name: "Mutton Do Pyaza", pcs: "4 Pcs", price: 310, type: "non-veg", description: "Tender mutton cooked with plenty of onions and spices." }
        ]
    },
    tandoor: {
        title: "Tandoor Factory (Breads & Kebabs)",
        icon: "🫓",
        items: [
            { name: "Tandoori Roti", pcs: "", price: 10, type: "veg", description: "Traditional clay-oven baked flatbread." },
            { name: "Tawa Roti", pcs: "", price: 15, type: "veg", description: "Griddle-cooked whole wheat flatbread." },
            { name: "Tandoori Butter Roti", pcs: "", price: 15, type: "veg", description: "Tandoori roti glazed with fresh butter." },
            { name: "Plain Naan", pcs: "", price: 30, type: "veg", description: "Soft, leavened flatbread baked in tandoor." },
            { name: "Butter Naan", pcs: "", price: 35, type: "veg", description: "Leavened flatbread glazed with butter." },
            { name: "Lachha Paratha", pcs: "", price: 35, type: "veg", description: "Layered, flaky tandoori flatbread." },
            { name: "Aloo Paratha", pcs: "", price: 35, type: "veg", description: "Wheat flatbread stuffed with spiced mashed potatoes." },
            { name: "Stuffed Naan", pcs: "", price: 40, type: "veg", description: "Naan stuffed with spiced potato and paneer." },
            { name: "Garlic Naan", pcs: "", price: 35, type: "veg", description: "Tandoori naan topped with chopped garlic and butter." },
            { name: "Stuffed Kulcha", pcs: "", price: 45, type: "veg", description: "Soft, fluffy bread stuffed with spices and cooked in tandoor." },
            { name: "Chicken Tandoori", pcs: "4 Pcs", price: 250, type: "non-veg", description: "Chicken marinated in yogurt and spices, roasted in clay oven." },
            { name: "Chicken Tikka", pcs: "8 Pcs", price: 180, type: "non-veg", description: "Boneless chicken chunks marinated in spices, skewered and grilled." },
            { name: "Chicken Lahsuni Tikka", pcs: "8 Pcs", price: 200, type: "non-veg", description: "Skewered chicken chunks flavored heavily with garlic and spices." },
            { name: "Chicken Hariyali Kebab", pcs: "6 Pcs", price: 170, type: "non-veg", description: "Chicken skewers marinated in fresh mint, coriander, and spinach." },
            { name: "Chicken Kali Mirch Kebab", pcs: "6 Pcs", price: 170, type: "non-veg", description: "Chicken kebab flavored with freshly crushed black peppercorns." },
            { name: "Chicken Cheese Kebab", pcs: "6 Pcs", price: 260, type: "non-veg", description: "Soft, melt-in-mouth chicken kebabs stuffed with cheddar cheese." },
            { name: "Paneer Tikka Kebab", pcs: "6 Pcs", price: 170, type: "veg", description: "Cottage cheese cubes and bell peppers marinated and grilled." }
        ]
    },
    riceBiryani: {
        title: "Rice, Pulao & Biryani",
        icon: "🍚",
        items: [
            { name: "Steam Rice", pcs: "", price: 90, type: "veg", description: "Simple, fluffy steamed basmati rice." },
            { name: "Jeera Rice", pcs: "", price: 110, type: "veg", description: "Basmati rice tempered with cumin seeds and ghee." },
            { name: "Veg Pulao", pcs: "", price: 120, type: "veg", description: "Aromatic basmati rice cooked with mixed vegetables." },
            { name: "Peas Pulao", pcs: "", price: 125, type: "veg", description: "Sweet basmati rice cooked with garden peas." },
            { name: "Veg Biryani", pcs: "", price: 120, type: "veg", description: "Fragrant basmati rice layered with spiced vegetables, served with raita." },
            { name: "Egg Biryani", pcs: "", price: 130, type: "non-veg", description: "Fragrant rice layered with spicy boiled eggs and caramelized onions." },
            { name: "Chicken Biryani", pcs: "", price: 150, type: "non-veg", description: "Layered basmati rice and chicken slow-cooked with biryani spices." },
            { name: "Chicken Egg Biryani", pcs: "", price: 160, type: "non-veg", description: "Combination of chicken and egg in a rich layered biryani." },
            { name: "Chicken Leg Biryani", pcs: "", price: 170, type: "non-veg", description: "Biryani cooked specifically with tender chicken leg pieces." },
            { name: "Chicken Leg Egg Biryani", pcs: "", price: 180, type: "non-veg", description: "Chicken leg biryani with an added hard-boiled egg." }
        ]
    },
    chineseFeast: {
        title: "Chinese Noodles & Fried Rice",
        icon: "🥢",
        items: [
            { name: "Veg Noodles", pcs: "", price: 130, type: "veg", description: "Wok-tossed noodles with crunchy vegetables." },
            { name: "Mix Veg Noodles", pcs: "", price: 140, type: "veg", description: "Stir-fried noodles loaded with special vegetable mix." },
            { name: "Paneer Noodles", pcs: "", price: 150, type: "veg", description: "Noodles with tossed cottage cheese cubes." },
            { name: "Egg Noodles", pcs: "", price: 135, type: "non-veg", description: "Stir-fried noodles with scrambled egg and veggies." },
            { name: "Chicken Noodles", pcs: "", price: 155, type: "non-veg", description: "Noodles stir-fried with shredded chicken." },
            { name: "Mix Non-Veg Noodles", pcs: "", price: 170, type: "non-veg", description: "Special noodles tossed with chicken, egg, and vegetables." },
            { name: "Veg Fried Rice", pcs: "", price: 130, type: "veg", description: "Stir-fried rice with fine chopped vegetables." },
            { name: "Mix Veg Fried Rice", pcs: "", price: 140, type: "veg", description: "Fried rice with an assortment of veggies." },
            { name: "Paneer Fried Rice", pcs: "", price: 145, type: "veg", description: "Fried rice tossed with fresh paneer cubes." },
            { name: "Egg Fried Rice", pcs: "", price: 150, type: "non-veg", description: "Classic fried rice tossed with scrambled egg." },
            { name: "Chicken Fried Rice", pcs: "", price: 160, type: "non-veg", description: "Fried rice cooked with tender shredded chicken." },
            { name: "Mix Non-Veg Fried Rice", pcs: "", price: 175, type: "non-veg", description: "Fried rice cooked with chicken, egg, and special spices." }
        ]
    },
    rollsSandwiches: {
        title: "Rolls, Burgers & Sandwiches",
        icon: "🌯",
        items: [
            { name: "Veg Roll", pcs: "", price: 50, type: "veg", description: "Crispy wrap stuffed with sautéed mixed vegetables." },
            { name: "Paneer Roll", pcs: "", price: 60, type: "veg", description: "Wrap filled with spiced paneer cubes and onions." },
            { name: "Egg Roll", pcs: "", price: 55, type: "non-veg", description: "Classic flatbread wrap coated with egg and filled with onions." },
            { name: "Double Egg Roll", pcs: "", price: 65, type: "non-veg", description: "Wrap made with double layer of eggs." },
            { name: "Chicken Roll", pcs: "", price: 70, type: "non-veg", description: "Yummy wrap stuffed with juicy chicken pieces." },
            { name: "Chicken Egg Roll", pcs: "", price: 75, type: "non-veg", description: "Chicken roll layered with an egg." },
            { name: "Double Chicken Egg Roll", pcs: "", price: 80, type: "non-veg", description: "Loaded wrap with extra chicken and egg." },
            { name: "Veg Burger", pcs: "", price: 50, type: "veg", description: "Crispy potato-veggie patty in a bun with lettuce and mayo." },
            { name: "Paneer Burger", pcs: "", price: 55, type: "veg", description: "Burger with a thick slab of paneer or paneer patty." },
            { name: "Egg Burger", pcs: "", price: 60, type: "non-veg", description: "Burger stuffed with fried egg and dressings." },
            { name: "Chicken Burger", pcs: "", price: 65, type: "non-veg", description: "Burger with a crispy chicken patty." },
            { name: "Veg Grilled Sandwich", pcs: "", price: 50, type: "veg", description: "Grilled sandwich stuffed with green chutney and sliced veggies." },
            { name: "Paneer Grilled Sandwich", pcs: "", price: 60, type: "veg", description: "Grilled sandwich with spiced cottage cheese filling." },
            { name: "Cheese Sandwich", pcs: "", price: 80, type: "veg", description: "Mouthwatering double cheese grilled sandwich." },
            { name: "Chicken Grilled Sandwich", pcs: "", price: 70, type: "non-veg", description: "Sandwich grilled with chicken salad filling." }
        ]
    },
    specials: {
        title: "Haveli Specials & Thalis",
        icon: "👑",
        items: [
            { name: "Haveli Special Paneer", pcs: "", price: 180, type: "veg", description: "Chef's special recipe of paneer cooked in a rich golden gravy with secret spices." },
            { name: "Haveli Special Mushroom", pcs: "", price: 185, type: "veg", description: "Special mushroom recipe rich in aroma and taste." },
            { name: "Haveli Special Chicken", pcs: "", price: 250, type: "non-veg", description: "Signature chicken gravy with hand-picked spices, thick and delicious." },
            { name: "Haveli Special Mix Fried Rice", pcs: "", price: 170, type: "non-veg", description: "Fried rice tossed with chef's special combination of meats and veggies." },
            { name: "Haveli Special Biryani", pcs: "", price: 200, type: "non-veg", description: "Our finest, ultra-aromatic chicken biryani cooked Dum style." },
            { name: "Haveli Special Burger", pcs: "", price: 70, type: "non-veg", description: "Double decker burger with mixed patties and cheese." },
            { name: "Veg Thali (Min. Order 5)", pcs: "", price: 220, type: "veg", description: "Rice + Mix Veg + Paneer + Dal Tadka + Salad + Papad + Pickle + Sweet (Order min 5 plates)." },
            { name: "Non-Veg Thali (Min. Order 5)", pcs: "", price: 250, type: "non-veg", description: "Biryani/Pulao + Butter Naan + Chicken Gravy + Dal Tadka + Salad + Pickle + Sweet (Order min 5 plates)." }
        ]
    },
    beverages: {
        title: "Ice Age (Beverages & Accompaniments)",
        icon: "🥤",
        items: [
            { name: "Mineral Water", pcs: "", price: 30, type: "veg", description: "Packaged mineral drinking water." },
            { name: "Masala Cold Drink", pcs: "", price: 45, type: "veg", description: "Spiced, refreshing carbonated beverage." },
            { name: "Sprite (750 Ml.)", pcs: "", price: 65, type: "veg", description: "Lemon-lime flavored cold drink." },
            { name: "Coca Cola (750 Ml.)", pcs: "", price: 65, type: "veg", description: "Classic cola cold drink." },
            { name: "Dal Tadka", pcs: "", price: 100, type: "veg", description: "Yellow lentils tempered with ghee, garlic, and red chillies." },
            { name: "Dal Fry", pcs: "", price: 90, type: "veg", description: "Tempered yellow lentils." },
            { name: "Plain Dal", pcs: "", price: 90, type: "veg", description: "Boiled home-style yellow lentils." },
            { name: "Raita", pcs: "", price: 60, type: "veg", description: "Yogurt mixed with spices and boondi or cucumbers." },
            { name: "Green Salad", pcs: "", price: 70, type: "veg", description: "Sliced cucumber, onion, tomato, carrots, and lemon." },
            { name: "Onion Salad", pcs: "", price: 50, type: "veg", description: "Fresh sliced onions served with lemon and green chillies." },
            { name: "Papad Dry", pcs: "", price: 15, type: "veg", description: "Roasted crisp lentil disc." },
            { name: "Papad Fry", pcs: "", price: 20, type: "veg", description: "Deep-fried crisp lentil disc." }
        ]
    }
};

// Export if in Node context (for debugging/scripts)
if (typeof module !== 'undefined') {
    module.exports = menuData;
}
