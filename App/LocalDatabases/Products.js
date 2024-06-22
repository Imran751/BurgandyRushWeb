import { Image } from "react-native";

const products = [
    { 
        id: 1, 
        name: "Nike Shoes", 
        Image: require('../Assets/Images/Products/Nike Shoes.png'), 
        Review: "4.7", 
        Category: "Shoes", 
        Price: "$49", 
        Units: "/each", 
        Description: "Experience unmatched comfort and style with Nike Shoes. Engineered for peak performance, these shoes provide excellent support and durability for all your activities. Whether you're hitting the gym or running errands, do it in style with Nike." 
    },
    { 
        id: 2, 
        name: "Men's Shirt", 
        Image: require('../Assets/Images/Products/MenShirt.png'), 
        Review: "4.9", 
        Category: "Shirt", 
        Price: "$22", 
        Units: "/each", 
        Description: "Upgrade your wardrobe with this classic men's shirt. Made from high-quality fabric, it offers a perfect blend of comfort and style. Ideal for both formal and casual occasions, it's a versatile addition to any man's closet." 
    },
    { 
        id: 3, 
        name: "Coconut Oil", 
        Image: require('../Assets/Images/Products/Coconut Oil.png'), 
        Review: "5", 
        Category: "Beauty", 
        Price: "$33", 
        Units: "/each", 
        Description: "Pure and natural, our Coconut Oil is perfect for skin and hair care. Extracted from fresh coconuts, it moisturizes, nourishes, and adds a healthy shine. Use it as a daily moisturizer or a deep conditioning treatment." 
    },
    { 
        id: 4, 
        name: "Laptop", 
        Image: require('../Assets/Images/Products/Laptop.png'), 
        Review: "4.8", 
        Category: "Electronics", 
        Price: "$1999", 
        Units: "/each", 
        Description: "Stay ahead with this high-performance laptop. Featuring the latest technology and a sleek design, it's perfect for work, gaming, and entertainment. Enjoy lightning-fast processing speeds and stunning visuals on the go." 
    },
    { 
        id: 5, 
        name: "Mobile", 
        Image: require('../Assets/Images/Products/Mobile.png'), 
        Review: "4.6", 
        Category: "Electronics", 
        Price: "$999", 
        Units: "/each", 
        Description: "Discover the future of mobile technology with this state-of-the-art smartphone. With a powerful processor, stunning display, and advanced camera system, it meets all your needs for connectivity and entertainment." 
    },
    { 
        id: 6, 
        name: "Kitchen Knife", 
        Image: require('../Assets/Images/Products/Kitchen Knife.png'), 
        Review: "4.9", 
        Category: "Kitchen", 
        Price: "$9", 
        Units: "/each", 
        Description: "Precision and sharpness define this kitchen knife. Made from high-quality stainless steel, it ensures effortless cutting, chopping, and slicing. A must-have tool for every kitchen, enhancing your cooking experience." 
    },
    { 
        id: 7, 
        name: "Honey Shampoo", 
        Image: require('../Assets/Images/Products/Honey Shampoo.png'), 
        Review: "4.9", 
        Category: "Beauty", 
        Price: "$44", 
        Units: "/400ml", 
        Description: "Nourish your hair with our Honey Shampoo. Infused with natural honey, it hydrates and revitalizes your hair, leaving it soft, shiny, and manageable. Perfect for daily use and all hair types." 
    },
    { 
        id: 8, 
        name: "Home-made Cookies", 
        Image: require('../Assets/Images/Products/Home-made Cookies.png'), 
        Review: "4.7", 
        Category: "Food", 
        Price: "$11", 
        Units: "/1KG", 
        Description: "Indulge in the deliciousness of our home-made cookies. Baked to perfection, these cookies offer a delightful blend of flavors and textures. Perfect for snacking or sharing with loved ones." 
    },
];

export { products };
