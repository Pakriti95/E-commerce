const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");

dotenv.config();

const User = require("./model/User");
const Product = require("./model/Product");

const dummyUsers = [
  {
    name: "Admin User",
    email: "admin@shopnest.com",
    password: "Admin@123",
    role: "admin",
    verified: true,
  },
  {
    name: "John Doe",
    email: "john@example.com",
    password: "User@123",
    role: "user",
    verified: true,
  },
  {
    name: "Jane Smith",
    email: "jane@example.com",
    password: "User@123",
    role: "user",
    verified: true,
  },
  {
    name: "Rahul Sharma",
    email: "rahul@gmail.com",
    password: "User@123",
    role: "user",
    verified: true,
  },
];

const dummyProducts = [
  {
    name: "iPhone 15",
    description: "Latest Apple smartphone",
    price: 79999,
    category: "Mobiles",
    stock: 15,
    imageUrl: "/images/iphone15.jpg",
  },
  {
    name: "Samsung Galaxy S24",
    description: "Premium Android smartphone",
    price: 69999,
    category: "Mobiles",
    stock: 10,
     imageUrl: "/images/s24.jpg",
  },
  {
    name: "MacBook Air M3",
    description: "Lightweight laptop powered by Apple's M3 chip.",
    price: 119999,
    category: "Laptops",
    stock: 10,
    imageUrl: "/images/macbook.jpg",
  },
   {
    name: "Dell XPS 13",
    description: "Premium ultrabook with stunning display and performance.",
    price: 94999,
    category: "Laptops",
    stock: 8,
    imageUrl: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
  },
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected for seeding");

    await User.deleteMany({});
    await Product.deleteMany({});

    const usersWithHashedPasswords = await Promise.all(
      dummyUsers.map(async (user) => ({
        ...user,
        password: await bcrypt.hash(user.password, 10),
      }))
    );

    const createdUsers = await User.insertMany(usersWithHashedPasswords);
    const createdProducts = await Product.insertMany(dummyProducts);

    console.log(`Seeded ${createdUsers.length} Users`);
    console.log(`Seeded ${createdProducts.length} Products`);

    await mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error("SEED ERROR:", error);
    process.exit(1);
  }
};

seedDatabase();