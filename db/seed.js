const prisma = require("./prisma");

const { createUser } = require("./models/user");
const {
  users,
  products,
  photos,
  productphotos,
  discounts,
  categories,
  tags,
  sizes,
} = require("./seedData");

const dropTables = async () => {
  console.log(`Dropping tables...`);
  await prisma.$executeRaw`DROP TABLE IF EXISTS producttags;`;
  await prisma.$executeRaw`DROP TABLE IF EXISTS tags;`;
  await prisma.$executeRaw`DROP TABLE IF EXISTS categories;`;
  await prisma.$executeRaw`DROP TABLE IF EXISTS productphotos;`;
  await prisma.$executeRaw`DROP TABLE IF EXISTS photos;`;
  await prisma.$executeRaw`DROP TABLE IF EXISTS productsizes;`;
  await prisma.$executeRaw`DROP TABLE IF EXISTS sizes;`;
  await prisma.$executeRaw`DROP TABLE IF EXISTS cartitems;`;
  await prisma.$executeRaw`DROP TABLE IF EXISTS reviews;`;
  await prisma.$executeRaw`DROP TABLE IF EXISTS favorites;`;
  await prisma.$executeRaw`DROP TABLE IF EXISTS orders;`;
  await prisma.$executeRaw`DROP TABLE IF EXISTS products;`;
  await prisma.$executeRaw`DROP TABLE IF EXISTS discounts;`;
  await prisma.$executeRaw`DROP TABLE IF EXISTS users;`;
  console.log("Tables dropped.");
};

const createTables = async () => {
  console.log(`Creating tables...`);
  console.log("creating users");
  await prisma.$executeRaw`
      CREATE TABLE users (
      id SERIAL PRIMARY KEY,
      firstname varchar(255) NOT NULL,
      lastname varchar(255) NOT NULL,
      username varchar(255) UNIQUE NOT NULL,
      email varchar(255) UNIQUE NOT NULL,
      shippingaddress varchar(255) ,
      billingaddress varchar(255) ,
      paymentinfo varchar(255) ,
      isadmin BOOLEAN DEFAULT false,
      createddate DATE NOT NULL DEFAULT CURRENT_DATE
      );`;
  console.log("creating discounts");

  await prisma.$executeRaw`
      CREATE TABLE discounts (
      id SERIAL PRIMARY KEY,
      name varchar(255) UNIQUE NOT NULL,
      percent float NOT NULL,
      couponCode varchar(255) UNIQUE NOT NULL
      );
`;
  console.log("creating products");

  await prisma.$executeRaw`
        CREATE TABLE products (
        id SERIAL PRIMARY KEY,
        name varchar(255),
        description varchar(255),
        price float NOT NULL,
        discountid INTEGER REFERENCES discounts(id),
        createddate DATE NOT NULL DEFAULT CURRENT_DATE,
        numbersold INTEGER NOT NULL DEFAULT 0,
        rating FLOAT DEFAULT 5.0
        );
  `;
  console.log("creating orders");

  await prisma.$executeRaw`
        CREATE TABLE orders (
        id SERIAL PRIMARY KEY,
        discountid INTEGER REFERENCES discounts(id),
        userid INTEGER REFERENCES users(id),
        shippingaddress varchar(255) ,
        billingaddress varchar(255) ,
        fulfilled BOOLEAN DEFAULT false,
        paymentinfo varchar(255) ,
        subtotal float NOT NULL DEFAULT 0.0,
        tax float NOT NULL DEFAULT 0.0,
        total float NOT NULL DEFAULT 0.0,
        orderdate DATE NOT NULL DEFAULT CURRENT_DATE
        );
  `;
  console.log("creating favorites");

  await prisma.$executeRaw`
      CREATE TABLE favorites (
      id SERIAL PRIMARY KEY,
      userid INTEGER REFERENCES users(id),
      productid INTEGER REFERENCES products(id),
      favoriteddate DATE NOT NULL DEFAULT CURRENT_DATE
      );
  `;
  await prisma.$executeRaw`
    CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    userid INTEGER REFERENCES users(id),
    productid INTEGER REFERENCES products(id),
    rating INTEGER NOT NULL,
    content varchar(255) NOT NULL
    );`;
  await prisma.$executeRaw`
      CREATE TABLE cartitems (
      id SERIAL PRIMARY KEY,
      orderid INTEGER REFERENCES orders(id),
      productid INTEGER REFERENCES products(id),
      quantity INTEGER NOT NULL DEFAULT 1,
      subtotal FLOAT DEFAULT 0.0
      );
  `;
  await prisma.$executeRaw`
  CREATE TABLE sizes (
    id SERIAL PRIMARY KEY,
    size FLOAT UNIQUE NOT NULL
  );`;
  await prisma.$executeRaw`
      CREATE TABLE productsizes (
      id SERIAL PRIMARY KEY,
      productid INTEGER REFERENCES products(id),
      sizeid INTEGER REFERENCES sizes(id),
      inventory INTEGER NOT NULL DEFAULT 0
      );
  `;
  await prisma.$executeRaw`
  CREATE TABLE photos(
    id SERIAL PRIMARY KEY,
    name varchar(255) NOT NULL,
    url varchar(255) NOT NULL
  );`;
  await prisma.$executeRaw`
    CREATE TABLE productphotos (
    id SERIAL PRIMARY KEY,
    productid INTEGER REFERENCES products(id),
    photoid INTEGER REFERENCES photos(id)
    );
  `;
  await prisma.$executeRaw`
  CREATE TABLE categories(
    id SERIAL PRIMARY KEY,
    name varchar(255) UNIQUE NOT NULL
  );`;
  await prisma.$executeRaw`
  CREATE TABLE tags(
    id SERIAL PRIMARY KEY,
    name varchar(255) UNIQUE NOT NULL,
    categoryid INTEGER REFERENCES categories(id)
  );`;
  await prisma.$executeRaw`
    CREATE TABLE producttags (
    id SERIAL PRIMARY KEY,
    productid INTEGER REFERENCES products(id),
    tagid INTEGER REFERENCES tags(id)
    );
  `;
  console.log("Tables built");
};

const seedDb = async () => {
  console.log("Creating discounts...");
  for (let discount of discounts) {
    const createdDiscount = await prisma.discounts.create({
      data: discount,
    });
    console.log(createdDiscount);
  }
  console.log("Creating categories...");
  for (let category of categories) {
    const createdCategory = await prisma.categories.create({
      data: category,
    });
    console.log(createdCategory);
  }
  console.log("Creating tags...");
  for (let tag of tags) {
    const createdTag = await prisma.tags.create({
      data: tag,
    });
    console.log(createdTag);
  }
  console.log("Creating sizes...");
  for (let size of sizes) {
    const createdSize = await prisma.sizes.create({
      data: size,
    });
    console.log(createdSize);
    console.log("Creating Users...");
    for (let user of users) {
      const createdUser = await prisma.users.create({
        data: user,
      });
      console.log(createdUser);
    }

    console.log("Creating Products...");
    for (let product of products) {
      const createdProduct = await prisma.products.create({
        data: product,
      });
      console.log(createdProduct);
    }

    console.log("Creating Photos...");
    for (let photo of photos) {
      const createdPhoto = await prisma.photos.create({
        data: photo,
      });
      console.log(createdPhoto);
    }

    console.log("Creating Product Photos...");
    for (let photoOfProduct of productphotos) {
      const createdProductPhoto = await prisma.productphotos.create({
        data: photoOfProduct,
      });
      console.log(createdProductPhoto);
    }
  }
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
