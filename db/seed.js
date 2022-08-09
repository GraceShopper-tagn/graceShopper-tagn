const prisma = require("./prisma");

const { createUser } = require("./models/user");

const dropTables = async () => {
  console.log(`Dropping tables...`);
  await prisma.$executeRaw`DROP TABLE IF EXISTS users;`;
  console.log("Tables dropped.");
};

const createTables = async () => {
  console.log(`Creating tables...`);
  await prisma.$executeRaw`
      CREATE TABLE users (
      id SERIAL PRIMARY KEY,
      email varchar(255) UNIQUE NOT NULL,
      name varchar(255) 
      );
`;
  console.log("Tables built");
};

const seedDb = async () => {
  console.log("Creating initial users...");
  const user = { email: "123@xyz.com", name: "test" };
  console.log(user);
  const createdUser = await createUser(user);
  console.log(createdUser);
};

const initDb = async () => {
  try {
    await dropTables();
    await createTables();
    await seedDb();
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
};

initDb();
