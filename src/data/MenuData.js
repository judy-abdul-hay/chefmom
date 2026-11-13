// Mock data (Phase 1 is frontend only, so no backend/database)
export const categories = ["All", "Salads", "Mains", "Pastries", "Desserts"];

export const menuItems = [
  { id: 1, name: "Tabbouleh", category: "Salads", price: 6, img: "/images/tabbouleh.jpg",
    desc: "Fresh parsley, tomato, bulgur and lemon.",
    ingredients: ["Parsley", "Tomato", "Bulgur", "Mint", "Lemon", "Olive oil"] },
  { id: 2, name: "Kibbeh", category: "Mains", price: 9, img: "/images/kibbeh.jpg",
    desc: "Crispy shells filled with spiced meat and pine nuts.",
    ingredients: ["Bulgur", "Minced beef", "Onion", "Pine nuts", "Seven spices"] },
  { id: 3, name: "Warak Enab", category: "Mains", price: 8, img: "/images/warak-enab.jpg",
    desc: "Vine leaves rolled by hand, served with lemon.",
    ingredients: ["Vine leaves", "Rice", "Tomato", "Parsley", "Lemon", "Olive oil"] },
  { id: 4, name: "Sambousek", category: "Pastries", price: 7, img: "/images/sambousek.jpg",
    desc: "Golden pastries baked fresh every morning.",
    ingredients: ["Flour", "Cheese", "Parsley", "Butter"] },
  { id: 5, name: "Shish Barak", category: "Mains", price: 10, img: "/images/Shish-barak.jpg",
    desc: "Little dumplings in warm garlic yogurt sauce.",
    ingredients: ["Dough", "Minced beef", "Yogurt", "Garlic", "Mint"] },
  { id: 6, name: "Berry Cheesecake", category: "Desserts", price: 6, img: "/images/cheese-cake.jpg",
    desc: "Creamy cheesecake with a sweet berry topping.",
    ingredients: ["Cream cheese", "Biscuit base", "Berries", "Blueberries"] },
  { id: 7, name: "Fattoush", category: "Salads", price: 6, img: "/images/fatouch.jpg",
    desc: "Crunchy vegetables with toasted bread and sumac.",
    ingredients: ["Lettuce", "Cucumber", "Radish", "Toasted pita", "Sumac"] },
  { id: 8, name: "Maamoul", category: "Desserts", price: 5, img: "/images/Mamoul.jpg",
    desc: "Buttery cookies filled with dates.",
    ingredients: ["Semolina", "Butter", "Dates", "Orange blossom water"] },
];
